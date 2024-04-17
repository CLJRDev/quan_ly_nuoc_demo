<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\LoaiKhachHang;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
    $formFields = $request->validate([
      'ten_loai_khach_hang' => 'required|unique:loai_khach_hangs,ten_loai_khach_hang'
    ]);

    LoaiKhachHang::create($formFields);
    return response()->json([
      'message' => 'Created successfully!'
    ]);
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
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(LoaiKhachHang $loaiKhachHang)
  {
    $loaiKhachHang->delete();
    return response()->json([
      'message' => 'Deleted successfully!'
    ]);
  }
}
