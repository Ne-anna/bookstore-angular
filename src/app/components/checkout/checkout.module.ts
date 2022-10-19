import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [SharedModule, CheckoutRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutModule {}