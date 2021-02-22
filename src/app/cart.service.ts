import { Injectable } from '@angular/core';
import {of} from 'rxjs'

import {PizzaService} from './pizza.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart;
  // private cart : {[id:number]: {pizza:object, count:number}} = {};

  constructor(private pizzaService: PizzaService,) { 
    //this.changeCart(0, 4);
  }

  changeCart(pizzaId, count){
    let p = this.pizzaService.getPizza(pizzaId).pipe();
    console.log(typeof(p));
    console.log(p);
    //this.cart[pizzaId] = {pizza:p, count:count};
  }

  getCart(){
    return of(this.cart);
  }
}
