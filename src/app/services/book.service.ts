import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
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

  getById(id: number): Observable<any> {
    const url = `${this.bookUrl}/${id}`;
    return this.http.get(url);
  }
}
