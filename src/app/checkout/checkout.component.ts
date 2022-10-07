import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { CartService } from '../services/cart.service';

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

  totalCost!: number;

  constructor(private cartService: CartService, private dialogRef: MatDialog) {
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
      // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
    namesurname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$'),
    ]),
  });

  get email() {
    return this.checkOutForm.get('email');
  }

  get confirmemail() {
    return this.checkOutForm.get('confirmemail');
  }

  get namesurname() {
    return this.checkOutForm.get('namesurname');
  }

  public openModal() {
    this.dialogRef.open(OrderDialogComponent);
    document.body.style.overflow = 'hidden';
  }

  collectData() {
    this.cartService.removeAll();
    this.openModal();
    console.log(this.checkOutForm.value);
    console.log(this.book);
  }

  public updateTotal() {
    let cartTotal = 0;
    this.book.forEach((item) => {
      cartTotal += item.price * item.quantity;
    });
    return (this.totalCost = cartTotal);
  }

  ngOnInit(): void {
    this.updateTotal();
  }
}
