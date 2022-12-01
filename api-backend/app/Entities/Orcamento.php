<?php


namespace App\Entities;


use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\JoinColumn;
use App\Entities\Endereco;
use App\Entities\Cliente;
use App\Entities\Fornecedor;
use App\Entities\Produto;


/**
 * @ORM\Entity
 * @ORM\Table(name="orcamento")
 */
class Orcamento
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne (targetEntity="Cliente", cascade={"all"})
     * @JoinColumn(name="cliente_id", referencedColumnName="id")
     */
    private $cliente;

    /**
     * @ORM\ManyToOne(targetEntity="Fornecedor", cascade={"all"})
     * @JoinColumn(name="fornecedor_id", referencedColumnName="id")
     */
    private $fornecedor;

    /**
     * @ORM\ManyToOne(targetEntity="Produto", cascade={"all"})
     * @JoinColumn(name="produto_id", referencedColumnName="id")
     */
    private $produto;


    /**
     * @ORM\Column(type="integer")
     */
    private $quantidade;

    /**
     * @ORM\Column(type="string")
     */
    private $status;

    /**
     * @param $id
     * @param $cliente
     * @param $fornecedor
     * @param $quantidade
     * @param $status
     */
    public function __construct($cliente, $fornecedor, $produto, $quantidade, $status)
    {
        $this->cliente = $cliente;
        $this->fornecedor = $fornecedor;
        $this->produto = $produto;
        $this->quantidade = $quantidade;
        $this->status = $status;
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
    public function getCliente()
    {
        return $this->cliente;
    }

    /**
     * @param mixed $cliente
     */
    public function setCliente($cliente): void
    {
        $this->cliente = $cliente;
    }

    /**
     * @return mixed
     */
    public function getFornecedor()
    {
        return $this->fornecedor;
    }

    /**
     * @param mixed $fornecedor
     */
    public function setFornecedor($fornecedor): void
    {
        $this->fornecedor = $fornecedor;
    }

    /**
     * @return mixed
     */
    public function getProduto()
    {
        return $this->produto;
    }

    /**
     * @param mixed $produto
     */
    public function setProduto($produto): void
    {
        $this->produto = $produto;
    }


    /**
     * @return mixed
     */
    public function getQuantidade()
    {
        return $this->quantidade;
    }

    /**
     * @param mixed $quantidade
     */
    public function setQuantidade($quantidade): void
    {
        $this->quantidade = $quantidade;
    }

    /**
     * @return mixed
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param mixed $status
     */
    public function setStatus($status): void
    {
        $this->status = $status;
    }


}

