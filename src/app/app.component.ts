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
  get userName(): string {
    if (this.authService.currentUser)
      return this.authService.currentUser.userName;

    return '';
  }
  constructor(private authService: AuthService,
    private router: Router) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
