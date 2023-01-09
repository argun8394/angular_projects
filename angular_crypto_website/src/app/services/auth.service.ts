import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(null);
  }

  loginUser(identifier: string, password: string) {
    const url: string = `${environment.apiurl}auth/login`;
    const user: any = { identifier: identifier, password: password };

    return this.http.post<any>(url, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
