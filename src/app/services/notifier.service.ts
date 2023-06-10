import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor( private _toastr:ToastrService ) { }

  public async showSuccess(title: string, body: string){
    this._toastr.success(title, body)
  }

  public showError(title: string, body: string){
    this._toastr.error(title, body);
  }

  public showWarning(title: string, body: string){
    this._toastr.warning(title, body);
  }
}
