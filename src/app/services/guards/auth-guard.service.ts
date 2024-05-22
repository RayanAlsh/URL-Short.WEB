import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.checkIfAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/account/login']);
    }
    return isAuthenticated;
  }

  checkIfAuthenticated(): boolean {
    // Replace this with your actual authentication logic
    const token = localStorage.getItem('token');
    // Add logic to check if the token is valid, if necessary
    return !!token;
  }
}
