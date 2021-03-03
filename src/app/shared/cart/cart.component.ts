import { Component, OnInit, Input} from '@angular/core';

import {CartService, CartItem} from '../../services/cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart: Array<CartItem>;

  constructor(public cartService: CartService) { }

  trackByFn(i: number, pizza: any) {
    console.log("trackBy: ", pizza.id);
    return pizza.id;
  }

    ngOnInit(): void {
  }

  getSumm(): number {
    let sum = 0;
    for (let pizza of this.cart) {
      sum += pizza.cost * pizza.count;
    }
    return sum;
  }


}
