<?php

use App\Http\Controllers\Api\V1\NoteController;
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

Route::group([
    'middleware' => ['auth:sanctum'],
    'namespace' => 'App\Http\Controllers\Api\V1'
], function () {
    // get logged user
    Route::get('/user', fn (Request $request) => $request->user());


    Route::apiResource('notes', NoteController::class);
});

require __DIR__ . '/auth.php';
