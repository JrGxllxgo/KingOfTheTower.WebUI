import { Component } from '@angular/core';
import { PlayerModel } from 'src/app/models/playerModel';
import { InscriptionService } from '../inscription.service';
import { TeamModel } from 'src/app/models/teamModel';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent {
  public allPlayers: PlayerModel[] = []
  public teamSigned: TeamModel;

  constructor(
    private _inscriptionService: InscriptionService
  ){
    this.teamSigned = this._inscriptionService.getTeamDataForm();
    this.initializeForm();
  }

  ngAfterViewInit(){
    if(this._inscriptionService.getPlayersData().length > 0){
      this.allPlayers = this._inscriptionService.getPlayersData();
    }
  }

  private initializeForm(){
    for(let i = 0; i < 4; i++){
      const newPlayer: PlayerModel = {
        nif: '',
        player_name: '',
        phone: '',
        instagram: '',
        want_pics: false,
        team: this.teamSigned
      }
      this.allPlayers.push(newPlayer);
    }
  }

  //Method to save players
  public savePlayersData(){
    this._inscriptionService.setPlayersData(this.allPlayers);
  }
}
