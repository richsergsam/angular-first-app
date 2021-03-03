import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface Pizza {
  id: number;
  title: string;
  imageURL: string;
  description: string;
  ingridients: Array<string>;
  weight: number;
  cost: number;
}

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizzas: Array<Pizza> = [
    {
      id: 0,
      title: 'Пепперони',
      imageURL:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_292x292.jpeg',
      description:
        'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
      ingridients: ['пепперони', 'моцарелла', 'томатный соус'],
      weight: 1234,
      cost: 379,
    },
    {
      id: 1,
      title: 'Маргарита',
      imageURL:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_292x292.jpeg',
      description:
        'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус',
      ingridients: [
        'моцарелла',
        'томаты',
        'итальянские травы',
        'томатный соус',
      ],
      weight: 700,
      cost: 329,
    },
    {
      id: 2,
      title: 'Ветчина и грибы',
      imageURL:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg',
      description:
        'Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус',
      ingridients: ['ветчина', 'шампиньоны', 'моцарелла', 'томатный соус'],
      weight: 600,
      cost: 329,
    },
    {
      id: 3,
      title: 'Овощи и грибы',
      imageURL:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/7a497170e99a435f8535f33c3ebaddc3_292x292.jpeg',
      description:
        'Шампиньоны, томаты, сладкий перец, красный лук, маслины, кубики брынзы, моцарелла, томатный соус, итальянские травы',
      ingridients: [
        'шампиньоны',
        'томаты',
        'сладкий перец',
        'красный лук',
        'маслины',
        'брынза',
        'моцарелла',
        'томатный соус',
        'итальянские травы',
      ],
      weight: 500,
      cost: 379,
    },
    {
      id: 4,
      title: 'Пицца-пирог',
      imageURL:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg',
      description: 'Ананасы, брусника, сгущенное молоко',
      ingridients: ['ананасы', 'брусника', 'сгущенное молоко'],
      weight: 650,
      cost: 300,
    },
    {
      id: 5,
      title: 'Мексиканская',
      imageURL:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/dc5dc4e9-932a-4abf-9472-dfb6326ea9ee.jpg',
      description:
        'Острый цыпленок, острый перец халапеньо, соус сальса, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
      ingridients: [
        'острый цыпленок',
        'острый перец халапеньо',
        'соус сальса',
        'томаты',
        'сладкий перец',
        'красный лук',
        'моцарелла',
        'томатный соус',
      ],
      weight: 650,
      cost: 429,
    },
  ];

  constructor() {}

  getPizzas(): Observable<Array<Pizza>>{
    return of(this.pizzas).pipe(delay(10));
  }

  getPizza(id): Observable<Pizza> {
    return of(this.pizzas.filter((p) => p.id == id)[0]).pipe(delay(10));
  }
}
