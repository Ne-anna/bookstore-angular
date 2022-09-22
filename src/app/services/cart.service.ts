import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  // $isValuePassed = new EventEmitter();
  // value: any = {
  //   quantity: '',
  // };

  private valueSource = new BehaviorSubject<string>('');
  currentValue = this.valueSource.asObservable();

  changeValue(value: any) {
    this.valueSource.next(value);
  }

  // passValue(value: any) {
  //   this.value.quantity = value;
  //   this.$isValuePassed.emit(this.value);
  //   console.log('Taking data from input', this.value);
  // }

  removeCartItem(product: any) {
    this.item.map((a: any, index: number) => {
      if (product.id === a.id) {
        this.item.splice(index, 1);
      }
    });
  }
}
