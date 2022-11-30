<?php

namespace App\Models\Repositories;


use App\Models\Entities\Cliente;
use Doctrine\ORM\EntityRepository;

class ClienteRepositoryDoctrine extends EntityRepository implements ClienteRepository
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

    public function save(Cliente $cliente)
    {
        $this->getEntityManager()->persist($cliente);
        $this->getEntityManager()->flush();
        return $cliente->getId();
    }

}
