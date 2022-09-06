import { Component, OnInit } from '@angular/core';
import ImageDataJson from '../data.json';
import { AllData } from '../data';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  public data: AllData = ImageDataJson;
}
