import { Component, OnInit } from '@angular/core';
import {CartService, CartItem} from '../../services/cart.service'

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {



  constructor(private cartService: CartService) { }

  cart: Array<CartItem> = this.cartService.getCart();

  ngOnInit(): void {
  }

}
