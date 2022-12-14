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
  public checkout!: string;

  public book = this.cartService.getItems();

  public inputValue = new BehaviorSubject<number>(0);
  public someValue = this.inputValue.asObservable();

  public totalCost!: number;

  constructor(private cartService: CartService
    ) {
    this.xIcon = 'assets/icons/close-icon.svg';
    this.emptyText = 'Cart is empty!';
    this.checkout = 'Checkout';
  }

  public previousPage() {
    this.cartService.previousPage();
  }

  public removeCartItem(item: BookData) {
    this.cartService.removeCartItem(item);
    this.updateTotal();
  }

  public validateInput(event: Event, changeQuantity: string, book: BookData) {
    if (!(event.target instanceof HTMLInputElement)) return;
    const quantity = +event.target.value;
    if (quantity < 1 || quantity > 10) {
      event.target.value = String(book.quantity);
    } else book.quantity = parseInt(changeQuantity);
  }

  public updateTotal() {
    let cartTotal = 0;
    this.book.forEach((item) => {
      cartTotal += item.price * item.quantity;
    });
    return (this.totalCost = cartTotal);
  }

  ngOnInit() {
    this.cartService.currentValue.subscribe((quantity) => {
      this.inputValue.next(quantity);
    });
    this.updateTotal();
  }
}
