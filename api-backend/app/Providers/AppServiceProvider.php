<?php

namespace App\Providers;

use App\Entities\Cliente;
use App\Entities\Endereco;
use App\Entities\Fornecedor;
use App\Entities\Orcamento;
use App\Entities\Produto;
use App\Entities\Usuario;
use App\Models\Repositories\ClienteRepository;
use App\Models\Repositories\EnderecoRepository;
use App\Models\Repositories\FornecedorRepository;
use App\Models\Repositories\OrcamentoRepository;
use App\Models\Repositories\ProdutoRepository;
use App\Models\Repositories\UsuarioRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ClienteRepository::class, function($app) {
            return new ClienteRepository(
                $app['em'],
                $app['em']->getClassMetaData(Cliente::class),

            );
        });
        $this->app->bind(EnderecoRepository::class, function($app) {
            return new EnderecoRepository(
                $app['em'],
                $app['em']->getClassMetaData(Endereco::class),

            );
        });
        $this->app->bind(FornecedorRepository::class, function($app) {
            return new FornecedorRepository(
                $app['em'],
                $app['em']->getClassMetaData(Fornecedor::class),

            );
        });
        $this->app->bind(OrcamentoRepository::class, function($app) {
            return new OrcamentoRepository(
                $app['em'],
                $app['em']->getClassMetaData(Orcamento::class),

            );
        });
        $this->app->bind(ProdutoRepository::class, function($app) {
            return new ProdutoRepository(
                $app['em'],
                $app['em']->getClassMetaData(Produto::class),

            );
        });
        $this->app->bind(UsuarioRepository::class, function($app) {
            return new UsuarioRepository(
                $app['em'],
                $app['em']->getClassMetaData(Usuario::class)
            );
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
