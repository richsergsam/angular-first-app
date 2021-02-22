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
  @Input() cost;

  ngOnInit(): void {
  }

  pizzaCountChange(changes){
    console.log('pizzaCountChange to ' + changes.count + ' for id '+ changes.id);
    this.cartService.changeCart(changes.id, changes.count);

  }


}
