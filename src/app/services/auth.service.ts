import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserProfile, LoginCredentials, SignupCredentials } from '../models/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  // Core state
  isLoggedIn = signal(false);
  userProfile = signal<UserProfile | null>(null);

  // Form state
  // We keep form submission state here so it's easily testable, but
  // it can also be kept local to components.
  isLoggingIn = signal(false);
  loginError = signal<string | null>(null);
  
  isSigningUp = signal(false);
  signupError = signal<string | null>(null);

  login(credentials: LoginCredentials, onSuccess?: () => void) {
    if (this.isLoggingIn()) return;
    
    this.isLoggingIn.set(true);
    this.loginError.set(null);

    this.http.post('https://node-with-ai.azurewebsites.net/api/auth/login', credentials).subscribe({
      next: (response: any) => {
        this.isLoggingIn.set(false);
        this.isLoggedIn.set(true);
        this.userProfile.set({ 
          name: response.name || response.user?.name || credentials.email.split('@')[0], 
          email: response.email || response.user?.email || credentials.email 
        });
        if (onSuccess) onSuccess();
      },
      error: (err) => {
        this.isLoggingIn.set(false);
        this.loginError.set(err.error?.message || 'Invalid credentials or login failed');
      }
    });
  }

  register(userData: SignupCredentials, onSuccess?: () => void) {
    if (this.isSigningUp()) return;

    this.isSigningUp.set(true);
    this.signupError.set(null);

    this.http.post('https://node-with-ai.azurewebsites.net/api/auth/register', userData).subscribe({
      next: (response: any) => {
        this.isSigningUp.set(false);
        this.isLoggedIn.set(true);
        this.userProfile.set({ name: userData.name, email: userData.email });
        if (onSuccess) onSuccess();
      },
      error: (err) => {
        this.isSigningUp.set(false);
        this.signupError.set(err.error?.message || 'Registration failed. Please try again.');
      }
    });
  }

  logout() {
    this.isLoggedIn.set(false);
    this.userProfile.set(null);
  }
}
