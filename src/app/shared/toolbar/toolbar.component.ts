import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  public userObj:any = {};
  private logText: string = '';
  
  constructor(
    private _modalService: NgbModal,
    private _router: Router
  ){}

  private openLogInModal(){
    let modalRef = this._modalService.open(LoginModalComponent);
    modalRef.componentInstance.modalReference = modalRef;
  }

  private logout(){
    sessionStorage.removeItem("token");
    this._router.navigateByUrl('/');
  }

  public logSession(){
    if(sessionStorage.length != 0){
      this.logout();
    }else{
      this.openLogInModal();
    }
  }

  public setLogText(): string{
    if(sessionStorage.length != 0){
      this.logText = 'toolbarDropdown.logOut'
    }else{
      this.logText = 'toolbarDropdown.logInLink'
    }
    return this.logText;
  }
}
