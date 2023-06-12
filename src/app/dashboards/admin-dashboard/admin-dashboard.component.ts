import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamModel } from 'src/app/models/teamModel';
import { NewGameComponent } from 'src/app/shared/new-game/new-game.component';
import { NewGroupComponent } from 'src/app/shared/new-group/new-group.component';
import { ListModalComponent } from '../list-modal/list-modal.component';
import { NotifierService } from 'src/app/services/notifier.service';
import { ListsService } from 'src/app/services/lists.service';
import { UserModel } from 'src/app/models/userModel';
import { NewStaffModalComponent } from 'src/app/shared/new-staff-modal/new-staff-modal.component';
import { NewStaffService } from 'src/app/services/new-staff.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  public allTeams: TeamModel [] = [];
  public staffMembers: UserModel [] = [];
  public userRole: string = 'base_user'

  constructor(
    private _modalService: NgbModal,
    private _listService: ListsService,
    private _toastr: NotifierService,
    private _staffService: NewStaffService
  ) { }

  ngOnInit(){
    this.getStaffList();
  }

  // Method that show all staff data
  public getStaffList(){
    this._listService.getStaff().subscribe(
      (data: any) => {
        this.staffMembers = data;
        this._toastr.showSuccess('Se han recuperado los datos correctamente')
      },
      (error: any) => {
        this._toastr.showError(error)
      }
    )
  }

  public deleteStaff(staffMail: string | undefined){
    this._staffService.deleteStaff(staffMail)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
  }

  public openNewStaffModal(){
    let modalRef = this._modalService.open(NewStaffModalComponent);
    modalRef.componentInstance.modalReference = modalRef;
  }
  // Method to open the modal that creates a new game
  public openGameModal(){
    let modalRef = this._modalService.open(NewGameComponent);
    modalRef.componentInstance.modalReference = modalRef;
  }
  // Method to open the modal that creates a new group
  public openGroupModal(){
    let modalRef = this._modalService.open(NewGroupComponent);
    modalRef.componentInstance.modalReference = modalRef;
  }
  // Method to open the modal that shows all groups names
  public openAllGroupModal(){
    let modalRef = this._modalService.open(ListModalComponent);
    modalRef.componentInstance.dataQuery = 'groups';
    modalRef.componentInstance.modalReference = modalRef;
  }
  // Method to open the modal that shows all teams names
  public openAllTeamModal(){
    let modalRef = this._modalService.open(ListModalComponent);
    modalRef.componentInstance.dataQuery = 'teams';
    modalRef.componentInstance.modalReference = modalRef;
  }
  // Method to open the modal that shows all players names
  public openAllPlayersModal(){
    let modalRef = this._modalService.open(ListModalComponent);
    modalRef.componentInstance.dataQuery = 'players';
    modalRef.componentInstance.modalReference = modalRef;
  }
}
