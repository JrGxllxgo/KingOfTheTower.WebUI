import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConstants } from '../core/constants/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private _http: HttpClient) { }

  public getUserRole(): Observable <any>{
    return this._http.get(CommonConstants.USER_INFORMATION)
  }

  public getGames(court: number): Observable <any> {
    return this._http.get(CommonConstants.GAMES_BY_COURT + court)
  }
}
