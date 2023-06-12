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
      .then(async response => {
        if (response.ok){
          this.dismissModal();
        } else if (response.status == 500){          
          let errorMessage = await response.text();
          this._toastr.showError(errorMessage, ' Algo no ha ido bien...')
        }
      })
      .then(result => this._toastr.showSuccess('El partido se ha guardado con éxito', ' Todo correcto'))
      .catch(error => this._toastr.showError(error, ' Algo no ha ido bien...'));
    }
  }
}
