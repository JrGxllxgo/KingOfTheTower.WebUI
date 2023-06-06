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

  constructor(private http: HttpClient) {}

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
  
  public async setRegister(user: UserModel){
    var body = '{"id": 0,"name": "string","mail": "string","role": "string","player": {"id": 0,"nif": "string","name": "string","phone": "string","instagram": "string","wantPics": true,"team": {"id": 0,"name": "string","category": "string","pay": true,"wins": 0,"defeats": 0,"points_diff": 0,"classification_points": 0}}}'
    
    return this.http.post(CommonConstants.USER_REGISTER, body);
  }

  public updateUserData(user: UserModel){
    console.log(user)
  }
}
