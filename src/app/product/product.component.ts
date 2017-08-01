import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'Apple8', 8000, 5, 'new brand phone', ['phone', 'electronic products']),
      new Product(2, 'Table', 800, 4, 'white dinner table', ['furniture']),
      new Product(3, 'PC', 1000, 3, 'window 10 and I7', ['Desktop', 'electronic products']),
      new Product(4, 'LabTop', 600, 3.5, 'brand new SSID drive hard', ['labtap', 'electronic products']),
      new Product(5, 'oil heater', 50, 2.5, 'one years old  and works', ['heater', 'electronic products']),
    ];
  }
}
export class  Product{
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public  categories: Array<string>
  ) {;
  }
}
