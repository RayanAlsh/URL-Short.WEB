// home.component.ts
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UrlService } from '../../services/url.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  formData = new FormGroup({
    URL: new FormControl('', [Validators.required]),
  });
  shortenedURL: string | undefined;

  constructor(private urlService: UrlService) {}

  onSubmit() {
    if (this.formData.valid) {
      const urlValue = this.formData.value.URL;
      const url = urlValue ? urlValue : ''; // Ensure default_URL is a string
      this.urlService.Shorten_URL(url).subscribe({
        next: (response) => {
          this.shortenedURL = response.short_URL; // Store the shortened URL
        },
        error: (error) => {
          console.error('Error shortening URL:', error);
        },
      });
    }
  }
}
