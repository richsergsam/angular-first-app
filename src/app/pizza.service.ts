import { Injectable } from '@angular/core';
import { delay} from 'rxjs/operators'
import {of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzas = [
    {
      title: 'Пепперони',
      imageURL: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_292x292.jpeg',
      description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
      weight: 1234
    },
    {
      title: 'Маргарита',
      imageURL: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_292x292.jpeg',
      description: 'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус',
      weight: 700
    }
  ];

  constructor() { }

  getPizzas() {
    return of(this.pizzas).pipe(delay(2000));
  }
}
