import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel';
import { CommonConstants } from '../core/constants/common';

@Injectable({
  providedIn: 'root'
})
export class NewStaffService {

  constructor() { }

  public createStaff(newStaff: UserModel){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(newStaff);

    return fetch(CommonConstants.USER_REGISTER, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
  }

  public deleteStaff(staffMail: string | undefined){
    return fetch(CommonConstants.USER_DELETE + staffMail, {
      method: 'DELETE',
      redirect: 'follow'
    })
  }
}
