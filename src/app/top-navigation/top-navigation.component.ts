import { Component, OnInit } from '@angular/core';
import data from '../data.json';

interface NavigationData {
  title: string;
  menuIcon: string;
  cartIcon: string;
}

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent {
  public data: NavigationData = data;
}
