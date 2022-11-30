import {IConfig} from "ngx-mask";
import {CurrencyMaskConfig} from "ng2-currency-mask";
import {MatRadioDefaultOptions} from "@angular/material/radio";
import {MatSnackBarConfig} from "@angular/material/snack-bar";

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
    duration: 5000,
    panelClass: ['snackbar'],
}
