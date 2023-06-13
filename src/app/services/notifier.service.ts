import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor( private _toastr:ToastrService ) { }

  public async showSuccess(body: string){
    this._toastr.success('Todo ha ido correctamente...', body)
  }

  public showError(body: string){
    this._toastr.error('Algo no ha ido bien...', body);
  }

  public showWarning(body: string){
    this._toastr.warning('Atención!', body);
  }
}
