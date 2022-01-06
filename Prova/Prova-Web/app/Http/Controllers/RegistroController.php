<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistroRequest;
use App\Http\Requests\UpdateRegistroRequest;
use App\Models\Registro;
use App\Models\Pessoa;
use App\Models\Unidade;
use App\Models\Vacina;
use Session;

class RegistroController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registros = Registro::all();
        return view('registros.index', ['registros' => $registros]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pessoas = Pessoa::all();
        $unidades = Unidade::all();
        $vacinas = Vacina::all();
        return view('registros.create', ['pessoas' => $pessoas, 'unidades' => $unidades, 'vacinas' => $vacinas]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreRegistroRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRegistroRequest $request)
    {

        $pessoa_id = $_POST['pessoa_id'];
        $unidade_id = $_POST['unidade_id'];
        $vacina_id = $_POST['vacina_id'];
        $dose = $_POST['dose'];
        $dat_aplic = $_POST['dat_aplic'];
        
        if (empty($dose) || empty($dat_aplic) || empty($pessoa_id) || empty($unidade_id) || empty($vacina_id)) {
            Session::flash('message', 'Inválido!!!'); 
            Session::flash('alert-class', 'alert-danger'); 
            return back();
        }else{
            Registro::create([
                'dose' => $dose, 
                'dat_aplic' => $dat_aplic,
                'pessoa_id' => $pessoa_id, 
                'unidade_id' => $unidade_id, 
                'vacina_id' => $vacina_id
            ]);

            Session::flash('message', 'Registro criado com sucesso!');
            Session::flash('alert-class', 'alert-success'); 
            return edirect()->route('unidades.index');
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function show(Registro $registro)
    {
        return view('registros.show', ['registro' => $registro]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function edit(Registro $registro)
    {
        $pessoas = Pessoa::all();
        $unidades = Unidade::all();
        $vacinas = Vacina::all();
        return view('registros.edit',
            ['registro' => $registro]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRegistroRequest  $request
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRegistroRequest $request, Registro $registro)
    {
        $dose = $_POST['dose'];
        $dat_aplic = $_POST['dat_aplic'];

        $pessoa_id = $_POST['pessoa_id'];
        $unidade_id = $_POST['unidade_id'];
        $vacina_id = $_POST['vacina_id'];

        if (empty($dose) || empty($dat_aplic) || empty($pessoa_id) || empty($unidade_id) || empty($vacina_id)){
            Session::flash('message', 'Inválido!!!'); 
            Session::flash('alert-class', 'alert-danger'); 
            return back();
        }else{
            $registro->dose = $dose;
            $registro->dat_aplic = $dat_aplic;
            $registro->pessoa_id = $pessoa_id;
            $registro->unidade_id = $unidade_id;
            $registro->vacina_id = $vacina_id;
            
            $registro->update();

            Session::flash('message', 'Registro atualizado com sucesso!');
            Session::flash('alert-class', 'alert-success'); 
            return redirect('registros');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Registro $registro)
    {
        $registro->delete();
        session()->flash('mensagem', 'Registro excluído com sucesso!');
        return redirect()->route('registros.index');
    }
}
