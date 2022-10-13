import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderBook } from '../order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private apiOrderUrl = 'http://localhost:5000/order';

  public orderedBooks = this.cartService.getItems();

  constructor(
    private httpClient: HttpClient,
    private cartService: CartService
  ) {}

  getOrderData(): Observable<OrderBook[]> {
    return this.httpClient.get<OrderBook[]>(this.apiOrderUrl);
  }

  addOrderToFile(): Observable<any> {
    const order = this.orderedBooks;
    return this.httpClient.post(this.apiOrderUrl, { order });
  }
}
