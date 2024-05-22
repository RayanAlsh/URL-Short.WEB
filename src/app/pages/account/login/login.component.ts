import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; // Import FormsModule
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { JwtDecodeService } from '../../../services/jwt-decode.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userData = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]), // Add validation
    Password: new FormControl('', [Validators.required]), // Add validation
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtDecode: JwtDecodeService
  ) {}
  submitForm() {
    // Check for form validity before login attempt
    if (this.userData.valid) {
      this.authService.login(this.userData.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);

          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          // Handle login error
          console.error('Login error:', error);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
