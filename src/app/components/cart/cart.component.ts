import { Component, OnInit } from '@angular/core';
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
  cartTotal = 0;

  constructor(private cartService: CartService) {
    this.xIcon = 'assets/icons/close-icon.svg';
    this.emptyText = 'Cart is empty!';
  }

  removeCartItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  validateInput(event: any, i: number) {
    const quantity = +event.target.value;
    if (quantity < 1 || quantity > 10) {
      event.target.value = this.book[i].quantity;
      return;
    }
    this.quantityUpdate(quantity, i);
  }

  quantityUpdate(quantity: number, i: number) {
    this.book[i].quantity = quantity;
    this.cartService.getItems();
  }

  ngOnInit() {
    this.book.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
  }
}
