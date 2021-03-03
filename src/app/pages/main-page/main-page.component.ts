import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import {Observable} from 'rxjs';

import { PizzaService, Pizza } from '../../services/pizza.service';
import { CartService, CartItem } from '../../services/cart.service';
import {PizzaTypeCheckbox} from './pizza-type-selector/pizza-type-selector.component'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  pizzas: Observable<Array<Pizza>> = this.pizzaService.getPizzas();
  cart: Array<CartItem> = this.cartService.getCart();

  searchString: string = '';
  checkboxes: Array<PizzaTypeCheckbox> = new Array<PizzaTypeCheckbox>();

  ngOnInit(): void {
  }

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  pizzaTypeSelectionchanged(checkboxes): void {
    this.checkboxes = checkboxes.filter((c) => c.checked == true);
    console.log(this.checkboxes);
    this.filterPizzas(this.searchString, this.checkboxes);
  }

  searchStringChange(searchString): void {
    this.searchString = searchString;
    console.log('SearchString: ', this.searchString, this.searchString.length);
    this.filterPizzas(this.searchString, this.checkboxes);
  }

  filterPizzas(searchString, checkboxes): void {
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
