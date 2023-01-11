import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profil } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  postUrl: string = `${environment.apiurl}markets`;
  token: string;

  constructor( private http: HttpClient ) { }

  getProduct(): Observable<any> {
    return this.http.get(this.postUrl)
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

}
