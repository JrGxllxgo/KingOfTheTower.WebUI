import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonConstants } from 'src/app/core/constants/common';
import { GameModel } from 'src/app/models/gameModel';
import { GroupModel } from 'src/app/models/groupModel';
import { TeamModel } from 'src/app/models/teamModel';
import { DataService } from 'src/app/services/data.service';
import { ListsService } from 'src/app/services/lists.service';

type Nullable<T> = T | null;

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @Input()
  modalReference: Nullable<NgbModalRef> = null;
  public courts = CommonConstants.COURTS;
  public groups: GroupModel[] = []
  public teams: TeamModel[] = [];
  public teams2: TeamModel[] = [];
  public newGame: GameModel  ={
    team1Id: 0,
    team2Id: 0,
    score1: 0,
    score2: 0,
    pitch: 1,
    schedule: new Date(),
    staffId: 0
  }

  constructor(
    private _listService:ListsService
  ) { }

  ngOnInit(){
    this._listService.getGroups().subscribe(
      (result: any) => {
        this.groups = result
      }
    );
    this._listService.getTeams().subscribe(
      (data: any) => {
        this.teams = data;
        this.teams2 = data;
      }
    )
  }

  public dismissModal(){
    this.modalReference!.close();
  }

  public createGame(){
    console.log(this.newGame)
  }
}
