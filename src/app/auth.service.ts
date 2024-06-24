import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'authToken'; 

  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  // Método para hacer login
  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Método para hacer logout
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
