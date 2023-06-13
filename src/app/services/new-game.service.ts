import { Injectable } from '@angular/core';
import { GameModel } from '../models/gameModel';
import { CommonConstants } from '../core/constants/common';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {

  constructor() { }

  public createGame(newGame: GameModel){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(newGame);

    return fetch(CommonConstants.GAME_REGISTER, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
  }
}
