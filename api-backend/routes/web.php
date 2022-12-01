<?php

use App\Http\Controllers\UsuarioController;
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

//Route::post('usuario', [UsuarioController::class, 'create']);
//Route::get('usuario/{email}', [UsuarioController::class, 'show']);
//Route::get('usuario', [UsuarioController::class, 'index']);
//
//Route::post('/cliente', [ClienteController::class, 'create']);
//Route::get('/cliente/{email}', [ClienteController::class, 'show']);
//Route::get('/cliente', [ClienteController::class, 'index']);
//
//Route::post('/produto', [ProdutoController::class, 'create']);
//Route::get('/produto/{email}', [ProdutoController::class, 'show']);
//Route::get('/produto', [ProdutoController::class, 'index']);
//
//Route::post('/fornecedor', [FornecedorController::class, 'create']);
//Route::get('/fornecedor/{email}', [FornecedorController::class, 'show']);
//Route::get('/fornecedor', [FornecedorController::class, 'index']);
//
//Route::post('/orcamento', [OrcamentoController::class, 'create']);
//Route::get('/orcamento/{email}', [OrcamentoController::class, 'show']);
//Route::get('/orcamento', [OrcamentoController::class, 'index']);

