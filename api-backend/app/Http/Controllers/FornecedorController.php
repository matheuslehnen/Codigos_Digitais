<?php

namespace App\Http\Controllers;

use App\Entities\Endereco;
use App\Entities\Fornecedor;
use App\Models\Repositories\EnderecoRepository;
use App\Models\Repositories\FornecedorRepository;
use Illuminate\Http\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class FornecedorController extends Controller
{
    private FornecedorRepository $fornecedorRepository;
    private EnderecoRepository $enderecoRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;

    public function __construct(FornecedorRepository $fornecedorRepository, EnderecoRepository $enderecoRepository)
    {
        $this->fornecedorRepository = $fornecedorRepository;
        $this->enderecoRepository = $enderecoRepository;
        $this->encoders = array(new XmlEncoder(), new JsonEncoder());
        $this->normalizers = array(new GetSetMethodNormalizer());
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }


    public function index()
    {
        $fornecedoresDto = $this->fornecedorRepository->getAll();
        return $this->serializer->serialize($fornecedoresDto, 'json');
    }


    public function show(Request $request)
    {
        $fornecedorDto = $this->fornecedorRepository->getByCpfCnpj($request['cpfCnpj']);
        return $this->serializer->serialize($fornecedorDto, 'json');
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


        $fornecedor = new Fornecedor(
            $request['cpfCnpj'],
            $request['nome'],
            $request['telefone'],
            $endereco
        );
        $fornecedorDto = $this->fornecedorRepository->save($fornecedor);

        return $this->serializer->serialize($fornecedorDto, 'json');
    }
}
