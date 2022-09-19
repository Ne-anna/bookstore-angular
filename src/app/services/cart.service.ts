import { Injectable } from '@angular/core';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public item: BookData[] = [];

  getItems() {
    return this.item;
  }

  addToCart(product: BookData) {
    const exist = this.item.find((item) => {
      return item.id === product.id;
    });

    if (exist) exist.quantity++;
    else this.item.push(product);
  }

  removeCartItem(product: any) {
    this.item.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.item.splice(index, 1);
      }
    });
  }
}
