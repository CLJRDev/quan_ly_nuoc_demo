<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\LoaiKhachHang;

class NhomGia extends Model
{
  protected $fillable = [
    'ten_nhom_gia',
    'gia_duoi_10m',
    'gia_tu_10m_den_20m',
    'gia_tu_20m_den_30m',
    'gia_tren_30m',
    'ma_loai_khach_hang'
  ];
  use HasFactory;

  public function loai_khach_hang()
  {
    return $this->belongsTo(LoaiKhachHang::class, 'ma_loai_khach_hang');
  }
}
