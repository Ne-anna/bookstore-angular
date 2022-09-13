import { Injectable } from '@angular/core';
import { BookData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public item: BookData[] = [];

  addToCart(product: BookData) {
    this.item.push(product);
  }

  getItems() {
    return this.item;
  }

  clearCart() {
    this.item = [];
    return this.item;
  }
}
