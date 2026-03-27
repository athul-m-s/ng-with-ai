import { Component, EventEmitter, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  auth = inject(AuthService);

  @Output() openLogin = new EventEmitter<void>();
  @Output() openSignup = new EventEmitter<void>();

  onLogout() {
    this.auth.logout();
  }
}
