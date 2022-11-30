import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {NgxMaskModule} from "ngx-mask";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    LoginRoutingModule,
    NgxMaskModule.forChild(),
  ]
})
export class LoginModule { }
