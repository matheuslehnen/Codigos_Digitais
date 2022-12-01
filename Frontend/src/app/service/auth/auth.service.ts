import {Injectable, OnDestroy} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

import {Acesso} from "../../shared/model/interface/acesso";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../session/session.service";


@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {

    acesso: Acesso;
    loginForm: FormGroup;
    subscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private formBuilder: FormBuilder,
        private router: Router,
        private sessionService: SessionService,
        private snackBar: MatSnackBar
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required, Validators.maxLength(6)]],
        });
    }

    getForm(){
        return this.loginForm;
    }


    login(loginFormGroup: FormGroup) {
        this.subscription$ = this.apiService.submitLoginForm(loginFormGroup)
            .subscribe(
                accessoDto => {
                    this.acesso = accessoDto;

                    if(this.acesso.status) {
                        this.sessionService.savingOnSession(this.acesso)
                        this.router.navigate(['admin/dashboard']);
                        this.loginForm.reset();
                    } else {
                        this.snackBar.open('Usuário ou senha não encontrados!');
                    }

                }
            )
    }

    logout() {
        this.sessionService.clear();
        this.router.navigate(['/admin/login'])
    }

    ngOnDestroy(): void {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }
}
