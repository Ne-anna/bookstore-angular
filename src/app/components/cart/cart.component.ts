import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  validateInput(event: any) {
    const quantity = +event.target.value;
    if (quantity < 1 || quantity > 10) {
      event.target.value = this.inputValue;
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
    this.cartService.currentValue.subscribe((quantity) => {
      this.inputValue.next(quantity);
    });
    this.updateTotal();
  }
}
