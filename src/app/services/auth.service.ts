import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'http://18.191.7.4:3000/api/v1/KE/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(body):Observable<any> {
    //console.log(body,'hello')
    return this.http.post(`${BASE_URL}/register`,body);
  }
  loginUser(body):Observable<any> {
    return this.http.post(`${BASE_URL}/login`,body)
  }

}
