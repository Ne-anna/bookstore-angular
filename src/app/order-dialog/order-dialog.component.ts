import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent {
  public homePage!: string;
  public thankYou!: string;

  constructor(private dialogRef: MatDialog) {
    this.thankYou = 'Thank you for your order!';
    this.homePage = 'Home page';
  }

  closeModal() {
    if (this.dialogRef.open(OrderDialogComponent)) {
      this.dialogRef.closeAll();
      document.body.style.overflow = 'unset';
    }
  }
}
