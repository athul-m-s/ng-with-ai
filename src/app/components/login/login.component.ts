import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  auth = inject(AuthService);
  
  @Output() close = new EventEmitter<void>();
  @Output() openSignup = new EventEmitter<void>();

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    this.auth.login({
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }, () => {
      this.close.emit();
    });
  }
}
