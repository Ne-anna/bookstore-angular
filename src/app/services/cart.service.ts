import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public item: BookData[] = [];

  private valueSource = new BehaviorSubject<any>('');
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
      // if ((exist.quantity += quantity) > 10) {
      //   window.alert("Pls don't add more");
      // }
    } else this.item.push({ ...product, quantity });
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
