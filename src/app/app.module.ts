import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { ProductListComponent } from './products/product-list.component';
//import { ConvertToSpacesPipe } from './Shared/convert-to-spaces.pipe';
//import { StarComponent } from './Shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
//import { ProductDetailComponent } from './products/product-detail.component';
//import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    //ProductListComponent,
    
    //StarComponent,
    //ConvertToSpacesPipe,
    WelcomeComponent
    //ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     /* { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },*/
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
