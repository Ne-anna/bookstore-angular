import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import data from '../../../orders.json';
import { OrderBook } from '../order';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const navigation = data.navigation;
    const book = data.book;
    const order = data.order;
    return { navigation, book, order };
  }
  genId(orderedBooks: OrderBook[]): number {
    return orderedBooks.length > 0 ? Math.max(...orderedBooks.map(orderedBooks => orderedBooks.id)) + 1 : 1;
  }
}
