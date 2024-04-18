<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::apiResource('loai_khach_hang', 'App\Http\Controllers\api\LoaiKhachHangController');
Route::apiResource('nhom_gia', 'App\Http\Controllers\api\NhomGiaController');
Route::apiResource('tuyen_doc', 'App\Http\Controllers\api\TuyenDocController');
Route::apiResource('kich_co', 'App\Http\Controllers\api\KichCoController');
Route::apiResource('dong_ho_khoi', 'App\Http\Controllers\api\DongHoKhoiController');
Route::apiResource('ghi_chi_so_dong_ho_khoi', 'App\Http\Controllers\api\GhiChiSoDongHoKhoiController');
