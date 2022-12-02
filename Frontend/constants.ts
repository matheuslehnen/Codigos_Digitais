import {IConfig} from "ngx-mask";
import {CurrencyMaskConfig} from "ng2-currency-mask";
import {MatRadioDefaultOptions} from "@angular/material/radio";
import {MatSnackBarConfig} from "@angular/material/snack-bar";
import {RouteInfo} from "./src/app/shared/model/interface/routeInfo";


export const CustomMaskConfig: Partial<IConfig> = {};

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: 'right',
    allowNegative: false,
    decimal: ',',
    precision: 2,
    prefix: 'R$ ',
    suffix: '',
    thousands: '.'
};

export const CustomMatRadioOptions: MatRadioDefaultOptions = {
    color: 'accent',
}

export const CustomSnackBarOptions: MatSnackBarConfig = {
    duration: 3000,
    panelClass: ['snackbar'],
}


export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'usuario', title: 'Usuário',  icon: 'account_circle', class: '' },
    { path: 'cliente', title: 'Cliente',  icon:'person', class: '' },
    { path: 'fornecedor', title: 'Fornecedor',  icon:'content_paste', class: '' },
    { path: 'produto', title: 'Produto',  icon:'fact_check', class: '' },
    { path: 'orcamento', title: 'Orçamento',  icon:'request_quote', class: '' },
    { path: 'login', title: 'Login',  icon:'login', class: '' },
];
