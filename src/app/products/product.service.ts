import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){

    }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))) ,
      catchError(this.handleError) 
    );    
  }

  getProduct(id:number) : Observable<IProduct>{   
    if (id === 0) {
      return of(this.initializeProduct());
    } 
    return this.http.get<IProduct[]>(this.productUrl)      
      .pipe(
          map(data => data.find(dt => dt.productId == id)),
          tap(data=>console.log('get Product' + JSON.stringify(data))),
          catchError(this.handleError)
      );
  }
  private initializeProduct(): IProduct {
    // Return an initialized object
    return {
      productId: 0,
      productName: null,
      productCode: null,
      category: null,
      tags: [],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}