import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { CartItem } from './cart.service';

export enum OrderSatus {
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
  timers: Map<number, ReturnType<typeof setInterval>> = new Map<
    number,
    ReturnType<typeof setInterval>
  >();

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
    {
      id: 2,
      status: OrderSatus.done,
      items: [
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

  getOrders(): Observable<Array<Order>> {
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
    this.timers.set(
      order.id,
      setInterval(this.tryChangeStatusOfOrder, 60 * 1000, order, this.timers)
    );
    return order.id;
  }

  tryChangeStatusOfOrder(order: Order, timers:  Map<number, ReturnType<typeof setInterval>>): void {
    switch (order.status) {
      case OrderSatus.accepted:
        order.status = OrderSatus.cook;
        break;
      case OrderSatus.cook:
        order.status = OrderSatus.delivery;
        break;
      default:
        order.status = OrderSatus.done;
        clearInterval(timers.get(order.id));
        timers.delete(order.id);
        break;
    }
  }

  // tryChangeStatusOfOrder(id: number): void {
  //   let index = this.orders.findIndex((o: Order) => o.id == id);
  //   if (index >= 0) {
  //     switch (this.orders[index].status) {
  //       case OrderSatus.accepted:
  //         this.orders[index].status = OrderSatus.cook;
  //         break;
  //       case OrderSatus.cook:
  //         this.orders[index].status = OrderSatus.delivery;
  //         break;
  //       case OrderSatus.delivery:
  //         this.orders[index].status = OrderSatus.done;
  //         clearInterval(this.timers[id]);
  //         break;
  //       default:
  //         this.orders[index].status = OrderSatus.done;
  //         clearInterval(this.timers[id]);
  //         break;
  //     }
  //   }
  //   else{
  //     clearInterval(this.timers[id]);
  //   }
  // }
}
