import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { PizzaService, Pizza } from './pizza.service';

export interface CartItem extends Pizza {
  count?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Array<CartItem> = new Array<CartItem>();

  constructor(private pizzaService: PizzaService) {}

  changeCart(pizzaId, count) {
    if (count <= 0) {
      let index = this.cart.findIndex((ci:CartItem) => ci.id == pizzaId);
      this.cart.splice(index, 1);
    } else {
      let cartItem = this.cart.find((pizza) => pizza.id == pizzaId);
      if (cartItem != undefined) {
        cartItem.count = count;
      } else {
        this.pizzaService.getPizza(pizzaId).subscribe((p) => {
          cartItem = p;
          cartItem.count = count;
          if (this.cart.find((pizza) => pizza.id == pizzaId) === undefined) {
            this.cart.push(cartItem);
          }
        });
      }
    }
    console.log(this.cart);
  }

  getCart() : Array<CartItem>{
    return this.cart;
  }

  getSumm():number {
    let sum = 0;
    for (let pizza of this.cart) {
      sum += pizza.cost * pizza.count;
    }
    return sum;
  }

  clearCart(): void {
    this.cart = new Array();
  }
}
