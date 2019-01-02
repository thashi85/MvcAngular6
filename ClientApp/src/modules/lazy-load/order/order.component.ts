import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

    cusName: string;
    constructor(private _cartService: CartService) { }

    ngOnInit() {
        this.cusName = this._cartService.customer.Name;
      }

}
