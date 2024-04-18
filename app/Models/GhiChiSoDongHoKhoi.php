<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GhiChiSoDongHoKhoi extends Model
{
  protected $fillable = [
    'ky_chi_so',
    'tu_ngay',
    'den_ngay',
    'chi_so_cu',
    'chi_so_moi',
    'so_tieu_thu',
    'ma_dong_ho'
  ];
  protected $dates = ['tu_ngay', 'den_ngay'];
  use HasFactory;
}
