import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizza', pathMatch: 'full' },
  { path: 'pizza', component: MainPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'orders/:id', component: OrderPageComponent },
  {path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
