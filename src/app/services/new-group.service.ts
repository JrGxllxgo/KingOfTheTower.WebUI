import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/core/constants/common';
import { GroupModel } from 'src/app/models/groupModel';

@Injectable({
  providedIn: 'root'
})
export class NewGroupService {

  constructor() { }

  public createGroup(newGroup: GroupModel){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(newGroup);

    return fetch(CommonConstants.GROUP_REGISTER, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
  }
}
