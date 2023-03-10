import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new BehaviorSubject<boolean>(false);

  constructor() { }
}
