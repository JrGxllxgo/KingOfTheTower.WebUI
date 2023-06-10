import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GroupModel } from 'src/app/models/groupModel';
import { NewGroupService } from './new-group.service';
import { NotifierService } from 'src/app/services/notifier.service';

type Nullable<T> = T | null;

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {
  public newGroup: GroupModel = {
    name: ''
  }

  @Input()
  modalReference: Nullable<NgbModalRef> = null;

  constructor(
    private _newGroupService: NewGroupService,
    private _toastr: NotifierService
  ) {  }

  public dismissModal(){
    this.modalReference!.close();
  }

  public saveGroup(){
    this._newGroupService.createGroup(this.newGroup)
    .then(response => this.dismissModal())
    .then(result => this._toastr.showSuccess('El grupo se ha guardado con éxito', ' Todo correcto'))
    .catch(error => this._toastr.showError(error, ' Algo no ha ido bien...'));
  }
}
