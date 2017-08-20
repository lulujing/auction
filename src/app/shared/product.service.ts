import { Injectable } from '@angular/core';
import {log} from 'util';


@Injectable()
export class ProductService  {
  public products: Product[] = [
    new Product(1, 'Apple8', 8000, 5, 'new brand phone', ['phone', 'electronic products']),
    new Product(2, 'Table', 800, 4, 'white dinner table', ['furniture']),
    new Product(3, 'PC', 1000, 3, 'window 10 and I7', ['Desktop', 'electronic products']),
    new Product(4, 'LabTop', 600, 3.5, 'brand new SSID drive hard', ['labtap', 'electronic products']),
    new Product(5, 'oil heater', 50, 2.5, 'one years old  and works', ['heater', 'electronic products'])];
  public commends: Comment[] = [
     new Comment(1 , 1 , '2017-8-7:19:00' , 'Lili' , 3 , 'not so good'),
    new Comment(2 , 2 , '2017-8-8:19:30' , 'Lulu' , 4 , ' Thanks'),
    new Comment(3 , 3, '2017-8-9:19:00' , 'Anna' , 3 , 'normal'),
    new Comment(4 , 4 , '2017-8-3:19:00' , 'yard' , 1, 'I do not like it'),
    new Comment(5 , 5, '2017-8-4:19:00' , 'Jane' , 2 , 'very good'),
    new Comment(6 , 1, '2017-8-21:19:00' , 'wang' , 2 , 'dislike')];
  constructor() { }
  getProducts( ): Product[] {

    return this.products;
  }
  getProductTry(id: number): Product {
     return this.products[id - 1];
  }
  gettry() {
    const items = ['item1', 'item2', 'item3'];
    const copy = [];

    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
      copy.push(items[i]);
    }

  }
  getProduct( id: number): Product {
    const p: Product = this.getProducts().find(item => item.id === id);
    return p;
  }
  getCommentsForProduct( id: number): Comment[] {
    console.log(id);
    const c = [ ];
    for (let i = 0; i < this.commends.length; i++) {
      console.log('productid' + this.commends[i].productId );
       const  d: boolean = this.commends[i].productId.toString() === id.toString();
       console.log('panduan' + d);
        if (d) {
          console.log('if' + this.commends[i].content);
          c.push(this.commends[i]);
        }
    }
    return c;
  }

  getCommentsForProductTRY(id: number): Comment {
    return this.commends[id - 1];
  }
}
export class  Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public  categories: Array<string>
  ) {
  }
}

export class  Comment {

  constructor(public id: number, public productId: number, public timestamp: string,
              public user: string, public rating: number, public content: string) {
  }
}
