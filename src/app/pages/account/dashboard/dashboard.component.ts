import { Component, OnInit } from '@angular/core';
import { JwtDecodeService } from '../../../services/jwt-decode.service';
import { UrlService } from '../../../services/url.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  userEmail: string;
  userUrls: any[] = [];
  constructor(private jwt: JwtDecodeService, private urlService: UrlService) {
    const token = this.jwt.decodeJwt(localStorage.getItem('token'));
    this.userEmail = token.payload.email;
  }
  ngOnInit(): void {
    this.loadUserUrls();
  }
  loadUserUrls(): void {
    this.urlService.GetUserUrls().subscribe({
      next: (response) => {
        this.userUrls = response;
      },
      error: (error) => {
        console.error('Error fetching user URLs:', error);
      },
    });
  }

  // contact url service to get user urls based on his nameid(guid)
  // then save the response in a variable , and in the html foreach item in the variable print a list item
}
