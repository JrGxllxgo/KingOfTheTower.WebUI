import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonConstants } from 'src/app/core/constants/common';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userObj: any = {};

  constructor(private _http: HttpClient) {}

  public getUserObj(){
    let token = sessionStorage.getItem("token") as string;
    return this.userObj = this.decriptJWT(token);
  }

  private decriptJWT(token: string): any{
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload)
  }
  
  public setRegister(user: UserModel){
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    return fetch(CommonConstants.USER_REGISTER, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(user),
      redirect: 'follow'
    });
  }

  public getUserData(){
    return this._http.get(CommonConstants.USER_INFORMATION + this.getUserObj().email);
  }
}
