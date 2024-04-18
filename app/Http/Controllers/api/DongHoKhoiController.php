<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\DongHoKhoi;
use Illuminate\Http\Request;

class DongHoKhoiController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return DongHoKhoi::with('tuyen_doc', 'kich_co')->get();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $formFields = $request->validate([
      'ten_dong_ho' => 'required|unique:dong_ho_khois,ten_dong_ho',
      'trang_thai' => 'required',
      'ma_kich_co' => 'required',
      'ma_tuyen_doc' => 'required'
    ]);

    DongHoKhoi::create($formFields);
    return response()->json([
      'message' => 'Created successfuly!'
    ]);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $dong_ho_khoi = DongHoKhoi::with('tuyen_doc', 'kich_co')->find($id);

    if (!$dong_ho_khoi) {
      return response()->json(['error' => 'Không tìm thấy đồng hồ khối!'], 422);
    }

    $result = [$dong_ho_khoi];

    return response()->json([
      'data' => $result
    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(DongHoKhoi $dong_ho_khoi)
  {
    $dong_ho_khoi->delete();
    return response()->json([
      'message' => 'Deleted successfully!'
    ]);
  }
}
