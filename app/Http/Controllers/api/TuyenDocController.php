<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\TuyenDoc;
use Illuminate\Http\Request;

class TuyenDocController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return TuyenDoc::all();
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
      'ten_tuyen' => 'required|unique:tuyen_docs,ten_tuyen'
    ]);

    TuyenDoc::create($formFields);
    return response()->json([
      'messasge' => 'Created successfully!'
    ]);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(TuyenDoc $tuyen_doc)
  {
    return $tuyen_doc;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TuyenDoc $tuyen_doc)
  {
    $formFields = $request->validate([
      'ten_tuyen' => 'required|unique:tuyen_docs,ten_tuyen'
    ]);

    $tuyen_doc->update($formFields);
    return response()->json([
      'messasge' => 'Updated successfully!'
    ]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(TuyenDoc $tuyen_doc)
  {
    $tuyen_doc->delete();
    return response()->json([
      'messasge' => 'Deleted successfully!'
    ]);
  }
}
