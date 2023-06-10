import { Component, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { LoginService } from 'src/app/services/login.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  public userRole: string = 'base_user';
  private logText: string = '';
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _modalService: NgbModal,
    private _loginService: LoginService,
    private _toastr: NotifierService,
    private _location: Location
  ){}

  async ngOnInit(){
    await this._loginService.getUserData().subscribe(
      (data: any) => {
        // console.log(data.role);
        this.userRole = data.role;
      },
      (error: any) => {
        this._toastr.showError(error, 'Algo no ha ido bien...');
      }
    )
  }
  
  private openLogInModal(){
    let modalRef = this._modalService.open(LoginModalComponent);
    modalRef.componentInstance.modalReference = modalRef;
  }

  private logout(){
    sessionStorage.removeItem("token");
    this.userRole = 'base_user'
    this.document.location.href = this.document.location.href;
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
      this.logText = 'toolbarDropdown.logOut';
    }else{
      this.logText = 'toolbarDropdown.logInLink';
    }
    return this.logText;
  }
}
