import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';
import { SiteLayoutModule } from '../layout/site-layout/site-layout.module';

import { CustomerComponent } from './customer/customer.component';

import { CustomerService } from '../services/customer.service'
import { APIRequestHandler } from '../services/api-request-handler'
import { CartService } from '../services/cart.service'


@NgModule({
    declarations: [LazyLoadComponent, CustomerComponent],
  imports: [
        BrowserModule,
        CommonModule,
        LazyLoadRoutingModule,
        HttpClientModule,
        SiteLayoutModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: APIRequestHandler,
        multi: true
    }, CustomerService,CartService],
    bootstrap: [LazyLoadComponent]
})
export class LazyLoadModule { }
