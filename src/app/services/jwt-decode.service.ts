import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class JwtDecodeService {
  constructor() {}
  decodeJwt(token: any): any {
    if (token != null) {
      const [headerEncoded, payloadEncoded] = token.split('.').slice(0, 2);

      const decodeBase64 = (value: string) => {
        return atob(value);
      };

      const header = JSON.parse(decodeBase64(headerEncoded));
      const payload = JSON.parse(decodeBase64(payloadEncoded));

      return { header, payload };
    }
    return;
  }
}
