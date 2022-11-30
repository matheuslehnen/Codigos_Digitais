<?php

namespace App\Http\Controllers;

use App\Entities\Acesso;
use App\Models\Dto\AcessoDto;
use App\Models\Repositories\AcessoRepository;
use Illuminate\Http\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;


class AcessoController extends Controller
{

    private AcessoRepository $acessoRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;

    public function __construct(AcessoRepository $acessoRepository)
    {
        $this->acessoRepository = $acessoRepository;
        $this->encoders = array(new XmlEncoder(), new JsonEncoder());
        $this->normalizers = array(new GetSetMethodNormalizer());
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }


    public function index()
    {
        $acessos = $this->acessoRepository->getAll();
        return $this->serializer->serialize($acessos, 'json');
    }


    public function show(Request $request)
    {
        $acesso = $this->acessoRepository->getByEmail($request['email']);
        return $this->serializer->serialize($acesso, 'json');
    }


    public function create(Request $request)
    {
        $acesso = $this->acessoRepository->getByEmail($request['email']);

        if($acesso && $request->get('senha') == $acesso->getSenha()){
            $acessoDto = new AcessoDto($acesso->getId(), true);
        } else {
            $acessoDto = new AcessoDto(0, false);
        }

        return $this->serializer->serialize($acessoDto, 'json');

    }


}
