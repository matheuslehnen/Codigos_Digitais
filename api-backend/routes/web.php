<?php

use App\Http\Controllers\AcessoController;
use App\Http\Controllers\ClienteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/acesso', [AcessoController::class, 'create']);

Route::get('/acesso/{email}', [AcessoController::class, 'show']);

Route::get('/acesso', [AcessoController::class, 'index']);

