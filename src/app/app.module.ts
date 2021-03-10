import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './pages/main-page/card/card.component';
import { WeightPipe } from './pipes/weight.pipe';
import { CounterComponent } from './shared/counter/counter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './shared/cart/cart.component';
import { SearchComponent } from './pages/main-page/search/search.component';
import { PizzaTypeSelectorComponent } from './pages/main-page/pizza-type-selector/pizza-type-selector.component';
import { CartWrapperComponent } from './pages/main-page/cart-wrapper/cart-wrapper.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OrderInfoComponent } from './pages/cart-page/order-info/order-info.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { OrderComponent } from './pages/order-page/order/order.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChildComponent } from './shared/child/child.component';
import { DynamicComponent } from './shared/dynamic/dynamic.component';
import { DynamicDirective } from './shared/dynamic.directive';
import { DialogComponent } from './shared/dialog/dialog.component';


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
    MainPageComponent,
    OrderInfoComponent,
    CartPageComponent,
    OrderPageComponent,
    OrdersPageComponent,
    PageNotFoundComponent,
    OrderComponent,
    HeaderComponent,
    ChildComponent,
    DynamicComponent,
    DynamicDirective,
    DialogComponent,
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
