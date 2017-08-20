import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Comment } from '../shared/product.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];
  newRating= 5;
  newComment = '';
  isCommentHidden = true;
  constructor(private  routeInfo: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {
   const productId: number = this.routeInfo.snapshot.params['productId'];
   this.product = this.productService.getProductTry(productId);
   this.comments = this.productService.getCommentsForProduct(productId);
  }

  addComment() {
    const comment = new Comment( 0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);
    const sum = this.comments.reduce((sum , comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = null;
    this.isCommentHidden = true;
    this.newRating = 5;
  }

}
