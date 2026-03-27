import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Product } from './models/product/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoginComponent, SignupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  auth = inject(AuthService);

  protected readonly title = signal('Siaara Store');
  protected readonly shouldFetch = signal(false);

  // UI State for Modals
  protected readonly showLoginModal = signal(false);
  protected readonly showSignupModal = signal(false);

  protected readonly productsResource = httpResource<Product[]>(() =>
    this.shouldFetch() && this.auth.isLoggedIn()
      ? 'https://node-with-ai.azurewebsites.net/api/products'
      : undefined,
  );

  loadProducts() {
    if (this.auth.isLoggedIn()) {
      this.shouldFetch.set(true);
    } else {
      this.openLogin();
    }
  }

  // Modal controls
  openLogin() {
    if (this.auth.loginError()) this.auth.loginError.set(null);
    this.showLoginModal.set(true);
    this.showSignupModal.set(false);
  }

  closeLogin() {
    this.showLoginModal.set(false);
    if (this.shouldFetch() && this.auth.isLoggedIn()) {
      this.productsResource.reload();
    }
  }

  openSignup() {
    if (this.auth.signupError()) this.auth.signupError.set(null);
    this.showSignupModal.set(true);
    this.showLoginModal.set(false);
  }

  closeSignup() {
    this.showSignupModal.set(false);
    if (this.shouldFetch() && this.auth.isLoggedIn()) {
      this.productsResource.reload();
    }
  }
}
