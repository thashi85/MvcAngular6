import { Injectable } from '@angular/core';


import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    customer: Customer;

    constructor() { }

    setCustomer(cus: Customer) {
        this.customer = cus;
    }
}
