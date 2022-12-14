import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookData } from '../data';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: BookData[] = [];

  constructor(private location: Location) 
  {}

  private valueSource = new BehaviorSubject<number>(0);
  currentValue = this.valueSource.asObservable();

  getItems() {
    return this.items;
  }

  previousPage() {
    this.location.back();
  }

  addToCart(product: BookData, quantity: number): boolean {
    const exist = this.items.find((item) => {
      return item.id === product.id;
    });

    if (exist) {
      exist.quantity += quantity;
      if (exist.quantity >= 11) {
        exist.quantity = 10;
        return false;
      }
    } else this.items.push({ ...product, quantity });
    return true;
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

  removeAll() {
    return (this.items = []);
  }
}
