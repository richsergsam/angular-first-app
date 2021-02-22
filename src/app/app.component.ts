import { Component } from '@angular/core';

import { PizzaService } from './pizza.service';
import {CartService} from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  pizzas = this.pizzaService.getPizzas();
  cart = this.cartService.getCart();

  constructor(private pizzaService: PizzaService, private cartService: CartService) { }

}
