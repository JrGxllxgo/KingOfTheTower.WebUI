import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameModel } from 'src/app/models/gameModel';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { ModGameModalComponent } from 'src/app/shared/mod-game-modal/mod-game-modal.component';

@Component({
  selector: 'app-staff-dashboards',
  templateUrl: './staff-dashboards.component.html',
  styleUrls: ['./staff-dashboards.component.css']
})
export class StaffDashboardsComponent {
  public staffGames: GameModel[] = [];
  public gameSelected: number = 0; 

  constructor(
    private _loginService: LoginService,
    private _toastr: NotifierService,
    private _dataService: DataService,
    private _modalService: NgbModal
  ){}

  ngOnInit(){
    this.getStaffGames();
  }
  
  public openResultGameModal(gameSelected: GameModel) {
    let modalRef = this._modalService.open(ModGameModalComponent);
    modalRef.componentInstance.staffGame = gameSelected;
    modalRef.componentInstance.modalReference = modalRef;
  }

  private getGames(id: number){
    this._dataService.getGamesStaff(id).subscribe(
      (data: any) => {
        this.staffGames = data;
      },
      (error) => {
        this._toastr.showError('Hubo un problema con el usuario', 'Error')
      }
    )
  }

  private getStaffGames(){
    this._loginService.getUserData().subscribe(
      (data: any) => {
        this.getGames(data.id);
      },
      (error) => {
        this._toastr.showError('Hubo un problema con el usuario', 'Error')
      }
    )
  }
}
