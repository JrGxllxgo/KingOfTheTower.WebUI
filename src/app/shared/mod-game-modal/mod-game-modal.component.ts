import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GameModel } from 'src/app/models/gameModel';
import { ModGameService } from 'src/app/services/mod-game.service';
import { NotifierService } from 'src/app/services/notifier.service';

type Nullable<T> = T | null;

@Component({
  selector: 'app-mod-game-modal',
  templateUrl: './mod-game-modal.component.html',
  styleUrls: ['./mod-game-modal.component.css']
})
export class ModGameModalComponent {
  @Input()
  staffGame: GameModel = {
    id: 0,
    team1Id: 0,
    team1: {
      name: '',
      category: '',
      pay: false,
      wins: 0,
      defeats: 0,
      points_diff: 0,
      classification_points: 0
    },
    team2Id: 0,
    team2: {
      name: '',
      category: '',
      pay: false,
      wins: 0,
      defeats: 0,
      points_diff: 0,
      classification_points: 0
    },
    score1: 0,
    score2: 0,
    court: 0,
    staffId: 0,
    schedule: new Date() 
  };
  @Input()
  modalReference: Nullable<NgbModalRef> = null;

  constructor( 
    private _modGameService: ModGameService,
    private _toastr: NotifierService){}

  public dismissModal(){
    this.modalReference!.close();
  }

  public updateGame(){
    this._modGameService.modGame(this.staffGame.id, this.staffGame.score1, this.staffGame.score2)
    .then(async response => {
      if (response.ok){
        let result = await response.json();
        this.dismissModal();
      } else if (response.status == 500){          
        let errorMessage = await response.text();
        this._toastr.showError(errorMessage, ' Algo no ha ido bien...')
      } else {
        console.log(response.status);
      }
    })
    .then(result => this._toastr.showSuccess('El partido se ha guardado con éxito', ' Todo correcto'))
    .catch(error => this._toastr.showError(error, ' Algo no ha ido bien...'));
  }
}
