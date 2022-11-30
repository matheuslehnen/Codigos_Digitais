import {Injectable, OnDestroy} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

import {LoginDto} from "../../shared/model/dto/loginDto";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {


    subscription$: Subscription;
    usersSubscription$: Subscription;

    constructor(
        private apiService: ApiService,
        private router: Router
    ) {
    }


    login(loginDto: LoginDto) {
        this.subscription$ = this.apiService.usuarioLogin(loginDto)
            .subscribe(
                accessDto => {
                    console.log(accessDto)
                    // this.access = accessDto
                    // switch (this.access.type) {
                    //     case 1:
                    //         this.customerSubscription$ = this.apiService.customerLogin(this.access)
                    //             .subscribe(customer => {
                    //                 this.customer = customer;
                    //                 this.sessionStorageService.savingOnSession(this.customer);
                    //                 this.router.navigate(['customer']);
                    //             })
                    //         break;
                    //     case 2:
                    //         this.warehouseSubscription$ = this.apiService.warehouseLogin(this.access)
                    //             .subscribe(warehouse => {
                    //                 this.warehouse = warehouse;
                    //                 this.sessionStorageService.savingOnSession(this.warehouse);
                    //                 this.router.navigate(['warehouse'])
                    //             })
                    //         break;
                }
            )
    }


    getAllUsers() {
        this.usersSubscription$ = this.apiService.getAllUsers()
            .subscribe(result => {
                console.log(result);
            });
    }

    ngOnDestroy(): void {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }
}
