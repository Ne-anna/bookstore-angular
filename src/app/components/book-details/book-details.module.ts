import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookDetailsRoutingModule } from './book-details-routing.module';
import { BookDetailsComponent } from './book-details.component';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [SharedModule, BookDetailsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookDetailsModule {}