<?php

namespace App\Models\Repositories;


use App\Models\Entities\Acesso;
use Doctrine\ORM\EntityRepository;


class AcessoRepositoryDoctrine extends EntityRepository implements AcessoRepository
{

    public function getById($id)
    {
        return $this->findById($id);
    }

    public function getByEmail($email)
    {
        return $this->findOneBy(array('email' => $email));
    }

    public function getAll()
    {
        return $this->findAll();
    }

    public function save(Acesso $acesso)
    {
        $this->getEntityManager()->persist($acesso);
        $this->getEntityManager()->flush();
        return $acesso->getId();
    }
}
