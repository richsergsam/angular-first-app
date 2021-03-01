import { Component, OnInit, Input } from '@angular/core';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss']
})
export class CartWrapperComponent implements OnInit {

  @Input() cart;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  clearCart(){
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
  }

}
