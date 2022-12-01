<?php

namespace App\Models\Repositories;


use App\Entities\Usuario;
use Doctrine\ORM\EntityRepository;


class UsuarioRepository extends EntityRepository
{


    public function getAll(): array
    {
        return $this->findAll();
    }

    public function getByEmail($email): Usuario
    {
        return $this->findOneBy(['email' => $email]);
    }

    public function save(Usuario $usuario): Usuario
    {
        $this->getEntityManager()->persist($usuario);
        $this->getEntityManager()->flush();

        return $this->findOneBy(['email' => $usuario->getEmail()]);
    }


}
