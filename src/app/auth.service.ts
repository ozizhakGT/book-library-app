import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

const USER_NAME = 'currentUserLibrary';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!this.getAuthUserDetails();
  }

  getAuthUserDetails(): string  {
    return sessionStorage.getItem(USER_NAME) || '';
  }

  login(username: string): void {
    sessionStorage.setItem(USER_NAME, username);

    this.router.navigate(['']);
  }

  logout(): void {
    sessionStorage.removeItem(USER_NAME);

    this.router.navigate(['login']);
  }
}
