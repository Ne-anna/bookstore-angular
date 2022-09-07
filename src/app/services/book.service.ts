import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BookData } from '../data';
import bookData from '../data.json';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookUrl = 'api/book';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookData[]> {
    return this.http.get<BookData[]>(this.bookUrl);
  }
}
