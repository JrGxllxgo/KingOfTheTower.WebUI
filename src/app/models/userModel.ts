import { PlayerModel } from "./playerModel";

export interface UserModel {
    id: number;
    name: string;
    mail: string;
    role: 'base_user';
    Player?: PlayerModel;
}