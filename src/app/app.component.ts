import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { PizzaService } from './services/pizza.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pizzas = this.pizzaService.getPizzas();
  cart = this.cartService.getCart();

  searchString: string = '';
  checkboxes = [];

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  pizzaTypeSelectionchanged(checkboxes) {
    this.checkboxes = checkboxes.filter((c) => c.checked == true);
    console.log(this.checkboxes);
    this.filterPizzas(this.searchString, this.checkboxes);
  }

  searchStringChange(searchString) {
    this.searchString = searchString;
    console.log('SearchString: ', this.searchString, this.searchString.length);
    this.filterPizzas(this.searchString, this.checkboxes);
  }

  filterPizzas(searchString, checkboxes) {
    this.pizzas = this.pizzaService
      .getPizzas()
      .pipe(
        map((pizzas) => pizzas.filter((p) => p.title.includes(searchString)))
      )
      .pipe(
        map((pizzas) =>
          pizzas.filter((p) => {
            let isShow = true;
            for (let checkbox of checkboxes) {
              let intersection = p.ingridients.filter((i) =>
                checkbox.ingridients.includes(i)
              );
              console.log(intersection);
              if (checkbox.contain == true && intersection.length <= 0) {
                isShow = false;
              }
              if (checkbox.contain == false && intersection.length > 0) {
                isShow = false;
              }
            }
            return isShow;
          })
        )
      );
  }
}
