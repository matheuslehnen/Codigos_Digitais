import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {OrcamentoService} from "../../service/orcamento/orcamento.service";
import {ClienteDto} from "../../shared/model/dto/clienteDto";
import {ProdutoDto} from "../../shared/model/dto/produtoDto";
import {FornecedorDto} from "../../shared/model/dto/fornecedorDto";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-orcamento',
    templateUrl: './orcamento.component.html',
    styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit, OnDestroy {

    orcamentoFormGroup: FormGroup;
    hide = true;
    enabled = false;
    clientes: ClienteDto[];
    cliente: ClienteDto;
    fornecedores: FornecedorDto[];
    fornecedor: FornecedorDto;
    produto: ProdutoDto;
    produtos: ProdutoDto[];
    quantidade: number;
    statuses: string[];

    clientesSubscription$: Subscription;
    fornecedoresSubscription$: Subscription;
    produtosSubscription$: Subscription;


    constructor(
        private orcamentoService: OrcamentoService,
    ) {
    }

    ngOnInit(): void {
        this.orcamentoFormGroup = this.orcamentoService.getFormGroup();
        this.orcamentoService.getClientes();
        this.orcamentoService.getFornecedores();
        this.orcamentoService.getProdutos();
        this.statuses = this.orcamentoService.getStatus();
        this.clientesSubscription$ = this.orcamentoService.clientesEmitter
            .subscribe(clientesDto => {
                this.clientes = clientesDto;
            })
        this.fornecedoresSubscription$ = this.orcamentoService.fornecedoresEmitter
            .subscribe(fornecedoresDto => {
                this.fornecedores = fornecedoresDto;
            })
        this.produtosSubscription$ = this.orcamentoService.produtosEmitter
            .subscribe(produtosDto => {
                this.produtos = produtosDto;
            })
    }

    onSubmit(orcamentoFormGroup: FormGroup) {
        this.orcamentoService.submit(orcamentoFormGroup);
    }

    ngOnDestroy(): void {
        if (this.clientesSubscription$) {
            this.clientesSubscription$.unsubscribe();
        }
        if (this.fornecedoresSubscription$) {
            this.fornecedoresSubscription$.unsubscribe();
        }
        if (this.produtosSubscription$) {
            this.produtosSubscription$.unsubscribe();
        }
    }
}
