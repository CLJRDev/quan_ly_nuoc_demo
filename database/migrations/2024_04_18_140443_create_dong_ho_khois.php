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
    Schema::create('dong_ho_khois', function (Blueprint $table) {
      $table->id();
      $table->string('ten_dong_ho');
      $table->string('trang_thai');
      $table->unsignedBigInteger('ma_kich_co');
      $table->unsignedBigInteger('ma_tuyen_doc');
      $table->foreign('ma_kich_co')->references('id')->on('kich_cos');
      $table->foreign('ma_tuyen_doc')->references('id')->on('tuyen_docs');
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
    Schema::dropIfExists('dong_ho_khois');
  }
};
