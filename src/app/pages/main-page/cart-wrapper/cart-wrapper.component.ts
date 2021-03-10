import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { DynamicComponent } from 'src/app/shared/dynamic/dynamic.component';
import { CartService, CartItem } from '../../../services/cart.service';
import { ComponentCanDeactivate } from '../exit-main.guard';

@Component({
  selector: 'app-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss'],
})
export class CartWrapperComponent implements OnInit {
  @Input() cart: Array<CartItem>;
  constructor(
    private cartService: CartService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  clearCart() {
    this.dialogService.open(DynamicComponent, null).subscribe((v) => {
      if (v) {
        this.cartService.clearCart();
        this.cart = this.cartService.getCart();
      }
    });
  }



}
