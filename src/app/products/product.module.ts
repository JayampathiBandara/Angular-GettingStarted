import { NgModule } from '@angular/core';


import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../Shared/convert-to-spaces.pipe';

import { ProductDetailComponent } from './product-detail.component';


import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component'; 

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent
      }
    ]),
    SharedModule  
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductEditComponent
  ]
})
export class ProductModule { }
