import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUser(data: any){
    return this.http.post<any>('http://localhost:3000/user',data)
  }

  getUser(){
    return this.http.get('http://localhost:3000/user')
  }

  postMeeting(data: any){
    return this.http.post<any>('http://localhost:3000/meeting', data)
    .pipe(map((response: any) => {
      return response;
    }))
  }

  getMeeting(){
    return this.http.get<any>('http://localhost:3000/meeting')
    .pipe(map((response: any) => {
      return response;
    }))
  }

  updateMeeting(data: any, id: number){
    return this.http.put<any>('http://localhost:3000/meeting/'+id,data)
    .pipe(map((response: any) => {
      return response;
    }))
  }

  deleteMeeting(id: number) {
    return this.http.delete<any>('http://localhost:3000/meeting/'+id)
    .pipe(map((response: any) => {
      return response;
    }))
  }

}
