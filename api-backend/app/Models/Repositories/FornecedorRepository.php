<?php

namespace App\Models\Repositories;


use App\Entities\Fornecedor;
use App\Entities\Usuario;
use Doctrine\ORM\EntityRepository;


class FornecedorRepository extends EntityRepository
{


    public function getAll(): array
    {
        return $this->findAll();
    }

    public function getById($id): Fornecedor
    {
        return $this->find($id);
    }

    public function getByCpfCnpj($cpfCnpj)
    {
        return $this->findOneBy(['cpf_cnpj' => $cpfCnpj]);
    }

    public function save(Fornecedor $fornecedor): Fornecedor
    {
        $this->getEntityManager()->persist($fornecedor);
        $this->getEntityManager()->flush();

        return $this->find($fornecedor->getId());
    }


}
