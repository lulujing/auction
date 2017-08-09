import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comment: Comment;
  constructor(private  routeInfo: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {
   const productId: number = this.routeInfo.snapshot.params['productId'];
   console.log(productId);
   this.product = this.productService.getProductTry(productId);
   this.comment = this.productService.getCommentsForProductTRY(productId);
  }

}
