import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  auth = inject(AuthService);
  
  @Output() close = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>();

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    this.auth.register({
      name: formData.get('name') as string,
      age: parseInt(formData.get('age') as string, 10),
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }, () => {
      this.close.emit();
    });
  }
}
