import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizza', pathMatch: 'full' },
  { path: 'pizza', component: MainPageComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
