<?php

namespace App\Models\Repositories;


use App\Entities\Acesso;
use Doctrine\ORM\EntityRepository;


class AcessoRepository extends EntityRepository
{


    public function getAll()
    {
        return $this->findAll();
    }

    public function getByEmail($email)
    {
        return $this->findOneBy(['email' => $email]);
    }

    public function save(Acesso $acesso)
    {
        $this->getEntityManager()->persist($acesso);
        $this->getEntityManager()->flush();

        return $acesso = $this->findOneBy(array('email' => $acesso->getEmail()));
    }


}
