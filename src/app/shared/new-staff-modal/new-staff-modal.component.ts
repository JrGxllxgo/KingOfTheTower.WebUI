import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from 'src/app/models/userModel';
import { NewStaffService } from 'src/app/services/new-staff.service';
import { NotifierService } from 'src/app/services/notifier.service';

type Nullable<T> = T | null;

@Component({
  selector: 'app-new-staff-modal',
  templateUrl: './new-staff-modal.component.html',
  styleUrls: ['./new-staff-modal.component.css']
})
export class NewStaffModalComponent {
  @Input()
  modalReference: Nullable<NgbModalRef> = null;

  public newStaff: UserModel = {
    name: '',
    mail: '',
    role: 'staff'
  }

  constructor(
    private _toastr: NotifierService,
    private _staffService: NewStaffService
  ) {}

  public dismissModal(){
    this.modalReference!.close();
  }

  public saveStaff(){
    this._staffService.createStaff(this.newStaff)
    .then(response => this.dismissModal())
    .then(result => this._toastr.showSuccess('El usuario se ha guardado con éxito'))
    .catch(error => this._toastr.showError(error));
  }
}
