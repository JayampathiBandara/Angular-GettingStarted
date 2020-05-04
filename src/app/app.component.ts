import { Component } from '@angular/core';
import { AuthService } from './User/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  
  constructor(private authService: AuthService,
    private router: Router) { }

  logOut():void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
