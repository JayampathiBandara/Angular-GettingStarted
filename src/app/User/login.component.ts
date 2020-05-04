import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  //selector: 'app-login', login using router
  templateUrl: './login.component.html'
})
export class LoginComponent {

  errorMessage: string;
  pageTitle = 'Log In';

  constructor() { }
}
