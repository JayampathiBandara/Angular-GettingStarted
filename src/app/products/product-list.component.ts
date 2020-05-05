import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;

    showImage: boolean = true;
    _filterText: string;
    get filterText(): string {
        return this._filterText;
    }
    set filterText(value: string) {
        this._filterText = value;
        this.filteredProducts = this.filterText ? this.performFilter(this.filterText) : this.products;
    }
    errorMessage: string;
    
    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService: ProductService,
        private activRoute: ActivatedRoute) {
        //this.filteredProducts = this.products;
        //Oninit run after constructor. so move above line to onInit
        //this.filterText = 'cart';
    }

    ngOnInit(): void {
        this.filterText = this.activRoute.snapshot.queryParamMap.get('filterBy') || '';
        // query pam are string. so bollean is caome as string
        this.showImage = this.activRoute.snapshot.queryParamMap.get('showImage') === 'true';
    
        this.productService.getProducts().subscribe({
          next: products => {
            this.products = products;
            this.filteredProducts = this.performFilter(this.filterText);
          },
          error: err => this.errorMessage = err
        });
      }

    performFilter(filterBy: string): IProduct[] {
        // whe call set filterText() products list is null
        // beacuse qery string read before load product list
        if(this.products){
        filterBy = filterBy.toLocaleLowerCase();
        var filtLst = this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        return filtLst;
        }
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List :' + message;
    }
}