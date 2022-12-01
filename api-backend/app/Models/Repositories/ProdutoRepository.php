<?php

namespace App\Models\Repositories;


use App\Entities\Produto;
use Doctrine\ORM\EntityRepository;


class ProdutoRepository extends EntityRepository
{


    public function getAll(): array
    {
        return $this->findAll();
    }

    public function getById($id)
    {
        return $this->find($id);
    }

    public function save(Produto $produto): Produto
    {
        $this->getEntityManager()->persist($produto);
        $this->getEntityManager()->flush();

        return $this->find($produto->getId());
    }


}
