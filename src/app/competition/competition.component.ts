import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NotifierService } from '../services/notifier.service';
import { GameModel } from '../models/gameModel';
import { GroupModel } from '../models/groupModel';
import { CommonConstants } from '../core/constants/common';

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

  constructor( 
    private _dataService: DataService,
    private _toastr: NotifierService 
  ) {}

  ngOnInit(){
    for(let i = 1; i <= CommonConstants.COURTS.length; i++){
      this.getGames(i);
    }
  }

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
        this._toastr.showError(error, 'Algo no ha salido bien...')
      }
      )
  }
}
