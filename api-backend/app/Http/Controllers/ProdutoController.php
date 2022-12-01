<?php

namespace App\Http\Controllers;

use App\Entities\Produto;
use App\Models\Repositories\ProdutoRepository;
use Illuminate\Http\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class ProdutoController extends Controller
{
    private ProdutoRepository $produtoRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;

    public function __construct(ProdutoRepository $produtoRepository)
    {
        $this->produtoRepository = $produtoRepository;
        $this->encoders = array(new XmlEncoder(), new JsonEncoder());
        $this->normalizers = array(new GetSetMethodNormalizer());
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }


    public function index()
    {
        $produtosDto = $this->produtoRepository->getAll();
        return $this->serializer->serialize($produtosDto, 'json');
    }


    public function show(Request $request)
    {
        $produtoDto = $this->produtoRepository->getById($request['id']);
        return $this->serializer->serialize($produtoDto, 'json');
    }


    public function create(Request $request)
    {
        $produto = new Produto(
            $request['titulo'],
            $request['quantidade'],

        );
        $produtoDto = $this->produtoRepository->save($produto);

        return $this->serializer->serialize($produtoDto, 'json');
    }
}
