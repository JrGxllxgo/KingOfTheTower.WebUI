import { Component } from '@angular/core';
import { PlayerModel } from 'src/app/models/playerModel';
import { InscriptionService } from '../../services/inscription.service';
import { TeamModel } from 'src/app/models/teamModel';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent {
  public allPlayers: PlayerModel[] = []
  public teamSigned: TeamModel = {
    name: '',
    category: '',
    wins: 0,
    defeats: 0,
    points_diff: 0,
    classification_points: 0,
    pay: false,
  };

  constructor(
    private _inscriptionService: InscriptionService,
    private _toastr: NotifierService
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
        name: '',
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
    this._toastr.showSuccess('Los datos se han guardado correctamente.');
  }
}
