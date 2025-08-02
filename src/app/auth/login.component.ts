import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <button (click)="login('google')">Login with Google</button>
    <button (click)="login('facebook')">Login with Facebook</button>
    <button (click)="login('github')">Login with GitHub</button>
  `
})
export class LoginComponent {
  login(provider: string): void {
    window.location.href = `http://localhost:5000/api/auth/external-login/${provider}`;
  }
}
