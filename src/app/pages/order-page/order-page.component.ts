import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { OrdersService, Order } from '../../services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {
  @Input() order$: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.router.navigateByUrl('404');
      return;
    }
    console.log('Try navigate to order: ', id);
    this.order$ = this.ordersService.getOrder(id);
    this.order$.subscribe((order) => {
      if (order === undefined) {
        this.router.navigateByUrl('404');
      }
    });
  }
}
