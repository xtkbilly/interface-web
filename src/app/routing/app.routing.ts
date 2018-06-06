import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./../components/main/main.component";
import { LoginComponent } from './../components/login/login.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent, children:[
      { path: '', component: LoginComponent},
    ]}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [

    ]
})
export class RoutingModule { }
