import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { CartService } from '../../services/cart.service';

import { Deserializer, Serializer } from 'json-api-format';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    Customers: Customer[]
    constructor(private _cutomerService: CustomerService, private _cartService: CartService) { }

    ngOnInit() {
        this._cutomerService.getCustomers().subscribe(c => {
            this.Customers = c;
            this._cartService.customer = this.Customers[0];
        });
        
        this._cutomerService.getAssets().subscribe(s =>
            {
                var json = new Deserializer().deserialize(s);
                console.log(json);
           
                //var arr = new Serializer("asset", { id: "", attributes: [], pluralizeType: false }).serialize(json);
                var arr = new Serializer().serialize(json);
                console.log('serilized object');
                console.log(arr);
            }
            );
    }

}
