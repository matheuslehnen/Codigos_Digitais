<?php

namespace App\Http\Controllers;

use App\Entities\Cliente;
use App\Entities\Endereco;
use App\Entities\Fornecedor;
use App\Entities\Orcamento;
use App\Entities\Produto;
use App\Models\Repositories\OrcamentoRepository;
use Illuminate\Http\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class OrcamentoController extends Controller
{
    private OrcamentoRepository $orcamentoRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;

    public function __construct(OrcamentoRepository $orcamentoRepository)
    {
        $this->orcamentoRepository = $orcamentoRepository;
        $this->encoders = array(new XmlEncoder(), new JsonEncoder());
        $this->normalizers = array(new GetSetMethodNormalizer());
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }


    public function index()
    {
        $produtosDto = $this->orcamentoRepository->getAll();
        return $this->serializer->serialize($produtosDto, 'json');
    }


    public function show(Request $request)
    {
        $orcamentoDto = $this->orcamentoRepository->getById($request['id']);
        return $this->serializer->serialize($orcamentoDto, 'json');
    }


    public function create(Request $request)
    {
        $orcamento = $this->converteOrcamento($request);

        $orcamentoDto = $this->orcamentoRepository->save($orcamento);

        return $this->serializer->serialize($orcamentoDto, 'json');

    }

    public function converteOrcamento(Request $request){

        $clienteForm = $request->input('cliente');
        $clienteEnderecoForm = $request->input('cliente')['endereco'];
        $fornecedorForm = $request->input('fornecedor');
        $fornecedorEnderecoForm = $request->input('fornecedor')['endereco'];
        $produtoForm = $request->input('produto');

        $clienteEndereco = new Endereco(
            $clienteEnderecoForm['cep'],
            $clienteEnderecoForm['logradouro'],
            $clienteEnderecoForm['numero'],
            $clienteEnderecoForm['bairro'],
            $clienteEnderecoForm['localidade'],
            $clienteEnderecoForm['uf'],
        );
        $clienteEndereco->setId($clienteEnderecoForm['id']);

        $fornecedorEndereco = new Endereco(
            $fornecedorEnderecoForm['cep'],
            $fornecedorEnderecoForm['logradouro'],
            $fornecedorEnderecoForm['numero'],
            $fornecedorEnderecoForm['bairro'],
            $fornecedorEnderecoForm['localidade'],
            $fornecedorEnderecoForm['uf'],
        );
        $fornecedorEndereco->setId($fornecedorEnderecoForm['id']);

        $cliente = new Cliente (
            $clienteForm['cpfCnpj'],
            $clienteForm['nome'],
            $clienteForm['telefone'],
            $clienteEndereco
        );
        $cliente->setId($clienteForm['id']);

        $fornecedor = new Fornecedor(
            $fornecedorForm['cpfCnpj'],
            $fornecedorForm['nome'],
            $fornecedorForm['telefone'],
            $fornecedorEndereco
        );
        $fornecedor->setId($fornecedorForm['id']);


        $produto = new Produto(
            $produtoForm['titulo'],
            $produtoForm['estoque']
        );
        $produto->setId($produtoForm['id']);

        return new Orcamento(
            $cliente,
            $fornecedor,
            $produto,
            $request->input('quantidade'),
            $request->input('status'),
        );
    }
}
