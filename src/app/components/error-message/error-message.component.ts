import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

  constructor(private dialogRef: MatDialog) { }

  public closeModal() {
    if (this.dialogRef.open(ErrorMessageComponent)) {
      this.dialogRef.closeAll();
      document.body.style.overflow = 'unset';
    }
  }
}
