import {Injectable} from '@angular/core';
import {ClienteDto} from "../../shared/model/dto/clienteDto";
import {FornecedorDto} from "../../shared/model/dto/fornecedorDto";
import {ProdutoDto} from "../../shared/model/dto/produtoDto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject, Subscription} from "rxjs";
import {ApiService} from "../api/api.service";
import {OrcamentoDto} from "../../shared/model/dto/orcamentoDto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class OrcamentoService {

    cliente: ClienteDto;
    clientes: ClienteDto[];
    fornecedor: FornecedorDto;
    fornecedores: FornecedorDto[];
    produto: ProdutoDto;
    produtos: ProdutoDto[];
    orcamento: OrcamentoDto;
    orcamentos: OrcamentoDto[];
    quantidade: number;
    status: string;

    orcamentoFormGroup: FormGroup;

    clientesEmitter = new Subject<ClienteDto[]>;
    fornecedoresEmitter = new Subject<FornecedorDto[]>;
    produtosEmitter = new Subject<ProdutoDto[]>;
    orcamentosEmitter = new Subject<OrcamentoDto[]>;

    subscription$: Subscription;
    clientesSubscription$: Subscription;
    fornecedoresSubscription$: Subscription;
    produtosSubscription$: Subscription;
    orcamentosSubscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar
    ) {
        this.orcamentoFormGroup = this.formBuilder.group({
            cliente: [''],
            fornecedor: [''],
            produto: [''],
            quantidade: [''],
            status: ['']
        })
    }

    getFormGroup() {
        return this.orcamentoFormGroup;
    }

    submit(orcamentoFormGroup: FormGroup) {
        this.subscription$ = this.apiService.submitOrcamentoFormGroup(orcamentoFormGroup)
            .subscribe(orcamentoDto => {
                if(orcamentoDto.id){
                    this.snackBar.open('Orcamento cadastrado com sucesso!');
                    this.orcamentoFormGroup.reset();
                    window.scrollTo(0, 0);
                }
            })
    }

    getClientes() {
        this.clientesSubscription$ = this.apiService.getClientes()
            .subscribe(clientesDto => {
                this.clientes = clientesDto;
                this.clientesEmitter.next(this.clientes)
            })
    }

    getFornecedores() {
        this.clientesSubscription$ = this.apiService.getFornecedores()
            .subscribe(fornecedoresDto => {
                this.fornecedores = fornecedoresDto;
                this.fornecedoresEmitter.next(this.fornecedores)
            })
    }

    getProdutos() {
        this.clientesSubscription$ = this.apiService.getProdutos()
            .subscribe(produtosDto => {
                this.produtos = produtosDto;
                this.produtosEmitter.next(this.produtos)
            })
    }

    getOrcamentos() {
        this.orcamentosSubscription$ = this.apiService.getOrcamentos()
            .subscribe(orcamentosDto => {
                this.orcamentos = orcamentosDto;
                this.orcamentosEmitter.next(this.orcamentos)
            })
    }

    getStatus() {
        return [
            'Pendente',
            'Em andamento',
            'Autorizado',
            'Concluído',
            'Entregue'
        ];
    }

    ngOnDestroy(): void {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
        if (this.clientesSubscription$) {
            this.clientesSubscription$.unsubscribe();
        }
        if (this.fornecedoresSubscription$) {
            this.fornecedoresSubscription$.unsubscribe();
        }
        if (this.produtosSubscription$) {
            this.produtosSubscription$.unsubscribe();
        }
        if (this.orcamentosSubscription$) {
            this.orcamentosSubscription$.unsubscribe();
        }
    }

}
