import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {OrcamentoService} from "../../service/orcamento/orcamento.service";
import {ClienteDto} from "../../shared/model/dto/clienteDto";
import {ProdutoDto} from "../../shared/model/dto/produtoDto";
import {FornecedorDto} from "../../shared/model/dto/fornecedorDto";

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {

  cliente: ClienteDto;
  produto: ProdutoDto;
  fornecedor: FornecedorDto;
  quantidade: number;
  status: string;

  orcamentoFormGroup: FormGroup;
  hide = true;
  enabled = false;

  constructor(
      private orcamentoService: OrcamentoService
  ) { }

  ngOnInit(): void {
    this.orcamentoFormGroup = this.orcamentoService.getFormGroup();
  }

  onSubmit(orcamentoFormGroup: FormGroup) {
    this.orcamentoService.submit(orcamentoFormGroup);
  }
}
