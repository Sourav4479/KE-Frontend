import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

 /*  tokenName:string */
  constructor(private cookie: CookieService) { }

  SetToken(token){
    this.cookie.set('app_token',token)
  }
  GetToken(){
    return this.cookie.get('app_token')
  }
  DeleteToken(){
    this.cookie.delete('app_token')
  }
  GetPayload(){
    const token = this.GetToken();
    let payload;
    if(token){
      payload= token.split('.')[1]
      payload= JSON.parse(window.atob(payload))
    }
    return payload;
  }
}
