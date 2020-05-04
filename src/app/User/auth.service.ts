import { Injectable } from '@angular/core';

import { User } from './user';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() { }

  login(): void {
    this.currentUser = {
      id: 1,
      userName: "User Name",
      isAdmin: true
    };
  }

  logout(): void {
    this.currentUser = null;
  }
}