import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'; // later use from shared module
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule
    //SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }