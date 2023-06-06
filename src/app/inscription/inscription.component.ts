import { Component } from '@angular/core';
import { TeamModel } from '../models/teamModel';
import { InscriptionService } from './inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  public selectedOption: string = 'teamData';
  public newTeam: TeamModel | undefined;

  constructor (private _inscriptionService: InscriptionService) {
    
  }
  
  // Method to check if is any user logged
  public checkUserLog(): boolean{
    var userLogged: boolean = false;
    
    if(sessionStorage.length > 0){
      userLogged = true;
    }

    return userLogged
  }
}
