import { Component, Input } from '@angular/core';
import { BookData } from '../../data';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  public book: BookData | undefined;
  public amountText!: string;
  public addToCartText!: string;
  public bookItem = this.cartService.getItems();

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private dialogRef: MatDialog
  ) {
    this.amountText = 'Amount:';
    this.addToCartText = 'Add to cart';
  }

  public previousPage() {
    this.cartService.previousPage();
  }

  public openModal() {
    this.dialogRef.open(PopUpComponent);
    document.body.style.overflow = 'hidden';
  }

  public openError() {
    this.dialogRef.open(ErrorMessageComponent);
    document.body.style.overflow = 'hidden';
  }

  public addToCart(book: BookData, quantity: string) {
    let cartServiceResponse = this.cartService.addToCart(book, Number(quantity));
    this.cartService.changeValue(Number(quantity));
    if (cartServiceResponse === false) {
      this.openError();
    } 
    else 
    this.openModal();
  }

  public validateInput(event: Event): void {
    if (!(event.target instanceof HTMLInputElement)) return;
    const quantity = +event.target.value;
    if (quantity < 1 || quantity > 10) {
      event.target.value = String(1);
      return;
    }
  }

  ngOnInit(): void {
    let bookId = parseInt(this.route.snapshot.params['id']);
    this.bookService.getById(bookId).subscribe((book) => (this.book = book));
  }
}
