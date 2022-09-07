export interface BookData {
  imagePath: string;
  imageAltTag: string;
  description: string;
  title: string;
  price: string;
  id: number;
}

export interface NavigationData {
  title: string;
  menuIcon: string;
  cartIcon: string;
}

export interface AllData {
  navigation: NavigationData;
  book: BookData[];
}
