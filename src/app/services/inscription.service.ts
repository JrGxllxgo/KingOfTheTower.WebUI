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
  }

  public getTeamDataForm(): TeamModel {
    return this.teamData;
  }

  public setPlayersData(playerFormData: PlayerModel []){
    this.playersData = playerFormData;
    console.log(this.playersData);
  }

  public getPlayersData(): PlayerModel[] {
    return this.playersData;
  }

  public createPlayers(players: PlayerModel[], newTeam:TeamModel){
    this.playersData = players;
  }

  public createNewTeam(){
    // console.log(this.playersData)
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    return fetch(CommonConstants.PLAYER_SEVERAL, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(this.playersData),
      redirect: 'follow'
    });
  }
}
