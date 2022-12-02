<?php

namespace App\Models\Repositories;


use App\Entities\Cliente;
use App\Entities\Orcamento;
use App\Entities\Usuario;
use Doctrine\ORM\EntityRepository;
use http\Env\Request;


class OrcamentoRepository extends EntityRepository
{


    public function getAll(): array
    {
        return $this->findAll();
    }

    public function getById($id)
    {
        return $this->find($id);
    }

    public function save(Orcamento $orcamento): Orcamento
    {

        $this->getEntityManager()->persist($orcamento);
        $this->getEntityManager()->flush();


        return $this->find($orcamento->getId());
    }


}
