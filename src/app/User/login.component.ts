import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-login', login using router
  templateUrl: './login.component.html'
})
export class LoginComponent {

  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService,
    private router: Router) { }

  login(loginForm: NgForm) {
    const userName = loginForm.form.value.userName;
    const password = loginForm.form.value.password;
    alert(userName + ' ' + password);
    this.authService.login();
    this.router.navigate(['/welcome']);
  }
}
