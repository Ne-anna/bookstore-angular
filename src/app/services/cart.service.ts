import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public item: BookData[] = [];

  private valueSource = new BehaviorSubject<number>(0);
  currentValue = this.valueSource.asObservable();

  getItems() {
    return this.item;
  }

  addToCart(product: BookData, quantity: number) {
    const exist = this.item.find((item) => {
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
    } else this.item.push({ ...product, quantity });
  }

  changeValue(quantity: number) {
    this.valueSource.next(quantity);
  }

  removeCartItem(product: BookData): void {
    this.item.map((a: BookData, index: number) => {
      if (product.id === a.id) {
        this.item.splice(index, 1);
      }
    });
  }
}
