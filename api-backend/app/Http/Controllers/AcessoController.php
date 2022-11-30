<?php

namespace App\Http\Controllers;

use App\Models\Entities\Acesso;
use App\Models\Entities\Cliente;

use App\Models\Repositories\AcessoRepository;
use App\Models\Repositories\AcessoRepositoryDoctrine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class AcessoController extends Controller
{

    protected $acessoRepository;

    public function __construct(AcessoRepositoryDoctrine $acessoRepository)
    {
        $this->acessoRepository = $acessoRepository;
    }

    public function index()
    {
        return $this->acessoRepository->getAll();
        //return Response::json($this->acessoRepository->getAll());
    }


    public function store(Request $request)
    {
        $acesso = new Acesso($request['email'], $request['senha']);
        return Response::json($this->acessoRepository->save($acesso));
    }


    public function show(Request $request)
    {
       return Response::json($this->acessoRepository->getByEmail($request['email']));
    }


}
