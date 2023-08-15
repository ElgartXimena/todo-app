import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username == 'admin' && password == '1234') {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      this.loggedIn = true;
      return true;
    }
    this.loggedIn = false;
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    let pass = sessionStorage.getItem('password');
    if (user && pass) {
      return this.login(user, pass);
    }
    return false;
  }
}
