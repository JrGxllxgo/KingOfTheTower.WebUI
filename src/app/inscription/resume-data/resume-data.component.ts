import { Component } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { TeamModel } from 'src/app/models/teamModel';
import { PlayerModel } from 'src/app/models/playerModel';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent {
  public resumeTeamData: TeamModel;
  public allPlayers: PlayerModel[];
  public teamCreated: any;

  constructor(
    private _inscriptionService: InscriptionService,
    private _toastr: NotifierService
  ){
    this.resumeTeamData = this._inscriptionService.getTeamDataForm();
    this.allPlayers = this._inscriptionService.getPlayersData();
  }

  public async submitForm(){
      this._inscriptionService.createNewTeam()
      .then(async response => {
        if (response.status == 500){          
          let errorMessage = await response.text();
          this._toastr.showError(errorMessage, ' Algo no ha ido bien...')
        }else {
          this._toastr.showSuccess('Inscripción mandada con éxito', ' Todo correcto')
        }})
      .catch(error => this._toastr.showError(error, ' Algo no ha ido bien...'));
    }
}
