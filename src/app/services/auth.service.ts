// auth.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(userData: any): Observable<any> {
    return this.api.post('Users/login', userData);
  }
  register(userData: any): Observable<any> {
    // Handle registration logic, potentially using the ApiService
    return this.api.post('Users/register', userData);
  }
}
