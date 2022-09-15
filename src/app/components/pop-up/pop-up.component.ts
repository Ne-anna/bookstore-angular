import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  public goToCartText!: string;
  public continueShoppingText!: string;
  public xIcon!: string;

  constructor(private dialogRef: MatDialog) {
    this.goToCartText = 'Go to Cart';
    this.continueShoppingText = 'Continue shopping';
    this.xIcon = 'assets/icons/close-icon.svg';
  }

  closeModal() {
    if (this.dialogRef.open(PopUpComponent)) {
      this.dialogRef.closeAll();
      document.body.style.overflow = 'unset';
    }
  }
}
