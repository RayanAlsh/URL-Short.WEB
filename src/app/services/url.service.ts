// url.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { JwtDecodeService } from './jwt-decode.service';
@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private api: ApiService, private jwtservice: JwtDecodeService) {}

  Shorten_URL(default_URL: string): Observable<any> {
    const token = localStorage.getItem('token');

    const userData = this.jwtservice.decodeJwt(token); // Retrieve UserId from localStorage

    if (userData == null) {
      const data = { default_URL }; // Create data object with default_URL and UserId
      return this.api.post('Url', data);
    }

    const userid = userData.payload.nameid;
    const data = { default_URL, UserId: userid }; // Create data object with default_URL and UserId
    return this.api.post('Url', data);
  }
}
