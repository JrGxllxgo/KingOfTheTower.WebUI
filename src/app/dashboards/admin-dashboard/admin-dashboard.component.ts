import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamModel } from 'src/app/models/teamModel';
import { DataService } from 'src/app/services/data.service';
import { NewGameComponent } from 'src/app/shared/new-game/new-game.component';
import { NewGroupComponent } from 'src/app/shared/new-group/new-group.component';
import { ListModalComponent } from '../list-modal/list-modal.component';
import { LoginService } from 'src/app/services/login.service';
import { LoginModalComponent } from 'src/app/shared/login-modal/login-modal.component';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  public allTeams: TeamModel [] = [];
  public userRole: string = 'base_user'

  constructor(
    private _modalService: NgbModal,
    private _loginService: LoginService,
    private _toastr: NotifierService
  ) { }

  ngOnInit(){
    this.getUser();
    // console.log(this._loginData.userData());
  }

  public getUser(){
    this._loginService.getUserData().subscribe(
      (result: any) => {
        this.userRole = result.role;
      },
      (error: any) => {
        this._toastr.showError(error.message, 'Algo no ha ido bien...');
      }
    );
  }

  public openGameModal(){
    let modalRef = this._modalService.open(NewGameComponent);
    modalRef.componentInstance.modalReference = modalRef;
  }

  public openGroupModal(){
    let modalRef = this._modalService.open(NewGroupComponent);
    modalRef.componentInstance.modalReference = modalRef;
  }

  public openAllGroupModal(){
    let modalRef = this._modalService.open(ListModalComponent);
    modalRef.componentInstance.dataQuery = 'groups';
    modalRef.componentInstance.modalReference = modalRef;
  }

  public openAllTeamModal(){
    let modalRef = this._modalService.open(ListModalComponent);
    modalRef.componentInstance.dataQuery = 'teams';
    modalRef.componentInstance.modalReference = modalRef;
  }

  public openAllPlayersModal(){
    let modalRef = this._modalService.open(ListModalComponent);
    modalRef.componentInstance.dataQuery = 'players';
    modalRef.componentInstance.modalReference = modalRef;
  }
}
