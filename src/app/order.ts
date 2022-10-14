import { BookData } from './data';

export class OrderBook {
  id: number;
  title: string;
  price: number;
  quantity: number;

  constructor(book: BookData) {
    this.id = book.id;
    this.title = book.title;
    this.price = book.price;
    this.quantity = book.quantity;
  }
}
