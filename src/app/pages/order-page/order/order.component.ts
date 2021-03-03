import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Order} from '../../../services/orders.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
