import { Component } from '@angular/core';


import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  pageTitle = 'Product Edit';
  errorMessage: string;

  product: IProduct;

  constructor(private productService: ProductService) { }
               

  getProduct(id: number): void {

  }
}
