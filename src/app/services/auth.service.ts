import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

import { UserProfile, LoginCredentials, SignupCredentials } from '../models/auth/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  // Core state
  isLoggedIn = signal(false);
  userProfile = signal<UserProfile | null>(null);
  private tokenSignal = signal<string | null>(null);

  // Form state
  // We keep form submission state here so it's easily testable, but
  // it can also be kept local to components.
  isLoggingIn = signal(false);
  loginError = signal<string | null>(null);
  
  isSigningUp = signal(false);
  signupError = signal<string | null>(null);

  constructor() {
    this.initializeState();
  }

  private initializeState() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const userStr = localStorage.getItem('user');
      
      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          this.tokenSignal.set(token);
          this.userProfile.set(user);
          this.isLoggedIn.set(true);
        } catch (e) {
          this.logout(); // Clear invalid state
        }
      }
    }
  }

  getToken(): string | null {
    return this.tokenSignal();
  }

  private handleAuthSuccess(response: any) {
    const token = response.token;
    const user = { 
      name: response.user?.name || response.name, 
      email: response.user?.email || response.email,
      id: response.user?.id || response.id,
      age: response.user?.age || response.age
    };

    // Update state
    this.tokenSignal.set(token);
    this.userProfile.set(user);
    this.isLoggedIn.set(true);

    // Persist to local storage securely
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  login(credentials: LoginCredentials, onSuccess?: () => void) {
    if (this.isLoggingIn()) return;
    
    this.isLoggingIn.set(true);
    this.loginError.set(null);

    this.http.post(`${environment.apiUrl}/auth/login`, credentials).subscribe({
      next: (response: any) => {
        this.isLoggingIn.set(false);
        this.handleAuthSuccess({
          ...response,
          // ensure fallbacks from credentials if not returned
          email: response.user?.email || credentials.email,
          name: response.user?.name || credentials.email.split('@')[0]
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

    this.http.post(`${environment.apiUrl}/auth/register`, userData).subscribe({
      next: (response: any) => {
        this.isSigningUp.set(false);
        this.handleAuthSuccess({
          ...response,
          email: userData.email,
          name: userData.name
        });
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
    this.tokenSignal.set(null);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
}
