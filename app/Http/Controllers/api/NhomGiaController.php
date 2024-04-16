<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\NhomGia;
use Illuminate\Http\Request;

class NhomGiaController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return NhomGia::with('loai_khach_hang')->get();
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
      'ten_nhom_gia' => 'required|unique:nhom_gias,ten_nhom_gia',
      'gia_duoi_10m' => 'required',
      'gia_tu_10m_den_20m' => 'required',
      'gia_tu_20m_den_30m' => 'required',
      'gia_tren_30m' => 'required',
      'ma_loai_khach_hang' => 'required|unique:nhom_gias,ma_loai_khach_hang'
    ]);

    NhomGia::create($formFields);
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
  public function show(NhomGia $nhomGia)
  {
    return $nhomGia;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, NhomGia $nhomGia)
  {
    $formFields = $request->validate([
      'ten_nhom_gia' => 'required|unique:nhom_gias,ten_nhom_gia',
      'gia_duoi_10m' => 'required',
      'gia_tu_10m_den_20m' => 'required',
      'gia_tu_20m_den_30m' => 'required',
      'gia_tren_30m' => 'required',
      'ma_loai_khach_hang' => 'required|unique:nhom_gias,ma_loai_khach_hang'
    ]);

    $nhomGia->update($formFields);
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
  public function destroy(NhomGia $nhomGia)
  {
    $nhomGia->delete();
    return response()->json([
      'message' => 'Deleted successfully!'
    ]);
  }
}