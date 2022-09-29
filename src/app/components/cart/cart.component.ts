import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookData } from 'src/app/data';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public xIcon!: string;
  public emptyText!: string;

  book = this.cartService.getItems();

  public inputValue = new BehaviorSubject<any>('');
  someValue = this.inputValue.asObservable();

  constructor(private cartService: CartService) {
    this.xIcon = 'assets/icons/close-icon.svg';
    this.emptyText = 'Cart is empty!';
  }

  removeCartItem(item: any) {
    this.cartService.removeCartItem(item);
    this.updateTotal();
  }

  validateInput(event: any, changedQuantity: string, book: BookData) {
    this.cartService.addToCart(book, Number(changedQuantity));
    this.cartService.changeValue(Number(changedQuantity));
    const quantityy = book.quantity;
    if (quantityy < 1 || quantityy > 10) {
      event.target.value = this.inputValue;
      this.updateTotal();
    } else {
      event.target.value;
      return;
    }
  }

  totalCost!: number;

  updateTotal() {
    let cartTotal = 0;
    this.book.forEach((item) => {
      cartTotal += item.price * item.quantity;
    });
    return (this.totalCost = cartTotal);
  }

  ngOnInit() {
    // this.cartService.currentValue.subscribe((quantity) => {
    //   this.inputValue.next(quantity);
    // });
    this.updateTotal();
  }
}
