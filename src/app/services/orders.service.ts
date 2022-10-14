import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrderBook } from '../order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private apiOrderUrl = 'http://localhost:5000/order';

  public orderedBooks = this.cartService.getItems();
  public userInfo: any;
  public totalCost!: number;

  constructor(
    private httpClient: HttpClient,
    private cartService: CartService
  ) {}

  getOrderData(): Observable<OrderBook[]> {
    return this.httpClient.get<OrderBook[]>(this.apiOrderUrl).pipe(
      map(() => {
        let orderItems: OrderBook[] = [];
        for (let item of this.orderedBooks) {
          orderItems.push(new OrderBook(item));
        }
        return orderItems && this.userInfo && this.totalCost;
      })
    ); 
  }

  addOrderToFile(): Observable<any> {
    const orderedBooks = this.orderedBooks;
    const userInfo = this.userInfo;
    const totalCost = this.totalCost;
    return this.httpClient.post(this.apiOrderUrl, { orderedBooks, userInfo, totalCost});
  }
}
