import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookUrl = 'api/book';

  constructor(private http: HttpClient) {}

  getBooks(page: number): Observable<BookData[]> {
    console.log(this.http);
    return this.http.get<BookData[]>(this.bookUrl);
  }

  getById(id: number): Observable<any> {
    const url = `${this.bookUrl}/${id}`;
    return this.http.get(url);
  }
}
