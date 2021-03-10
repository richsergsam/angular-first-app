import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from '../order-page/order/order.component';
import { OrderPageComponent } from '../order-page/order-page.component';



@NgModule({
  declarations: [OrderComponent, OrderPageComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
