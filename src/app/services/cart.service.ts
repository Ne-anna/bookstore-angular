import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: BookData[] = [];

  private valueSource = new BehaviorSubject<number>(0);
  currentValue = this.valueSource.asObservable();

  getItems() {
    return this.items;
  }

  addToCart(product: BookData, quantity: number) {
    const exist = this.items.find((item) => {
      return item.id === product.id;
    });

    if (exist) {
      exist.quantity += quantity;
      if (exist.quantity >= 11) {
        exist.quantity = 10;
        window.alert(
          'If you trying to buy MORE than 10 books, only 10 books will be added to your cart.'
        );
      }
    } else this.items.push({ ...product, quantity });
  }

  changeValue(quantity: number) {
    this.valueSource.next(quantity);
  }

  removeCartItem(product: BookData): void {
    this.items.map((book: BookData, index: number) => {
      if (product.id === book.id) {
        this.items.splice(index, 1);
      }
    });
  }
}
