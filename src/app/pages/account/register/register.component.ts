import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userData = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  submitForm() {
    // Check for form validity before login attempt
    if (this.userData.valid) {
      this.authService.register(this.userData.value).subscribe({
        next: (response) => {
          // Handle successful login response
          console.log('Register successful:', response);
          this.router.navigate(['account/login']); // Example navigation after login
        },
        error: (error) => {
          // Handle login error
          console.error('Register error:', error);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
