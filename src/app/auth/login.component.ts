import { Component } from '@angular/core';
import { environment } from '../config/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <button (click)="login('Google')">Login with Google</button>
    <button (click)="login('Facebook')">Login with Facebook</button>
    <button (click)="login('Github')">Login with GitHub</button>
  `,
})
export class LoginComponent {
  login(provider: string): void {
    // Usando HTTPS para o backend também
    window.location.href = `${environment.authUrl}/external-login/${provider}`;
  }
}
