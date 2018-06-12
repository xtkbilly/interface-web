import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestComponentComponent } from './test-component/test-component.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  imports: [
    CommonModule,
    TestModuleRoutingModule
  ],
  declarations: [TestComponentComponent, MainComponentComponent],
  bootstrap: [MainComponentComponent]
})
export class TestModuleModule { }
