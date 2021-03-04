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

  constructor(private pizzaService: PizzaService) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  changeCart(pizzaId, count) {
    if (count <= 0) {
      let index = this.cart.findIndex((ci: CartItem) => ci.id == pizzaId);
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
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart(): Array<CartItem> {
    return this.cart;
  }

  getSumm(): number {
    let sum = 0;
    for (let pizza of this.cart) {
      sum += pizza.cost * pizza.count;
    }
    return sum;
  }

  clearCart(): void {
    this.cart = new Array();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getItemCount(itemId: number): number {
    let index = this.cart.findIndex((ci: CartItem) => ci.id == itemId);
    if (index >= 0) {
      return this.cart[index].count;
    }else{
      return 0;
    }
  }
}
