import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFailed = false;
  loginSuccess = false;  // New property to track login success

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      emailOrPhone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    const { emailOrPhone, password } = this.loginForm.value;
    const trimmedEmailOrPhone = emailOrPhone.trim(); // Trim input for comparison
    if (this.authService.validateUser(trimmedEmailOrPhone, password)) {
      this.loginSuccess = true;  // Set loginSuccess to true
      this.loginFailed = false;  // Ensure loginFailed is false
      // Redirect or perform other actions upon successful login
    } else {
      this.loginFailed = true;
      this.loginSuccess = false;  // Ensure loginSuccess is false
    }
  }
}
