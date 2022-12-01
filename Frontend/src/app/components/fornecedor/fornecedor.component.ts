import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FornecedorService} from "../../service/fornecedor/fornecedor.service";

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  fornecedorFormGroup: FormGroup;
  hide = true;

  constructor(
      private formBuilder: FormBuilder,
      private fornecedorService: FornecedorService,
  ) {}

  ngOnInit(): void {
    this.fornecedorFormGroup = this.fornecedorService.getClienteForm();
  }

  consultaCep(cep: string) {
    this.fornecedorFormGroup = this.fornecedorService.getEndereco(cep);
  }

  onSubmit(fornecedorFormGroup: FormGroup) {
    this.fornecedorService.submit(fornecedorFormGroup);
  }

}
