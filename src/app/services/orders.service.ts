import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { CartItem } from './cart.service';

enum OrderSatus {
  accepted = 'Принят',
  cook = 'Готовится',
  delivery = 'Передан на доставку',
  done = 'Завершён',
}

export interface Order {
  id: number;
  status: OrderSatus;
  items: Array<CartItem>;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Array<Order> = [
    {
      id: 0,
      status: OrderSatus.accepted,
      items: [
        {
          id: 4,
          title: 'Пицца-пирог',
          imageURL:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg',
          description: 'Ананасы, брусника, сгущенное молоко',
          ingridients: ['ананасы', 'брусника', 'сгущенное молоко'],
          weight: 650,
          cost: 300,
          count: 5,
        },
      ],
    },
    {
      id: 1,
      status: OrderSatus.delivery,
      items: [
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
          count: 2,
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
          count: 1,
        },
      ],
    },
  ];

  constructor() {}

  getOrder(id: number): Observable<Order> {
    let order = this.orders.find((o) => o.id == id);
    return of(order);
  }

  getOrders(): Observable<Array<Order>>{
    console.log('Get orders. length = ', this.orders.length);
    return of(this.orders);
  }

  addOrder(items: Array<CartItem>): number {
    const order: Order = {
      id: Date.now(),
      status: OrderSatus.accepted,
      items: items,
    };
    this.orders.push(order);
    console.log('Add order. length = ', this.orders.length);
    console.log(this.orders);
    return order.id;
  }
}
