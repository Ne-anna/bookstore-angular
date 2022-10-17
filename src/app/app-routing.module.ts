import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/book-list/book-list.module').then(m => m.BookListModule),
   
  },
  {
    path: 'book/:id',
    loadChildren: () => import('./components/book-details/book-details.module').then(m => m.BookDetailsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./components/checkout/checkout.module').then(m => m.CheckoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
