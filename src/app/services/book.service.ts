import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookUrl = 'http://localhost:5000/book';

  constructor(private http: HttpClient) {}

  getBooks(page: number): Observable<BookData[]> {
    return this.http.get<BookData[]>(this.bookUrl);
  }

  getById(id: number): Observable<any> {
    const url = `${this.bookUrl}/${id}`;
    return this.http.get(url);
  }
}
