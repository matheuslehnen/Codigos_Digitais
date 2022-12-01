import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {ProdutoService} from "../../service/produto/produto.service";

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

    produtoFormGroup: FormGroup;

    constructor(
        private produtoService: ProdutoService
    ) {
    }

    ngOnInit(): void {
        this.produtoFormGroup = this.produtoService.getFormGroup();
    }

    onSubmit(produtoFormGroup: FormGroup) {
        this.produtoService.submit(produtoFormGroup)
    }
}
