import {Injectable, OnDestroy} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

import {LoginDto} from "../../shared/model/dto/loginDto";
import {Acesso} from "../../shared/model/interface/acesso";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {

    acesso: Acesso;
    subscription$: Subscription;
    usersSubscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
    }


    login(loginDto: LoginDto) {
        this.subscription$ = this.apiService.usuarioLogin(loginDto)
            .subscribe(
                accessoDto => {
                    this.acesso = accessoDto;
                    this.acesso.status ? this.router.navigate(['admin']) : this.snackBar.open('Usuário ou senha não encontrados!');
                }
            )
    }


    // getAllUsers() {
    //     this.usersSubscription$ = this.apiService.getAllUsers()
    //         .subscribe(result => {
    //             console.log(result);
    //         });
    // }

    ngOnDestroy(): void {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }

    logout() {
        this.router.navigate([''])
    }
}
