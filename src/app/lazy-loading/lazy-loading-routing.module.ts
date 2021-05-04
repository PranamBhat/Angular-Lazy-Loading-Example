import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyDemoComponent } from "E:/Pranam/Git Repository Projects/Angular-Lazy-Loading-Example/src/app/lazy-demo/lazy-demo.component";

const routes: Routes = [
  { path: '', component: LazyDemoComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
