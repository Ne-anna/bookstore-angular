import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public item: BookData[] = [];
  cartTotal: number = 0;

  private valueSource = new BehaviorSubject<any>('');
  currentValue = this.valueSource.asObservable();

  getItems() {
    return this.item;
  }

  addToCart(product: BookData, quantity: number) {
    const exist = this.item.find((item) => {
      return item.id === product.id;
    });

    if (exist) exist.quantity += quantity;
    else this.item.push({ ...product, quantity });
    this.updateTotal(quantity);
  }

  updateTotal(quantity: number) {
    this.item.forEach((item) => {
      this.cartTotal = item.price * quantity;
      console.log(this.cartTotal);
    });
  }

  changeValue(quantity: number) {
    this.valueSource.next(quantity);
  }

  removeCartItem(product: any): void {
    this.item.map((a: any, index: number) => {
      if (product.id === a.id) {
        this.item.splice(index, 1);
      }
    });
  }
}
