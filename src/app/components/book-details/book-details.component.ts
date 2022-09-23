import { Component, Input } from '@angular/core';
import { BookData } from '../../data';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  public book: BookData | undefined;
  public amountText!: string;
  public addToCartText!: string;
  bookItem = this.cartService.getItems();

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private dialogRef: MatDialog
  ) {
    this.amountText = 'Amount:';
    this.addToCartText = 'Add to cart';
  }

  openModal() {
    this.dialogRef.open(PopUpComponent);
    document.body.style.overflow = 'hidden';
  }

  addToCart(book: BookData, value: any) {
    this.cartService.addToCart(book);
    this.openModal();
    this.cartService.changeValue(value);
  }

  getBooks(): void {
    let bookId = parseInt(this.route.snapshot.params['id']);
    this.bookService.getById(bookId).subscribe((book) => (this.book = book));
  }

  validateInput(event: any) {
    const quantity = +event.target.value;
    if (quantity < 1 || quantity > 10) {
      event.target.value = 1;
      return;
    }
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
