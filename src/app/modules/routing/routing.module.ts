import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainImageComponent } from '../../components/main-image/main-image.component';

const appRoutes: Routes = [
  { path: '', component: MainImageComponent },
  //This is for the other teams sub modules
  //{path: 'submodule', loadChildren: '../../modules/test-module/test-module.module#TestModuleModule'},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class RoutingModule { }
