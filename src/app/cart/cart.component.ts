import { Component, OnInit, Input} from '@angular/core';
import { isEmpty } from 'rxjs/operators';

import { PizzaService } from '../pizza.service';
import {CartService} from '../cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart;

  constructor(private pizzaService: PizzaService, public cartService: CartService) { }

  trackByFn(i: number, pizza: any) {
    console.log("trackBy: ", pizza.id);
    return pizza.id;
  }

    ngOnInit(): void {
  }


}
