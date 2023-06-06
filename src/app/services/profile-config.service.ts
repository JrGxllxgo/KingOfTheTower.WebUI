import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileConfigService {

  constructor(
    private http: HttpClient
  ) { }
  public getUserDB(userMail: string){
    return this.http.get('http://localhost:44373/api/Users/' + userMail)
  }
}
