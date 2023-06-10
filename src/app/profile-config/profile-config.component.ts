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
  ){ }

  ngAfterContentInit(){
    this.dbUserData();
  }

  public dbUserData(){

    this._profileService.getUserDB(this._loginService.getUserObj().email).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
