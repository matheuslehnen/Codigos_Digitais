import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {ClienteComponent} from "./cliente/cliente.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FornecedorComponent} from "./fornecedor/fornecedor.component";
import {IconsComponent} from "./icons/icons.component";
import {MapsComponent} from "./maps/maps.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {TableListComponent} from "./table-list/table-list.component";
import {TypographyComponent} from "./typography/typography.component";
import {UpgradeComponent} from "./upgrade/upgrade.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {OrcamentoComponent} from "./orcamento/orcamento.component";
import {ProdutoComponent} from "./produto/produto.component";
import { LoginComponent } from './login/login.component';
import {NgxMaskModule} from "ngx-mask";
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppMaterialModule,
        NgxMaskModule.forChild(),
    ],
    declarations: [
        ClienteComponent,
        DashboardComponent,
        FooterComponent,
        FornecedorComponent,
        IconsComponent,
        MapsComponent,
        NavbarComponent,
        NotificationsComponent,
        OrcamentoComponent,
        ProdutoComponent,
        SidebarComponent,
        TableListComponent,
        TypographyComponent,
        UpgradeComponent,
        UserProfileComponent,
        LoginComponent,
        UsuarioComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        LoginComponent,
        DashboardComponent
    ]
})
export class ComponentsModule {
}
