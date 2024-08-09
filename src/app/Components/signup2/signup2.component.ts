import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { saveSignupStep2Data } from 'src/app/Store/user.action';
import { selectSignupStep1Data } from 'src/app/Store/user.selector';

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {
  step2Form: FormGroup;
  organizationError = false;
  cityError = false;
  pincodeError = false;
  registrationSuccessful = false;
  userName: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.step2Form = this.fb.group({
      organization: ['', Validators.required],
      organizationId: [''],
      designation: ['', Validators.required],
      birthDate: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSignupStep1Data)).subscribe(userData => {
      if (userData) {
        this.step2Form.patchValue(userData);
        this.userName = userData.name; // Capture user name for success message
      }
    });
  }

  onBack(): void {
    this.store.dispatch(saveSignupStep2Data({ data: this.step2Form.value }));
    this.router.navigate(['/signup-step1'], { state: { userData: this.step2Form.value } });
  }

  onSubmit(): void {
    const { organization, city, pincode } = this.step2Form.value;
    this.organizationError = !this.authService.validateOrganization(organization);
    this.cityError = !/^[a-zA-Z\s]+$/.test(city);
    this.pincodeError = !/^\d{6}$/.test(pincode);
  
    if (this.step2Form.valid && !this.organizationError && !this.cityError && !this.pincodeError) {
      this.store.pipe(select(selectSignupStep1Data)).subscribe(signupStep1Data => {
        if (signupStep1Data) {
          const combinedUserData = {
            ...this.step2Form.value,
            ...signupStep1Data
          };
          console.log('Combined user data:', combinedUserData); // Debugging log
          this.authService.registerUser(combinedUserData);
          this.registrationSuccessful = true;
          setTimeout(() => this.router.navigate(['/login']), 2000); // Navigate to login page after 2 seconds
        }
      });
    }
  }
  
}
