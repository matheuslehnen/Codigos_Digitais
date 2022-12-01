import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from "./admin/admin/admin.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ClienteComponent} from "./components/cliente/cliente.component";
import {FornecedorComponent} from "./components/fornecedor/fornecedor.component";
import {ProdutoComponent} from "./components/produto/produto.component";
import {OrcamentoComponent} from "./components/orcamento/orcamento.component";
import {LoginComponent} from "./components/login/login.component";
import {UsuarioComponent} from "./components/usuario/usuario.component";


const routes: Routes = [
    {path: "", redirectTo: '/admin/login', pathMatch: 'full', component: LoginComponent},
    {
        path: "admin", component: AdminComponent, children: [
            {path: "login", component: LoginComponent},
            {path: 'usuario', component: UsuarioComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: "cliente", component: ClienteComponent},
            {path: "fornecedor", component: FornecedorComponent},
            {path: "produto", component: ProdutoComponent},
            {path: "orcamento", component: OrcamentoComponent},

        ]
    },
    {path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
