import { Component } from '@angular/core';
import data from './data.json';

interface Data {
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data: Data = data;
}
