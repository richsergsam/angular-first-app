import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { WeightPipe } from './weight.pipe';
import { CounterComponent } from './counter/counter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { PizzaTypeSelectorComponent } from './pizza-type-selector/pizza-type-selector.component';
import { CartWrapperComponent } from './cart-wrapper/cart-wrapper.component';
import { OrderComponent } from './order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { OrderInfoComponent } from './order-info/order-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WeightPipe,
    CounterComponent,
    CartComponent,
    SearchComponent,
    PizzaTypeSelectorComponent,
    CartWrapperComponent,
    OrderComponent,
    MainPageComponent,
    OrderInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
