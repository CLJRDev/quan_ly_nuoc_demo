<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('nhom_gias', function (Blueprint $table) {
      $table->id();
      $table->string('ten_nhom_gia');
      $table->double('gia_duoi_10m');
      $table->double('gia_tu_10m_den_20m');
      $table->double('gia_tu_20m_den_30m');
      $table->double('gia_tren_30m');
      $table->unsignedBigInteger('ma_loai_khach_hang');
      $table->foreign('ma_loai_khach_hang')
        ->references('id')
        ->on('loai_khach_hangs');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('nhom_gias');
  }
};
