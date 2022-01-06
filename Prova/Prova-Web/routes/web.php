<?php

use Illuminate\Support\Facades\Route;

use App\Models\Pessoa;
use App\Models\Registro;
use App\Models\Unidade;
use App\Models\Vacina;
use App\Http\Controllers\PessoaController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\UnidadeController;
use App\Http\Controllers\VacinaController;

Route::get('/', function () {
    return view('principal');
});

Route::get('/geral', function () {
    return view('geral');
});

Route::resource('/pessoas', PessoaController::class);
Route::resource('/registros', RegistroController::class);
Route::resource('/unidades', UnidadeController::class);
Route::resource('/vacinas', VacinaController::class);
