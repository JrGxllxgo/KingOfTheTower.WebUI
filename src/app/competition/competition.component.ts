import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NotifierService } from '../services/notifier.service';
import { GameModel } from '../models/gameModel';
import { GroupModel } from '../models/groupModel';
import { CommonConstants } from '../core/constants/common';
import { TeamModel } from '../models/teamModel';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent {
  public games1: GameModel[] = [];
  public games2: GameModel[] = [];
  public games3: GameModel[] = [];
  public games4: GameModel[] = [];

  public classMA: TeamModel[] = [];
  public classMB: TeamModel[] = [];
  public classMC: TeamModel[] = [];
  public classFA: TeamModel[] = [];
  public classFB: TeamModel[] = [];

  public teams: TeamModel[] = [];
  public groups: GroupModel[] = [];

  constructor( 
    private _dataService: DataService,
    private _listService: ListsService,
    private _toastr: NotifierService 
  ) {}

  ngOnInit(){
    for(let i = 1; i <= CommonConstants.COURTS.length; i++){
      this.getGames(i);
    }

    this.getClass();
  }

  // Call to the service to get all games per court
  private getGames(court: number){
    this._dataService.getGames(court).subscribe(
      (data: any) => {
        switch (court){
          case 1:
            this.games1 = data
            break;
          case 2:
            this.games2 = data
            break;
          case 3:
            this.games3 = data
            break;
          case 4:
            this.games4 = data
            break;
        }
      },
      (error: any) => {
        this._toastr.showError(error)
      }
      )
  }

  // Call to the service to get groups classiffication
  private getClass()  {
    this._listService.getTeams().subscribe(
      (data: any) => { 
        this.teams = data;

        this.teams.forEach(element => {
          if(!this.groups.find(g => g.id == element.group?.id) && element.group){
            this.groups.push(element.group);
          }
          this.teams.filter(t => t.group?.id == 1)
        });
      }
    )
  }
}
