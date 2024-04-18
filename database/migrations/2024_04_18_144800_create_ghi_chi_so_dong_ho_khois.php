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
    Schema::create('ghi_chi_so_dong_ho_khois', function (Blueprint $table) {
      $table->id();
      $table->string('ky_chi_so');
      $table->date('tu_ngay');
      $table->date('den_ngay');
      $table->integer('chi_so_cu');
      $table->integer('chi_so_moi');
      $table->integer('so_tieu_thu');
      $table->unsignedBigInteger('ma_dong_ho');
      $table->foreign('ma_dong_ho')->references('id')->on('dong_ho_khois');
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
    Schema::dropIfExists('ghi_chi_so_dong_ho_khois');
  }
};
