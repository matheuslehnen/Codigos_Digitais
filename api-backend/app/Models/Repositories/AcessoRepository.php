<?php

namespace App\Models\Repositories;

use App\Models\Entities\Acesso;

interface AcessoRepository
{
    public function getById($id);
    public function getByEmail($email);
    public function getAll();
    public function save(Acesso $acesso);


}
