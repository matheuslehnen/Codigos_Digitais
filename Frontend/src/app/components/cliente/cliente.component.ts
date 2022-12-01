import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClienteService} from "../../service/cliente/cliente.service";

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

    clienteFormGroup: FormGroup;
    hide = true;

    constructor(
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
    ) {


    }

    ngOnInit(): void {
        this.clienteFormGroup = this.clienteService.getClienteForm();
    }

    consultaCep(cep: string) {
        this.clienteFormGroup = this.clienteService.getEndereco(cep);
    }

    onSubmit(clienteFormGroup: FormGroup) {
        this.clienteService.submit(clienteFormGroup);
    }
}
