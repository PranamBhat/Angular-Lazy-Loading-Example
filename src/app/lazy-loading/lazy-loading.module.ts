import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';

@NgModule({
  declarations: [LazyDemoComponent],
  imports: [CommonModule, LazyLoadingRoutingModule],
})
export class LazyLoadingModule {}
