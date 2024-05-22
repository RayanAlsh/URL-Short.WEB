// auth.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService, private router: Router) {}

  login(userData: any): Observable<any> {
    return this.api.post('Users/login', userData);
  }
  register(userData: any): Observable<any> {
    // Handle registration logic, potentially using the ApiService
    return this.api.post('Users/register', userData);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Navigate to the home page
    this.router.navigate(['/home']);
  }
}
