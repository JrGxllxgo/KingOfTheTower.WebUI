import { Component, Inject, Input } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { CommonConstants } from 'src/app/core/constants/common';
import { OkModalComponent } from '../ok-modal/ok-modal.component';
import { NotifierService } from 'src/app/services/notifier.service';
import { DOCUMENT } from '@angular/common';

type Nullable<T> = T | null;
declare var google:any

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent {
  public user: any;
  public loggedIn: any;

  @Input()
  modalReference: Nullable<NgbModalRef> = null;
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _loginService: LoginService,
    private _router: Router,
    private _toastr: NotifierService
  ){}
  
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: CommonConstants.GOOGLE_LOG_API,
      callback: this.handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
  }

  //Method to close the modal
  public dismissModal(){
    this.modalReference!.close();
  }

  private handleCredentialResponse = (response: any) => {
    if(response.credential){
      sessionStorage.setItem("token", response.credential);
      this._router.navigateByUrl('/');
      this.logUser();
      this.dismissModal();
    }
  }

  private logUser(){
    if(sessionStorage.length !== 0){
      
      let userModel = {} as UserModel;
      userModel.name = this._loginService.getUserObj().given_name;
      userModel.mail = this._loginService.getUserObj().email;
      userModel.role = 'base_user';

       this._loginService.setRegister(userModel)
        .then (response => {
          this.user = response.json();
        } )
        .then(result => {
          this._toastr.showSuccess('Has iniciado sesión correctamente!', ' Todo correcto');
          this.document.location.href = this.document.location.href;
        })
        .catch(error => this.errorLog(error))
      }
  }

  private errorLog(error: any){
    sessionStorage.removeItem("token");
    this._toastr.showError(error, ' Algo no ha ido bien...')
  }
}
