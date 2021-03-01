import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {



  constructor(private cartService: CartService) { }

  cart = this.cartService.getCart();

  ngOnInit(): void {
  }

}
