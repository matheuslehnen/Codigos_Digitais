<?php

namespace App\Http\Controllers;

use App\Entities\Usuario;
use App\Models\Dto\AcessoDto;
use App\Models\Repositories\UsuarioRepository;
use Illuminate\Http\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;


class UsuarioController extends Controller
{

    private UsuarioRepository $usuarioRepository;
    private array $encoders;
    private array $normalizers;
    private Serializer $serializer;

    public function __construct(UsuarioRepository $usuarioRepository)
    {
        $this->usuarioRepository = $usuarioRepository;
        $this->encoders = array(new XmlEncoder(), new JsonEncoder());
        $this->normalizers = array(new GetSetMethodNormalizer());
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }


    public function index()
    {
        $usuarios = $this->usuarioRepository->getAll();
        return $this->serializer->serialize($usuarios, 'json');
    }


    public function show(Request $request)
    {
        $usuario = $this->usuarioRepository->getByEmail($request['email']);
        return $this->serializer->serialize($usuario, 'json');
    }


    public function create(Request $request)
    {
        $usuario = new Usuario(
            $request['email'],
            $request['senha'],
        );
        $usuarioDto = $this->usuarioRepository->save($usuario);

        return $this->serializer->serialize($usuarioDto, 'json');

    }

    public function login(Request $request)
    {
        $usuario = $this->usuarioRepository->getByEmail($request['email']);

        if($usuario != null && $request->get('senha') == $usuario->getSenha()){
            $acessoDto = new AcessoDto($usuario->getId(), true);
        } else {
            $acessoDto = new AcessoDto(0, false);
        }

        return $this->serializer->serialize($acessoDto, 'json');
    }


}
