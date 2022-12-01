<?php


namespace App\Entities;


use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity
 * @ORM\Table(name="endereco")
 */
class Produto
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
    private $titulo;

    /**
     * @ORM\Column(type="integer")
     */
    private $estoque;


}

