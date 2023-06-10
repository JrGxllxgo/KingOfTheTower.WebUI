import { PlayerModel } from "./playerModel";

export interface UserModel {
    id?: number;
    name: string;
    mail: string;
    role: string;
    playerId?: number,
    Player?: PlayerModel;
}