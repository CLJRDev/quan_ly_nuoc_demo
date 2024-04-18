<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\GhiChiSoDongHoKhoi;
use Illuminate\Http\Request;

class GhiChiSoDongHoKhoiController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return GhiChiSoDongHoKhoi::all();
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
      'ky_chi_so' => 'required',
      'tu_ngay' => 'required|date',
      'den_ngay' => 'required|date',
      'chi_so_moi' => 'required',
      'ma_dong_ho' => 'required'
    ]);

    $ky_chi_so = $formFields['ky_chi_so'];
    $tu_ngay = $formFields['tu_ngay'];
    $den_ngay = $formFields['den_ngay'];
    $chi_so_moi = $formFields['chi_so_moi'];
    $ma_dong_ho = $formFields['ma_dong_ho'];

    $dong_ho = GhiChiSoDongHoKhoi::where('ma_dong_ho', $ma_dong_ho)->orderBy('den_ngay', 'desc')->first();
    $chi_so_cu = $dong_ho ? $dong_ho->chi_so_moi : 0;
    $so_tieu_thu = $chi_so_moi - $chi_so_cu;

    $formFields = GhiChiSoDongHoKhoi::create([
      'ky_chi_so' => $ky_chi_so,
      'tu_ngay' => $tu_ngay,
      'den_ngay' => $den_ngay,
      'chi_so_cu' => $chi_so_cu,
      'chi_so_moi' => $chi_so_moi,
      'so_tieu_thu' => $so_tieu_thu,
      'ma_dong_ho' => $ma_dong_ho
    ]);

    return response()->json([
      'message' => 'Created successfully!',
      'data' => $formFields
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
    $ghi_chi_so_dong_ho_khoi = GhiChiSoDongHoKhoi::where('ma_dong_ho', $id)->orderby('den_ngay', 'desc')->get();
    $lich_su = GhiChiSoDongHoKhoi::find($id);
    return response()->json([
      'ghi_chi_so' => $ghi_chi_so_dong_ho_khoi,
      'lich_su' => $lich_su
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
    $formFields = $request->validate([
      'chi_so_moi' => 'required',
    ]);
    $chi_so_moi = $formFields['chi_so_moi'];

    $ghi_chi_so = GhiChiSoDongHoKhoi::find($id);
    $chi_so_cu = $ghi_chi_so->chi_so_cu;
    $so_tieu_thu = $chi_so_moi - $chi_so_cu;

    $ghi_chi_so->chi_so_moi = $chi_so_moi;
    $ghi_chi_so->so_tieu_thu = $so_tieu_thu;
    $ghi_chi_so->save();

    return response()->json([
      'message' => 'Updated successfully!',
      'data' => $ghi_chi_so
    ]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(GhiChiSoDongHoKhoi $ghi_chi_so_dong_ho_khoi)
  {
    $ghi_chi_so_dong_ho_khoi->delete();
    return response()->json([
      'message' => 'Deleted successfully!'
    ]);
  }
}
