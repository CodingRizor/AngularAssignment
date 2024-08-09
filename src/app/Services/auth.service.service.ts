import { Injectable } from '@angular/core';

export interface User {
  emailOrPhone: string;
  password: string;
  name?: string;
  organization?: string;
  designation?: string;
  birthDate?: Date;
  city?: string;
  pincode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];
  private readonly LOCAL_STORAGE_KEY = 'users';

  private allowedOrganizations = ['Solve8', 'Buyogo'];

  constructor() {
    this.loadUsers();
    if (this.users.length === 0) {
      this.users = [];
      this.saveUsers();
    }
  }

  private loadUsers(): void {
    const storedUsers = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (storedUsers) {
      try {
        this.users = JSON.parse(storedUsers);
        console.log('Loaded users from local storage:', this.users); // Debugging log
      } catch (e) {
        console.error('Error parsing user data from local storage', e);
        this.users = [];
      }
    }
  }

  private saveUsers(): void {
    try {
      console.log('Saving users to local storage:', this.users); // Debugging log
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.users));
    } catch (e) {
      console.error('Error saving user data to local storage', e);
    }
  }

  validateUser(emailOrPhone: string, password: string): boolean {
    const normalizedInput = emailOrPhone?.trim().toLowerCase();
    console.log('Validating user with:', normalizedInput, password); // Debugging log

    const isValid = this.users.some(user => {
        const storedEmailOrPhone = user.emailOrPhone?.trim().toLowerCase();

        const isEmailOrPhoneMatch = storedEmailOrPhone === normalizedInput;
        const isPasswordMatch = user.password === password;

        console.log('Checking user:', user);
        console.log('Is Email/Phone Match:', isEmailOrPhoneMatch);
        console.log('Is Password Match:', isPasswordMatch);

        return isEmailOrPhoneMatch && isPasswordMatch;
    });

    console.log('Validation result:', isValid); // Debugging log
    return isValid;
  }

  validateOrganization(organization: string): boolean {
    return this.allowedOrganizations.includes(organization);
  }

  registerUser(user: User): void {
    const normalizedEmailOrPhone = user.emailOrPhone?.trim().toLowerCase();

    console.log('Attempting to register user:', user);
    console.log('Normalized Email/Phone:', normalizedEmailOrPhone);

    const userExists = this.users.some(existingUser => {
        const existingEmailOrPhone = existingUser.emailOrPhone?.trim().toLowerCase();

        // Check only against fields that are defined
        const isEmailOrPhoneMatch = existingEmailOrPhone === normalizedEmailOrPhone;

        console.log('Is Email/Phone Match:', isEmailOrPhoneMatch);

        return isEmailOrPhoneMatch;
    });

    if (!userExists) {
        this.users.push(user);
        console.log('Registering new user:', user); 
        this.saveUsers();
    } else {
        console.log('User already exists, not registering:', user); 
    }
  }

  // Method to check if a user exists based on email or phone
  doesUserExist(emailOrPhone: string): boolean {
    const normalizedInput = emailOrPhone?.trim().toLowerCase();
    return this.users.some(user => user.emailOrPhone?.trim().toLowerCase() === normalizedInput);
  }
}
