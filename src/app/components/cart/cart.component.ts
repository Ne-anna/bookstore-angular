import { Component, OnInit } from '@angular/core';
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
  cartTotal = 0;

  inputValue: any;

  constructor(private cartService: CartService) {
    this.xIcon = 'assets/icons/close-icon.svg';
    this.emptyText = 'Cart is empty!';
  }

  removeCartItem(item: any) {
    this.cartService.removeCartItem(item);
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

  // updateCartTotal() {
  //   this.book.forEach((item) => {
  //     if (this.inputValue++) {
  //       this.cartTotal = this.inputValue * item.price;
  //     }
  //   });
  // }

  ngOnInit() {
    this.cartService.currentValue.subscribe(
      (value) => (this.inputValue = value)
    );
    this.book.forEach((item) => {
      this.cartTotal = this.inputValue * item.price;
    });
  }
}
