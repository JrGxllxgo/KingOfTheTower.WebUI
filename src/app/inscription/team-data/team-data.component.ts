import { Component, EventEmitter, Output } from '@angular/core';
import { TeamModel } from 'src/app/models/teamModel';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.css'],
  outputs: ['teamDataEvent']
})
export class TeamDataComponent {

  public newTeam: TeamModel = {
    team_name: '',
    category: '',
    payed: false,
    wins: 0,
    defeats: 0,
    points_diff: 0,
    classification_points: 0
  };

  constructor(
    private _inscriptionService: InscriptionService
  ){ }

  ngAfterViewInit(){
    if(this._inscriptionService.getTeamDataForm()){
      this.newTeam = this._inscriptionService.getTeamDataForm();
    }
  }
  
  public saveTeamData(){
    this._inscriptionService.setTeamData(this.newTeam);
  }
}
