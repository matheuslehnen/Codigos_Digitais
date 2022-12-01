import {Injectable, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../api/api.service";
import {ViaCepService} from "../viaCep/via-cep.service";
import {EnderecoDto} from "../../shared/model/dto/enderecoDto";
import {Subscription} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClienteService implements OnDestroy {

    clienteFormGroup: FormGroup;
    subscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private formBuilder: FormBuilder,
        private viaCepService: ViaCepService,
    ) {
        this.clienteFormGroup = this.formBuilder.group({
            cpfCnpj: [''],
            nome: [''],
            telefone: [''],
            endereco: this.formBuilder.group({
                cep: [''],
                logradouro: [''],
                numero: [''],
                bairro: [''],
                localidade: [''],
                uf: [''],
            })
        })
    }

    getClienteForm() {
        return this.clienteFormGroup;
    }

    getEndereco(cep: string) {
        this.viaCepService.consultaEndereco(cep);
        this.viaCepService.enderecoEmitter.subscribe(endereco => {
            if (endereco.cep != null) {
                return this.clienteFormGroup = this.converterEmEndereco(endereco);
            } else {
                console.log("Erro ao consultar o cep")
                return this.clienteFormGroup;
            }
        });
        return this.clienteFormGroup;
    }

    converterEmEndereco(endereco: EnderecoDto) {
        this.clienteFormGroup.patchValue({
            nome: this.clienteFormGroup.value?.name,
            cpfCnpj: this.clienteFormGroup.value?.cpf,
            endereco: {
                cep: endereco.cep,
                logradouro: endereco.logradouro,
                numero: endereco.numero,
                bairro: endereco.bairro,
                localidade: endereco.localidade,
                uf: endereco.uf,
            }
        })
        return this.clienteFormGroup;
    }

    submit(clienteFormGroup: FormGroup) {
        this.subscription$ = this.apiService.submitClienteFormGroup(clienteFormGroup.value)
            .subscribe(response => {
                console.log(response);
                this.clienteFormGroup.reset();
                window.scrollTo(0, 0);
            })
    }

    ngOnDestroy(): void {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
        if (this.viaCepService.enderecoEmitter) {
            this.viaCepService.enderecoEmitter.unsubscribe();
        }
    }
}
