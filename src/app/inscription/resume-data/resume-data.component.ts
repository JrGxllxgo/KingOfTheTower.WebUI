import { Component } from '@angular/core';
import { InscriptionService } from '../inscription.service';
import { TeamModel } from 'src/app/models/teamModel';
import { PlayerModel } from 'src/app/models/playerModel';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent {
  public resumeTeamData: TeamModel;
  public allPlayers: PlayerModel[];

  constructor(
    private _inscriptionService: InscriptionService
  ){
    this.resumeTeamData = this._inscriptionService.getTeamDataForm();
    this.allPlayers = this._inscriptionService.getPlayersData();
  }

  public submitForm(){
    this._inscriptionService.sendInscription();
  }
}
