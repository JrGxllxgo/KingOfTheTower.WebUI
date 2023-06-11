import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GameModel } from 'src/app/models/gameModel';

type Nullable<T> = T | null;

@Component({
  selector: 'app-mod-game-modal',
  templateUrl: './mod-game-modal.component.html',
  styleUrls: ['./mod-game-modal.component.css']
})
export class ModGameModalComponent {
  @Input()
  staffGame: GameModel = {
    team1Id: 0,
    team2Id: 0,
    score1: 0,
    score2: 0,
    court: 0,
    staffId: 0,
    schedule: new Date() 
  };
  @Input()
  modalReference: Nullable<NgbModalRef> = null;

  constructor(){}

  public dismissModal(){
    this.modalReference!.close();
  }

  public updateGame(){
    console.log(this.staffGame);
  }
}
