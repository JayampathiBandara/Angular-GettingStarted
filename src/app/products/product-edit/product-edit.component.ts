import { Component } from '@angular/core';


import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  pageTitle = 'Product Edit';
  errorMessage: string;

  product: IProduct;

  constructor(private productService: ProductService,
    private activRoute: ActivatedRoute,    
    private router: Router) { }
               

    ngOnInit(): void {
      this.activRoute.paramMap.subscribe(
        params => {
          const id = +params.get('id');
          this.getProduct(id);
        }
      );
    }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.onProductRetrieved(product),
      error: err => this.errorMessage = err
    });
  }
  onProductRetrieved(product: IProduct): void {
    this.product = product;

    if (this.product) { 
      if (this.product.productId === 0) {
        this.pageTitle = 'Add Product';
      } else     
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else
      this.pageTitle = "No Product Found";
  }
  saveProduct(): void {
  }
   
}
