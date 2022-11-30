<?php

namespace App\Models\Repositories;

use App\Entities\Cliente;

interface ClienteRepository
{

    public function getById($id);
    public function getByEmail($email);
    public function getAll();
    public function save(Cliente $cliente);

}
