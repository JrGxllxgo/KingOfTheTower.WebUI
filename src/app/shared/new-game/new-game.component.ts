import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonConstants } from 'src/app/core/constants/common';
import { GameModel } from 'src/app/models/gameModel';
import { GroupModel } from 'src/app/models/groupModel';
import { TeamModel } from 'src/app/models/teamModel';
import { UserModel } from 'src/app/models/userModel';
import { ListsService } from 'src/app/services/lists.service';
import { NewGameService } from 'src/app/services/new-game.service';
import { NotifierService } from 'src/app/services/notifier.service';

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
  public staff: UserModel [] = [];
  public groupSelected: string = '';
  public showGameForm: boolean = false;
  public newGame: GameModel  ={
    team1Id: 0,
    team2Id: 0,
    score1: 0,
    score2: 0,
    court: 1,
    schedule: new Date(),
    staffId: 0
  }

  constructor(
    private _listService:ListsService,
    private _toastr: NotifierService,
    private _gameService: NewGameService
  ) { }

  ngOnInit(){
    this.getAllSelectData();
  }

  public getAllSelectData(){
    this._listService.getStaff().subscribe(
      (data:any) => {
        this.staff = data;
      }
    )
    this._listService.getGroups().subscribe(
      (result: any) => {
        this.groups = result;
      }
    );
    
  }

  public selectGroup(){
    this._listService.getTeamsByGroup(this.groupSelected).subscribe(
      (data: any) => {
        this.teams = data;
      }
    )
    this.showGameForm = true;
  }

  public dismissModal(){
    this.modalReference!.close();
  }

  public createGame(){
    if(this.newGame.team1Id == this.newGame.team2Id){
      this._toastr.showError('El equipo no puede jugar contra sí mismo', 'Error en los datos introducidos')
    }else{      
      console.log(this.newGame)
      this._gameService.createGame(this.newGame)
      .then(response => this.dismissModal())
      .then(result => this._toastr.showSuccess('El partido se ha guardado con éxito', ' Todo correcto'))
      .catch(error => this._toastr.showError(error, ' Algo no ha ido bien...'));
    }
  }
}
