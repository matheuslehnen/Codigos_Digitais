import { Injectable } from '@angular/core';
import {ClienteDto} from "../../shared/model/dto/clienteDto";
import {FornecedorDto} from "../../shared/model/dto/fornecedorDto";
import {ProdutoDto} from "../../shared/model/dto/produtoDto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ApiService} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  cliente: ClienteDto;
  fornecedor: FornecedorDto;
  produto: ProdutoDto;
  quantidade: number;
  status: string;

  orcamentoFormGroup: FormGroup;
  subscription$: Subscription;

  constructor(
      private apiService: ApiService,
      private formBuilder: FormBuilder
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
        .subscribe(response => {
          console.log(response);
          this.orcamentoFormGroup.reset();
          window.scrollTo(0, 0);
        })
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
