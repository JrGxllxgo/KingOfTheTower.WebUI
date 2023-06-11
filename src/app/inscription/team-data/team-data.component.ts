import { Component, EventEmitter, Output } from '@angular/core';
import { TeamModel } from 'src/app/models/teamModel';
import { InscriptionService } from '../../services/inscription.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.css'],
  outputs: ['teamDataEvent']
})
export class TeamDataComponent {
  public formSubmitted: boolean = false;

  public newTeam: TeamModel = {
    name: '',
    category: '',
    pay: false,
    wins: 0,
    defeats: 0,
    points_diff: 0,
    classification_points: 0,
    group: {
      name: 'MasculinoA'
    }
  };

  constructor(
    private _inscriptionService: InscriptionService,
    private _toastService: NotifierService,
  ){ }

  ngAfterViewInit(){
    if(this._inscriptionService.getTeamDataForm()){
      this.newTeam = this._inscriptionService.getTeamDataForm();
    }
  }
  
  public saveTeamData(){
    if(this.newTeam.name == '' || this.newTeam.category == ''){
      this._toastService.showWarning('Alguno de los campos están vacíos.', 'Atento!');
    }
    else{
      this._inscriptionService.setTeamData(this.newTeam);
      this._toastService.showSuccess('Los datos se han guardado correctamente.', 'Todo correcto');
    }
  }
}
