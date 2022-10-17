import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [SharedModule, CartRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule {}