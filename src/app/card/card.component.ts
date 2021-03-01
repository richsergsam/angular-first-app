import { Component, OnInit, Input } from '@angular/core';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() id;
  @Input() title;
  @Input() imageURL;
  @Input() description;
  @Input() weight;
  @Input() ingridients;
  @Input() cost;

  ngOnInit(): void {
  }


  pizzaCountChange(count){
    console.log('pizzaCountChange to ' + count + ' for id '+ this.id);
    this.cartService.changeCart(this.id, count);

  }


}
