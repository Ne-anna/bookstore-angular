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

  public bookAmount: number = 2;
  constructor(private bookService: BookService) {
    this.viewMoreText = 'View more';
  }

  public onScroll() {
    const totalBooks = this.book.length;
    if (this.bookAmount < totalBooks) {
      this.bookAmount = this.bookAmount + 2;
    }
  }

  public getBooks(): void {
    this.bookService
      .getBooks()
      .subscribe((book) => (this.book = book));
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
