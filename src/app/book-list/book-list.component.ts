import { Component, OnInit } from '@angular/core';
import { AllData, BookData } from '../data';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  public book: BookData[] = [];
  constructor(private bookService: BookService) {}

  getBooks(): void {
    this.bookService.getBooks().subscribe((book) => (this.book = book));
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onClick() {
    console.log('you clicked');
  }
}
