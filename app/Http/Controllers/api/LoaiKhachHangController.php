<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\LoaiKhachHang;
use App\Models\NhomGia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;


class LoaiKhachHangController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return LoaiKhachHang::all();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //Validation
    try {
      $formFields = $request->validate([
        'ten_loai_khach_hang' => 'required|unique:loai_khach_hangs,ten_loai_khach_hang'
      ]);

      LoaiKhachHang::create($formFields);
      return response()->json([
        'message' => 'Created successfully!'
      ]);
    } catch (ValidationException $e) {

      return response()->json([
        'error' => 'Tên loại khách hàng đã tồn tại. Vui lòng chọn tên khác!'
      ], 422);
    }
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(LoaiKhachHang $loaiKhachHang)
  {
    return $loaiKhachHang;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, LoaiKhachHang $loaiKhachHang)
  {
    try {
      $formFields = $request->validate([
        'ten_loai_khach_hang' => [
          'required',
          Rule::unique('loai_khach_hangs', 'ten_loai_khach_hang')->ignore($loaiKhachHang->id)
        ]
      ]);

      $loaiKhachHang->update($formFields);
      return response()->json([
        'message' => 'Updated successfully!'
      ]);
    } catch (ValidationException $e) {

      return response()->json([
        'error' => 'Tên loại khách hàng đã tồn tại. Vui lòng chọn tên khác.'
      ], 422);
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(LoaiKhachHang $loai_khach_hang)
  {
    $nhom_gia = NhomGia::where('ma_loai_khach_hang', $loai_khach_hang->id)->first();

    if ($nhom_gia) {
      return response()->json([
        'error' => "Không thể xóa loại khách hàng '{$loai_khach_hang->ten_loai_khach_hang}' vì vẫn có nhóm giá liên quan!"
      ], 422);
    }

    $loai_khach_hang->delete();
    return response()->json([
      'message' => 'Deleted successfully!'
    ]);
  }
}
