import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { CartService } from '../../services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderBook } from 'src/app/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public emailErrorMessage!: string;
  public confirmationErrorMessage!: string;
  public nameSurnameMessage!: string;

  public book = this.cartService.getItems();

  public totalCost!: number;

  public items: any[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrdersService,
    private dialogRef: MatDialog
  ) {
    this.emailErrorMessage = 'E-mail is not valid';
    this.confirmationErrorMessage = "E-mail doesn't match";
    this.nameSurnameMessage = 'Enter correct name or surname';
  }

  checkOutForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
    confirmemail: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
    namesurname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$'),
    ]),
  });

  get getAllData() {
    return this.checkOutForm.controls;
  }

  public openModal() {
    this.dialogRef.open(OrderDialogComponent);
    document.body.style.overflow = 'hidden';
  }

  public collectData() {
    this.orderService.getOrderData().subscribe((orderedBooks: OrderBook[]) => {
      this.items = orderedBooks;
    });
    this.orderService.userInfo = this.checkOutForm.value;
    this.orderService.totalCost = this.totalCost;
    this.orderService.addOrderToFile().subscribe();
    this.openModal();
  }

  ngOnInit() {
    let cartTotal = 0;
    this.book.forEach((item) => {
      cartTotal += item.price * item.quantity;
    });
    return (this.totalCost = cartTotal);
  }
}
