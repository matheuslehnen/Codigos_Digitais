import {Injectable, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../api/api.service";
import {Subscription} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService implements OnDestroy {

    usuarioFormGroup: FormGroup;
    subscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private formBuilder: FormBuilder
    ) {
        this.usuarioFormGroup = this.formBuilder.group({
            email: [''],
            senha: [''],
        })
    }

    getFormGroup() {
        return this.usuarioFormGroup;
    }

    submit(usuarioFormGroup: FormGroup) {
        this.subscription$ = this.apiService.submitUsuarioForm(usuarioFormGroup)
            .subscribe(response => {
                console.log(response);
                this.usuarioFormGroup.reset();
                window.scrollTo(0, 0);
            })
    }

    ngOnDestroy(): void {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }
}
