import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  public homePage!: string;
  public thankYou!: string;

  constructor(
    private dialogRef: MatDialog,
    private orderService: OrdersService,
    private cartService: CartService
  ) {
    this.thankYou = 'Thank you for your order!';
    this.homePage = 'Home page';
  }

  public closeModal() {
    if (this.dialogRef.open(OrderDialogComponent)) {
      this.dialogRef.closeAll();
      document.body.style.overflow = 'unset';
    }
    window.location.href="https://ansybooks.netlify.app"
  }

  ngOnInit() {
    this.cartService.removeAll();
  }
}
