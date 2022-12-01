<?php

use App\Http\Controllers\FornecedorController;
use App\Http\Controllers\OrcamentoController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UsuarioController;
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


Route::post('usuario', [UsuarioController::class, 'create']);
Route::post('usuario/login', [UsuarioController::class, 'login']);
Route::get('usuario/{email}', [UsuarioController::class, 'show']);
Route::get('usuario', [UsuarioController::class, 'index']);

Route::post('/cliente', [ClienteController::class, 'create']);
Route::get('/cliente/{cpfCnpj}', [ClienteController::class, 'show']);
Route::get('/cliente', [ClienteController::class, 'index']);

Route::post('/produto', [ProdutoController::class, 'create']);
Route::get('/produto/{id}', [ProdutoController::class, 'show']);
Route::get('/produto', [ProdutoController::class, 'index']);

Route::post('/fornecedor', [FornecedorController::class, 'create']);
Route::get('/fornecedor/{cpfCnpj}', [FornecedorController::class, 'show']);
Route::get('/fornecedor', [FornecedorController::class, 'index']);

Route::post('/orcamento', [OrcamentoController::class, 'create']);
Route::get('/orcamento/{id}', [OrcamentoController::class, 'show']);
Route::get('/orcamento', [OrcamentoController::class, 'index']);





