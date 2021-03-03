import { Component, OnInit, Input } from '@angular/core';
import {CartService, CartItem} from '../../../services/cart.service'

@Component({
  selector: 'app-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss']
})
export class CartWrapperComponent implements OnInit {

  @Input() cart: Array<CartItem>;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  clearCart(){
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
  }

}
