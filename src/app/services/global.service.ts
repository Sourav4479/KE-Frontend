import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/api/v1/KE/global';

interface response {
  totalAlerts:number;
 }

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  constructor(private http: HttpClient) { }

  updateAlert():Observable<any> {
    //console.log(body,'hello')
    return this.http.get(`${BASE_URL}/update`);
  }
  fetchAlert():Observable<any> {
    console.log('hello')
    return this.http.get<response>(`${BASE_URL}/fetch`)
  }
}
