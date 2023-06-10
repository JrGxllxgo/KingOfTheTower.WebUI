import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonConstants } from 'src/app/core/constants/common';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private _http: HttpClient) { }

  public getGroups(): Observable <any>{
    return this._http.get(CommonConstants.GROUPS);
  }

  public getUsers(): Observable <any>{
    return this._http.get(CommonConstants.USERS);
  }

  public getTeams(): Observable <any>{
    return this._http.get(CommonConstants.TEAMS);
  }

  public getTeamsByGroup(groupName: string): Observable <any>{
    return this._http.get(CommonConstants.TEAMS + groupName);
  }

  public getPlayers(): Observable <any>{
    return this._http.get(CommonConstants.PLAYERS)
  }
}
