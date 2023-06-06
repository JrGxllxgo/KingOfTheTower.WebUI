import { Injectable } from '@angular/core';
import { TeamModel } from '../models/teamModel';
import { PlayerModel } from '../models/playerModel';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private teamData!: TeamModel;
  private playersData: PlayerModel[] = [];

  constructor() { }

  public setTeamData(teamData: TeamModel){
    this.teamData = teamData;
    console.log(teamData);
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

  public sendInscription(){
    console.log(this.teamData);
    console.log(this.playersData);
  }
}
