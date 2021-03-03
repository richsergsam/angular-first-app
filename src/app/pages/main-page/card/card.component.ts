import { Component, OnInit, Input } from '@angular/core';

import {CartService} from '../../../services/cart.service';
import {Pizza} from '../../../services/pizza.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() pizza: Pizza;

  ngOnInit(): void {
  }


  pizzaCountChange(count){
    console.log('pizzaCountChange to ' + count + ' for id '+ this.pizza.id);
    this.cartService.changeCart(this.pizza.id, count);

  }


}
