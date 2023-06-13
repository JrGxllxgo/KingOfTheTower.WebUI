import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModGameService {

  constructor() { }

  public modGame(id:number, score1: number, score2: number){
    console.log(id + score1 + score2);
    return fetch("http://localhost:44373/api/Games/" + id + "/" +score1 + "/" + score2, {
      method: 'PUT',
      redirect: 'follow'
    })
  }
}
