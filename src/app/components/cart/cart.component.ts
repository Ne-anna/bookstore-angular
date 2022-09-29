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

  public inputValue = new BehaviorSubject<number>(0);
  someValue = this.inputValue.asObservable();

  constructor(private cartService: CartService) {
    this.xIcon = 'assets/icons/close-icon.svg';
    this.emptyText = 'Cart is empty!';
  }

  removeCartItem(item: BookData) {
    this.cartService.removeCartItem(item);
    this.updateTotal();
  }

  validateInput(changeQuantity: string, book: BookData) {
    book.quantity = parseInt(changeQuantity);
    if (book.quantity > 10 || book.quantity < 1) {
      book.quantity = 1;
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
    this.cartService.currentValue.subscribe((quantity) => {
      this.inputValue.next(quantity);
    });
    this.updateTotal();
  }
}
