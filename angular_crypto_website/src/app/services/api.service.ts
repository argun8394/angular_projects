import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Balance } from '../models/balance.model';
import { Orders } from '../models/orders.model';
import { Products } from '../models/products.model';
import { Profil } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  url = `${environment.apiurl}`;
  token : any = localStorage.getItem('token')

  constructor( private http: HttpClient ) { }

  getProduct(): Observable<any> {
    return this.http.get(`${this.url}markets`)
   }



   createPost(postData: Profil) {
    return this.http.post<any>(
      'https://akademi-cp.bitlo.com/api/interview/auth/me',
      postData,
      {
        headers: new HttpHeaders({
          'x-bitlo-auth' :  this.token,
        }),
        observe: 'body',
      }
    );
  }

  getBalances(balanceData: Balance) {
    return this.http.post<any>(
      'https://akademi-cp.bitlo.com/api/interview/auth/balances',
      balanceData,
      {
        headers: new HttpHeaders({
          'x-bitlo-auth' :  this.token,
        }),
        observe: 'body',
      }
    );
  }

  getOpenOrders(orderData: Orders) {
    return this.http.post<any>(
      'https://akademi-cp.bitlo.com/api/interview/auth/open-orders',
      orderData,
      {
        headers: new HttpHeaders({
          'x-bitlo-auth' :  this.token,
        }),
        observe: 'body',
      }
    );
  }



}
