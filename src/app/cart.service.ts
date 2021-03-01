import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { PizzaService } from './pizza.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new Array();

  constructor(private pizzaService: PizzaService) {}

  changeCart(pizzaId, count) {
    if (count <= 0) {
      let index = this.cart.indexOf((pizza) => pizza.id == pizzaId);
      this.cart.splice(index, 1);
    } else {
      let pizza = this.cart.find((pizza) => pizza.id == pizzaId);
      if (pizza != undefined) {
        pizza.count = count;
      } else {
        this.pizzaService.getPizza(pizzaId).subscribe((p) => {
          pizza = p;
          pizza.count = count;
          if (this.cart.find((pizza) => pizza.id == pizzaId) === undefined) {
            this.cart.push(pizza);
          }
        });
      }
    }
    console.log(this.cart);
  }

  getCart() {
    return this.cart;
  }

  getSumm() {
    let sum = 0;
    for (let pizza of this.cart) {
      sum += pizza.cost * pizza.count;
    }
    return sum;
  }

  clearCart(){
    this.cart = new Array();
  }
}
