import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  jwtHelper: JwtHelper = new JwtHelper();
  // baseUrl: String = 'http://localhost:8080';
  baseUrl: String = '';

  constructor(
    private http: Http
  ) {}

  updateUser(userInfo) {
    console.log('userInfo:', userInfo);
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      this.baseUrl + '/api/users/update',
      userInfo,
      { headers })
      .map(res => res.json());
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/api/users/register', user, { headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/api/users/authenticate', user, { headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + '/api/users/profile', { headers })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    this.loadToken();
    if (this.authToken !== null || this.authToken !== undefined) {
      return !(this.jwtHelper.isTokenExpired(this.authToken));
    } else {
      return false;
    }
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
