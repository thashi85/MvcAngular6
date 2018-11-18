import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [LazyLoadComponent, CustomerComponent],
  imports: [
    BrowserModule,
    CommonModule,
    LazyLoadRoutingModule
    ],
    providers: [],
    bootstrap: [LazyLoadComponent]
})
export class LazyLoadModule { }
