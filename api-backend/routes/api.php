<?php

use App\Http\Controllers\AcessoController;
use App\Http\Controllers\ClienteController;
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


Route::post('/acesso', [AcessoController::class, 'create']);
Route::get('/acesso/{email}', [AcessoController::class, 'show']);
Route::get('/acesso', [AcessoController::class, 'index']);

Route::post('/cliente', [ClienteController::class, 'create']);
Route::get('/cliente/{email}', [ClienteController::class, 'show']);
Route::get('/cliente', [ClienteController::class, 'index']);





