import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {ComponentsModule} from "../components/components.module";


@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        AppMaterialModule,
        ComponentsModule
    ]
})
export class AdminModule {
}
