import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListsService } from '../../services/lists.service';
import { NotifierService } from 'src/app/services/notifier.service';

type Nullable<T> = T | null;

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent {
  @Input()
  title: string = '';
  @Input()
  dataQuery: string = '';
  @Input()
  modalReference: Nullable<NgbModalRef> = null;

  public dataToShow: any;

  constructor (
    private _listService: ListsService,
    private _toastr: NotifierService
  ) {}

  ngOnInit(){

    switch(this.dataQuery) {
      case "groups":
        this._listService.getGroups().subscribe(
          (response: any) => {
            this.dataToShow = response
          },
          (error: any) => {
            this._toastr.showError(error.message, 'Algo no ha ido bien...')
          }
        )
        break;
      case "teams":
        this._listService.getTeams().subscribe(
          (response: any) => {
            this.dataToShow = response
          },
          (error: any) => {
            this._toastr.showError(error.message, 'Algo no ha ido bien...')
          }
        )
        break;
      case "players":
        this._listService.getPlayers().subscribe(
          (response: any) => {
            this.dataToShow = response
          },
          (error: any) => {
            this._toastr.showError(error.message, 'Algo no ha ido bien...')
          }
        )
        break;
    }
  }
  public dismissModal() {
    this.modalReference!.close();
  }
}
