<?php

namespace App\Http\Controllers;


use App\Entities\Cliente;
use App\Entities\Endereco;
use App\Models\Repositories\ClienteRepository;
use App\Models\Repositories\EnderecoRepository;
use Illuminate\Http\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class ClienteController extends Controller
{


    private ClienteRepository $clienteRepository;
    private EnderecoRepository $enderecoRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;

    public function __construct(ClienteRepository $clienteRepository, EnderecoRepository $enderecoRepository)
    {
        $this->clienteRepository = $clienteRepository;
        $this->enderecoRepository = $enderecoRepository;
        $this->encoders = array(new XmlEncoder(), new JsonEncoder());
        $this->normalizers = array(new GetSetMethodNormalizer());
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }


    public function index()
    {
        $clientesDto = $this->clienteRepository->getAll();
        return $this->serializer->serialize($clientesDto, 'json');
    }


    public function show(Request $request)
    {
        $clienteDto = $this->clienteRepository->getByCpfCnpj($request['cpfCnpj']);
        return $this->serializer->serialize($clienteDto, 'json');
    }


    public function create(Request $request)
    {
        $enderecoForm = new Endereco(
            $request['endereco']['cep'],
            $request['endereco']['logradouro'],
            $request['endereco']['numero'],
            $request['endereco']['bairro'],
            $request['endereco']['localidade'],
            $request['endereco']['uf'],
        );
        $endereco = $this->enderecoRepository->save($enderecoForm);

        $cliente = new Cliente(
            $request['cpfCnpj'],
            $request['nome'],
            $request['telefone'],
            $endereco
        );

        $clienteDto = $this->clienteRepository->save($cliente);

        return $this->serializer->serialize($clienteDto, 'json');
    }


}
