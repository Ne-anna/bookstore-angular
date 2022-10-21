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
  constructor(private bookService: BookService) {
    this.viewMoreText = 'View more';
  }

  page = 1;

  public onScroll() {
    this.bookService.getBooks(++this.page).subscribe((books: BookData[]) => {
      this.book.push(...books);
    })
  }

  public getBooks(): void {
    this.bookService.getBooks(this.page).subscribe((book) => (this.book = book));
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
