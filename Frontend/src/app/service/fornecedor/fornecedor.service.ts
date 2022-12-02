import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ApiService} from "../api/api.service";
import {ViaCepService} from "../viaCep/via-cep.service";
import {EnderecoDto} from "../../shared/model/dto/enderecoDto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

    fornecedorFormGroup: FormGroup;
    subscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private viaCepService: ViaCepService,
    ) {
        this.fornecedorFormGroup = this.formBuilder.group({
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
        return this.fornecedorFormGroup;
    }

    getEndereco(cep: string) {
        this.viaCepService.consultaEndereco(cep);
        this.viaCepService.enderecoEmitter.subscribe(endereco => {
            if (endereco.cep != null) {
                return this.fornecedorFormGroup = this.converterEmEndereco(endereco);
            } else {
                console.log("Erro ao consultar o cep")
                return this.fornecedorFormGroup;
            }
        });
        return this.fornecedorFormGroup;
    }

    converterEmEndereco(endereco: EnderecoDto) {
        this.fornecedorFormGroup.patchValue({
            endereco: {
                cep: endereco.cep,
                logradouro: endereco.logradouro,
                numero: endereco.numero,
                bairro: endereco.bairro,
                localidade: endereco.localidade,
                uf: endereco.uf,
            }
        })
        return this.fornecedorFormGroup;
    }

    submit(fornecedorFormGroup: FormGroup) {
        this.subscription$ = this.apiService.submitFornecedorFormGroup(fornecedorFormGroup)
            .subscribe(fornecedorDto => {
                if(fornecedorDto.id){
                    this.snackBar.open('Fornecedor cadastrado com sucesso!')
                    this.fornecedorFormGroup.reset();
                    window.scrollTo(0, 0);
                }
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
