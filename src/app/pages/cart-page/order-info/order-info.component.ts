import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { OrdersService } from '../../../services/orders.service';
import { CartService, CartItem } from '../../../services/cart.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  infoForm: FormGroup;
  cart: Array<CartItem> = this.cartService.getCart();

  constructor(
    private ordersService: OrdersService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.infoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9 ]{11}'),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      comment: new FormControl(''),
    });
  }

  get name() {
    return this.infoForm.get('name');
  }

  get mail() {
    return this.infoForm.get('mail');
  }

  get phone() {
    return this.infoForm.get('phone');
  }

  get address() {
    return this.infoForm.get('address');
  }
  get comment() {
    return this.infoForm.get('comment');
  }

  onSubmit() {
    let orderId = this.ordersService.addOrder(this.cart);
    this.router.navigate(['order', orderId]);
  }
}
