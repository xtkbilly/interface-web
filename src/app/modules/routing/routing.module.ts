import { ForecastModule } from '@revaturecloud/forecast/src/lib/forecast.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainImageComponent } from '../../components/main-image/main-image.component';

const appRoutes: Routes = [
  { path: '', component: MainImageComponent },
  { path: 'forecast', loadChildren: '@revaturecloud/forecast/src/lib/forecast.module#ForecastModule'},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class RoutingModule { }
