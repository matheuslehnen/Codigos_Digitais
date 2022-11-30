<?php

namespace App\Providers;

use App\Entities\Acesso;
use App\Models\Repositories\AcessoRepository;
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
            // This is what Doctrine's EntityRepository needs in its constructor.
            return new AcessoRepository(
                $app['em'],
                $app['em']->getClassMetaData(Acesso::class)
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
