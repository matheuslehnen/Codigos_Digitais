<?php

namespace App\Models\Repositories;


use App\Entities\Acesso;
use Doctrine\ORM\EntityRepository;


class DoctrineAcessoRepository extends EntityRepository implements AcessoRepository
{


    public function getById($id)
    {
        dd($this->find($id));
        //dd($this->em->find(Acesso::class, $id));
        //return $this->em->find($id);
    }

    public function getByEmail($email)
    {
        dd($this->findOneBy(array('email' => $email)));
        //return $this->em->getRepository(Acesso::class)->findOneBy(array('email' => $email));
        //return $this->em->findOneBy(array('email' => $email));
    }

    public function getAll()
    {
        dd($this->findAll());
        //return $this->em->getRepository(Acesso::class)->findAll();
    }

    public function save(Acesso $acesso)
    {

        $this->getEntityManager()->persist($acesso);
        $this->getEntityManager()->flush();
        return $acesso->getId();
    }


}
