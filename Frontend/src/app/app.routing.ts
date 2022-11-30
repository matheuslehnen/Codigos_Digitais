import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from "./login/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
    // {path: "", pathMatch: 'full', redirectTo: 'login'},
    {path: "", component: LoginComponent},
    {path: "", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    {path: "dashboard", component: DashboardComponent},
    {path: 'admin', component: AdminLayoutComponent,
        children: [
            {
                path: '', loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
