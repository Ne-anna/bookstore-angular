import { Component } from '@angular/core';
import { BookData } from '../../data';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  public book: BookData[] = [];
  public viewMoreText!: string;

  page = 1;
  constructor(private bookService: BookService) {
    this.viewMoreText = 'View more';
  }

  public onScroll() {
    this.bookService.getBooks(++this.page).subscribe((books: BookData[]) => {
      this.book.push(...books);
    });
  }

  public getBooks(): void {
    this.bookService.getBooks(this.page).subscribe((book) => (this.book = book));
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
