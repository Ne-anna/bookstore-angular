import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BookListsRoutingModule } from './book-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BookListComponent],
  imports: [SharedModule, BookListsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookListModule {}
