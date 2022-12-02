<?php

namespace App\Http\Controllers;

use App\Entities\Orcamento;
use App\Models\Repositories\ClienteRepository;
use App\Models\Repositories\FornecedorRepository;
use App\Models\Repositories\OrcamentoRepository;
use App\Models\Repositories\ProdutoRepository;
use Illuminate\Http\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class OrcamentoController extends Controller
{
    private OrcamentoRepository $orcamentoRepository;
    private ClienteRepository $clienteRepository;
    private FornecedorRepository $fornecedorRepository;
    private ProdutoRepository $produtoRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;

    public function __construct(
        OrcamentoRepository $orcamentoRepository,
        ClienteRepository $clienteRepository,
        FornecedorRepository $fornecedorRepository,
        ProdutoRepository $produtoRepository
    )
    {
        $this->orcamentoRepository = $orcamentoRepository;
        $this->clienteRepository = $clienteRepository;
        $this->fornecedorRepository = $fornecedorRepository;
        $this->produtoRepository = $produtoRepository;
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
        $cliente = $this->clienteRepository->find($request->input('cliente')['id']);
        $fornecedor = $this->fornecedorRepository->find($request->input('fornecedor')['id']);
        $produto = $this->produtoRepository->find($request->input('produto')['id']);

        $orcamento = new Orcamento(
            $cliente,
            $fornecedor,
            $produto,
            $request->input('quantidade'),
            $request->input('status'),
        );

        $orcamentoDto = $this->orcamentoRepository->save($orcamento);

        return $this->serializer->serialize($orcamentoDto, 'json');
    }

}
