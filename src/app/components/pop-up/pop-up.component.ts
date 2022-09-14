import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  constructor(private dialogRef: MatDialog) {}

  closeModal() {
    if (this.dialogRef.open(PopUpComponent)) {
      this.dialogRef.closeAll();
      document.body.style.overflow = 'unset';
    }
  }
}
