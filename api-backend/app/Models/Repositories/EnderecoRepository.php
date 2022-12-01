<?php

namespace App\Models\Repositories;


use App\Entities\Endereco;
use App\Entities\Usuario;
use Doctrine\ORM\EntityRepository;


class EnderecoRepository extends EntityRepository
{


    public function getAll(): array
    {
        return $this->findAll();
    }

    public function getById($id)
    {
        return $this->find($id);
    }

    public function save(Endereco $endereco)
    {
        $this->getEntityManager()->persist($endereco);
        $this->getEntityManager()->flush();

        return $this->find($endereco->getId());
    }


}
