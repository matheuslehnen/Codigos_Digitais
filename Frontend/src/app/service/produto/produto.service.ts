import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";

import {ApiService} from "../api/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    produtoFormGroup: FormGroup;
    subscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar
    ) {
        this.produtoFormGroup = this.formBuilder.group({
            titulo: [''],
            quantidade: [''],
        })
    }

    getFormGroup() {
        return this.produtoFormGroup;
    }

    submit(produtoFormGroup: FormGroup) {
        this.subscription$ = this.apiService.submitProdutoFormGroup(produtoFormGroup)
            .subscribe(produtoDto => {
                if(produtoDto.id) {
                    this.snackBar.open('Produto cadastrado com sucesso!');
                    this.produtoFormGroup.reset();
                    window.scrollTo(0, 0);
                }
            })
    }

    ngOnDestroy(): void {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }
}
