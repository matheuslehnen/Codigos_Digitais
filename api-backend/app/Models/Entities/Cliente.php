<?php

namespace App\Models\Entities;

use Doctrine\ORM\Mapping AS ORM;
use Doctrine\Common\Collections\ArrayCollection;
/**
 * @ORM\Entity
 * @ORM\Table(name="cliente")
 */
class Cliente
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string")
     */
    protected $cpfCnpj;

    /**
     * @ORM\Column(type="string")
     */
    protected $nome;


    /**
     * @ORM\OneToOne(targetEntity="Acesso")
     */
    protected $acesso;

    /**
     * @param $cpfCnpj
     * @param $nome
     * @param $acesso
     */
    public function __construct($cpfCnpj, $nome, $acesso)
    {
        $this->cpfCnpj = $cpfCnpj;
        $this->nome = $nome;
        $this->acesso = $acesso;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getCpfCnpj()
    {
        return $this->cpfCnpj;
    }

    /**
     * @param mixed $cpfCnpj
     */
    public function setCpfCnpj($cpfCnpj): void
    {
        $this->cpfCnpj = $cpfCnpj;
    }

    /**
     * @return mixed
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * @param mixed $nome
     */
    public function setNome($nome): void
    {
        $this->nome = $nome;
    }

    /**
     * @return mixed
     */
    public function getAcesso()
    {
        return $this->acesso;
    }

    /**
     * @param mixed $acesso
     */
    public function setAcesso($acesso): void
    {
        $this->acesso = $acesso;
    }


}

