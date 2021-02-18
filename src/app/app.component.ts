import { Component } from '@angular/core';

import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  pizzas = this.pizzaService.getPizzas();

  constructor(private pizzaService: PizzaService) { }

}
