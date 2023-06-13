import { Injectable } from '@angular/core';
import { CommonConstants } from '../core/constants/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileConfigService {

  constructor(private http: HttpClient) { }

  public getUserDB(userMail: string): Observable<any>{
    return this.http.get(CommonConstants.USER_INFORMATION + userMail)
  }
}
