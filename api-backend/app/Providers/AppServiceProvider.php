<?php

namespace App\Providers;

use App\Models\Entities\Acesso;
use App\Models\Entities\Cliente;
use App\Models\Repositories\AcessoRepository;
use App\Models\Repositories\AcessoRepositoryDoctrine;
use App\Models\Repositories\ClienteRepository;
use App\Models\Repositories\ClienteRepositoryDoctrine;
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
        $this->app->bind(AcessoRepository::class, function($app) {
            return new AcessoRepositoryDoctrine(
                $app['em'],
                $app['em']->getClassMetaData(Acesso::class),

            );
        });
        //$this->app->bind(ClienteRepository::class, function($app) {
        //    return new ClienteRepositoryDoctrine(
        //        $app['em'],
        //        $app['em']->getClassMetaData(Cliente::class),
        //
        //    );
        //});
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
