<?php


namespace App\Entities;


use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity
 * @ORM\Table(name="endereco")
 */
class Endereco
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $cep;

    /**
     * @ORM\Column(type="string")
     */
    private $logradouro;

    /**
     * @ORM\Column(type="string")
     */
    private $numero;

    /**
     * @ORM\Column(type="string")
     */
    private $bairro;

    /**
     * @ORM\Column(type="string")
     */
    private $localidade;

    /**
     * @ORM\Column(type="string")
     */
    private $uf;

    /**
     * @param $id
     * @param $cep
     * @param $logradouro
     * @param $numero
     * @param $bairro
     * @param $localidade
     * @param $uf
     */
    public function __construct($id, $cep, $logradouro, $numero, $bairro, $localidade, $uf)
    {
        $this->id = $id;
        $this->cep = $cep;
        $this->logradouro = $logradouro;
        $this->numero = $numero;
        $this->bairro = $bairro;
        $this->localidade = $localidade;
        $this->uf = $uf;
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
    public function getCep()
    {
        return $this->cep;
    }

    /**
     * @param mixed $cep
     */
    public function setCep($cep): void
    {
        $this->cep = $cep;
    }

    /**
     * @return mixed
     */
    public function getLogradouro()
    {
        return $this->logradouro;
    }

    /**
     * @param mixed $logradouro
     */
    public function setLogradouro($logradouro): void
    {
        $this->logradouro = $logradouro;
    }

    /**
     * @return mixed
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * @param mixed $numero
     */
    public function setNumero($numero): void
    {
        $this->numero = $numero;
    }

    /**
     * @return mixed
     */
    public function getBairro()
    {
        return $this->bairro;
    }

    /**
     * @param mixed $bairro
     */
    public function setBairro($bairro): void
    {
        $this->bairro = $bairro;
    }

    /**
     * @return mixed
     */
    public function getLocalidade()
    {
        return $this->localidade;
    }

    /**
     * @param mixed $localidade
     */
    public function setLocalidade($localidade): void
    {
        $this->localidade = $localidade;
    }

    /**
     * @return mixed
     */
    public function getUf()
    {
        return $this->uf;
    }

    /**
     * @param mixed $uf
     */
    public function setUf($uf): void
    {
        $this->uf = $uf;
    }


}

