import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  auth = inject(AuthService);

  @Output() openLogin = new EventEmitter<void>();
  @Output() openSignup = new EventEmitter<void>();

  onLogout() {
    this.auth.logout();
  }
}
