import { Component } from '@angular/core';
import data from '../../../../orders.json';
import { AllData } from '../../data';
@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent {
  public data: AllData = data;
}
