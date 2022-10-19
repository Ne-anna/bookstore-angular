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

  public onScroll() {
    // const length = this.book.length;
    console.log('did it scroll?');
  }

  public getBooks(): void {
    this.bookService.getBooks().subscribe((book) => (this.book = book));
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
