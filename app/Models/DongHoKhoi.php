<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TuyenDoc;
use App\Models\KichCo;

class DongHoKhoi extends Model
{
  protected $fillable = [
    'ten_dong_ho',
    'trang_thai',
    'ma_kich_co',
    'ma_tuyen_doc'
  ];

  use HasFactory;

  public function tuyen_doc()
  {
    return $this->belongsTo(TuyenDoc::class, 'ma_tuyen_doc');
  }

  public function kich_co()
  {
    return $this->belongsTo(KichCo::class, 'ma_kich_co');
  }
}
