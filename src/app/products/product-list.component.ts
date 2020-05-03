import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
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

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2019",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];
    constructor() {
        this.filteredProducts = this.products;
        this.filterText = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        var filtLst = this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        return filtLst;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List :' + message;
    }
}