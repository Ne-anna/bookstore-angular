import { Component, OnInit } from '@angular/core';
import { BookData } from 'src/app/data';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: BookData[] = [];

  public xIcon!: string;
  public emptyText!: string;

  book = this.cartService.getItems();

  constructor(private cartService: CartService) {
    this.xIcon = 'assets/icons/close-icon.svg';
    this.emptyText = 'Cart is empty!';
  }

  removeCartItem(item: any) {
    this.cartService.removeCartItem(item);
  }
}
