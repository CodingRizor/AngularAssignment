import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emailOrPhoneForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.emailOrPhoneForm = this.fb.group({
      emailOrPhone: ['', [Validators.required, Validators.pattern(/^(?:\d{10}|\S+@\S+\.\S+)$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const emailOrPhone = this.emailOrPhoneForm.get('emailOrPhone')?.value?.trim();
    if (this.emailOrPhoneForm.valid && emailOrPhone) {
      const userExists = this.authService.doesUserExist(emailOrPhone);

      if (userExists) {
        this.router.navigate(['/login'], { queryParams: { emailOrPhone } });
      } else {
        this.router.navigate(['/signup-step1'], { state: { emailOrPhone } });
      }
    } else {
      this.errorMessage = 'Please enter a valid email or phone number.';
    }
  }
}
