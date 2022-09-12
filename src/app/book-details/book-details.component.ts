import { Component } from '@angular/core';
import { BookData } from '../data';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  public book: BookData | undefined;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  getBooks(): void {
    let bookId = parseInt(this.route.snapshot.params['id']);
    this.bookService.getById(bookId).subscribe((book) => (this.book = book));
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
