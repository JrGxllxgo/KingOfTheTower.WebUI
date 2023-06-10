import { Injectable } from '@angular/core';
import { TeamModel } from '../models/teamModel';
import { PlayerModel } from '../models/playerModel';
import { HttpClient } from '@angular/common/http';
import { CommonConstants } from '../core/constants/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private teamData!: TeamModel;
  private playersData: PlayerModel[] = [];

  constructor(private http: HttpClient) { }

  public setTeamData(teamData: TeamModel){
    this.teamData = teamData;
    // console.log(teamData);
  }

  public getTeamDataForm(): TeamModel {
    return this.teamData;
  }

  public setPlayersData(playerFormData: PlayerModel []){
    this.playersData = playerFormData;
    // console.log(this.playersData);
  }

  public getPlayersData(): PlayerModel[] {
    return this.playersData;
  }

  public sendInscription(){
    // console.log(this.playersData);
  }

  public createNewTeam(newTeam: TeamModel){
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    return fetch(CommonConstants.TEAM_REGISTER, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(newTeam),
      redirect: 'follow'
    });
    // return this.http.post(CommonConstants.TEAM_REGISTER, JSON.stringify(newTeam));
  }
}
