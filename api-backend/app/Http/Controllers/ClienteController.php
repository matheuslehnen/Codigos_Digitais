<?php

namespace App\Http\Controllers;


use App\Entities\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ClienteController extends Controller
{


    private $clienteRepository;

    /**
     * @param $clienteRepository
     */
    public function __construct($clienteRepository)
    {
        $this->clienteRepository = $clienteRepository;
    }

    public function index()
    {
        return Response::json($this->clienteRepository->getAll());
    }


    public function store(Request $request)
    {
        $cliente = new Cliente(
            $request['cpfCnpj'],
            $request['nome'],
            $request['acesso'],
        );
        return Response::json($this->clienteRepository->save($cliente));
    }


    public function show(Request $request)
    {
        return Response::json($this->clienteRepository->getByEmail($request['email']));
    }


}
