import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  OrdersService,
  Order,
  OrderSatus,
} from '../../services/orders.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  orderStatus = OrderSatus;
  orders: Observable<Array<Order>> = this.ordersService.getOrders();

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {}
}
