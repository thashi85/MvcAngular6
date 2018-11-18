import { Component, OnInit } from '@angular/core';

import { Customer } from '../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    Customers: Customer[]
    constructor(private _cutomerService: CustomerService) { }

    ngOnInit() {
        this._cutomerService.getCustomers().subscribe(c => this.Customers = c);
    }

}
