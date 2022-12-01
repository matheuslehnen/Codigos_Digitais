<?php

namespace App\Models\Repositories;


use App\Entities\Usuario;
use Doctrine\ORM\EntityRepository;


class FornecedorRepository extends EntityRepository
{


    public function getAll()
    {
        return $this->findAll();
    }

    public function getByEmail($email)
    {
        return $this->findOneBy(['email' => $email]);
    }

    public function save(Usuario $acesso)
    {
        $this->getEntityManager()->persist($acesso);
        $this->getEntityManager()->flush();

        return $acesso = $this->findOneBy(array('email' => $acesso->getEmail()));
    }


}
