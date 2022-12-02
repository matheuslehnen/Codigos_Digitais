import {Injectable, OnDestroy} from '@angular/core';
import {OrcamentoService} from "../orcamento/orcamento.service";
import {Subject, Subscription} from "rxjs";
import {OrcamentoDto} from "../../shared/model/dto/orcamentoDto";
import {UsuarioDto} from "../../shared/model/dto/usuarioDto";
import {ApiService} from "../api/api.service";

@Injectable({
    providedIn: 'root'
})
export class DashboardService implements OnDestroy {


    usuarios: UsuarioDto[];
    usuariosEmitter = new Subject<UsuarioDto[]>;
    usuariosSubscription$: Subscription;
    subscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private orcamentoService: OrcamentoService
    ) {
    }

    getClientes() {
        this.orcamentoService.getClientes();
    }

    getFornecedores() {
        this.orcamentoService.getFornecedores();
    }

    getProdutos() {
        this.orcamentoService.getProdutos();
    }

    getOrcamentos() {
        this.orcamentoService.getOrcamentos();
    }

    getUsuarios() {
        this.subscription$ = this.apiService.getUsuarios()
            .subscribe(usuariosDto => {
                this.usuarios = usuariosDto;
                this.usuariosEmitter.next(this.usuarios)
            })
    }

    ngOnDestroy(): void {
        if (this.usuariosSubscription$) {
            this.usuariosSubscription$.unsubscribe();
        }
    }

    getDisplayedColumnsClientes() {
        return ['id', 'cpfCnpj', 'nome', 'telefone'];
    }

    getDisplayedColumnsProdutos() {
        return ['id', 'titulo', 'quantidade'];
    }
}
