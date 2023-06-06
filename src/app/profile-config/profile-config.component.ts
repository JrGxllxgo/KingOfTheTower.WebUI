import { Component } from '@angular/core';
import { UserModel } from '../models/userModel';
import { LoginService } from '../services/login.service';
import { ProfileConfigService } from '../services/profile-config.service';

@Component({
  selector: 'app-profile-config',
  templateUrl: './profile-config.component.html',
  styleUrls: ['./profile-config.component.css']
})
export class ProfileConfigComponent {
  public user: UserModel = {} as any;
  public givenUser: UserModel  = {} as any;
  constructor (
    private _loginService:LoginService,
    private _profileService:ProfileConfigService
  ){
    
  }

  ngOnInit(){
    this.dbUserData();
    // this.user.name = this._loginService.getUserObj().given_name;
    // this.user.mail = this._loginService.getUserObj().email;
    // this._profileService.getUserData(this._loginService.getUserObj().email).subscribe(
    //   (response) => {
    //     this.givenUser.mail = response.mail;
    //     console.log(this.givenUser);
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // );
  }

  public dbUserData(){
    this._profileService.getUserDB(this._loginService.getUserObj().email).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        // sessionStorage.removeItem("token");
        
        // let modalRef = this._modalService.open(OkModalComponent);
        // modalRef.componentInstance.title = 'modal.errorLoggedTitle';
        // modalRef.componentInstance.body = 'modal.errorLoggedBody';
        // modalRef.componentInstance.modalReference = modalRef;
        console.log(error)
      }
    );
  }

  submitForm(){
    console.log(this.user);

    alert("Formulario enviado correctamente");
  }
}
