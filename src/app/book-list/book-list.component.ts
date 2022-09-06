import { Component, OnInit } from '@angular/core';
import ImageDataJson from '../data.json';
import { AllData } from '../data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  public data: AllData = ImageDataJson;

  exampleTextField = 'click click';

  onClick() {
    console.log(this.exampleTextField);
  }
}
