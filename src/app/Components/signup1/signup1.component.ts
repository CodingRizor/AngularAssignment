import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { selectSignupStep1Data } from 'src/app/Store/user.selector';
import { saveSignupStep1Data } from 'src/app/Store/user.action';

@Component({
  selector: 'app-signup-step1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      emailOrPhone: ['', [Validators.required, Validators.pattern(/^(?:\d{10}|\S+@\S+\.\S+)$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSignupStep1Data)).subscribe(userData => {
      if (userData) {
        this.signupForm.patchValue(userData);
      }
    });
  }

  onContinue(): void {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      userData.emailOrPhone = userData.emailOrPhone.trim();
      this.store.dispatch(saveSignupStep1Data({ data: userData }));
      this.router.navigate(['/signup-step2'], { state: { userData } });
    }
  }
}
