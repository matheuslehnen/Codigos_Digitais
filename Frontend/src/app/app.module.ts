import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';

import {ApiService} from "./service/api/api.service";
import {NgxMaskModule} from "ngx-mask";
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppMaterialModule} from "./shared/app-material/app-material.module";
import {CustomMaskConfig} from "../../constants";
import {AuthService} from "./service/auth/auth.service";
import {ClienteService} from "./service/cliente/cliente.service";
import {DashboardService} from "./service/dashboard/dashboard.service";
import {OrcamentoService} from "./service/orcamento/orcamento.service";
import {FornecedorService} from "./service/fornecedor/fornecedor.service";
import {ProdutoService} from "./service/produto/produto.service";
import {ViaCepService} from "./service/viaCep/via-cep.service";
import {UsuarioService} from "./service/usuario/usuario.service";


@NgModule({
    imports: [
        AppMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatNativeDateModule,
        NgxMaskModule.forRoot(CustomMaskConfig),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ApiService,
        AuthService,
        ClienteService,
        DashboardService,
        FornecedorService,
        OrcamentoService,
        ProdutoService,
        ViaCepService,
        UsuarioService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
