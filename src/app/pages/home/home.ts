import {
  Component,
  signal,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, LoginComponent, SignupComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private router = inject(Router);
  auth = inject(AuthService);

  // UI State for Modals
  protected readonly showLoginModal = signal(false);
  protected readonly showSignupModal = signal(false);

  // Page transition state
  protected readonly isLeaving = signal(false);

  /** Triggers the fade+slide-up exit animation then lazy-navigates */
  goToDeepDive() {
    this.isLeaving.set(true);
    setTimeout(() => {
      this.router.navigate(['/deep-dive']);
    }, 620);
  }

  // Modal controls
  openLogin() {
    if (this.auth.loginError()) this.auth.loginError.set(null);
    this.showLoginModal.set(true);
    this.showSignupModal.set(false);
  }

  closeLogin() {
    this.showLoginModal.set(false);
  }

  openSignup() {
    if (this.auth.signupError()) this.auth.signupError.set(null);
    this.showSignupModal.set(true);
    this.showLoginModal.set(false);
  }

  closeSignup() {
    this.showSignupModal.set(false);
  }
}
