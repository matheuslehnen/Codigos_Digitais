<?php

namespace App\Models\Repositories;


use App\Entities\Cliente;
use Doctrine\ORM\EntityRepository;

class ClienteRepository extends EntityRepository
{

    public function getAll()
    {
        return $this->findAll();
    }

    public function getById($id): Cliente
    {
        return $this->find($id);
    }

    public function getByCpfCnpj($cpfCnpj)
    {
        return $this->findOneBy(['cpf_cnpj' => $cpfCnpj]);
    }

    public function save(Cliente $cliente): Cliente
    {
        $this->getEntityManager()->persist($cliente);
        $this->getEntityManager()->flush();

        return $this->find($cliente->getId());
    }

}
