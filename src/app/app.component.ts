import { Component } from '@angular/core';
import data from './data.json';

interface Data {
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  data: Data = data;
}
