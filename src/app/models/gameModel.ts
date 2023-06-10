import { TeamModel } from "./teamModel";
import { UserModel } from "./userModel";

export interface GameModel {
    id?: number;
    team1Id: number;
    team2Id: number;
    score1: number;
    score2: number;
    pitch: number;
    schedule: Date;
    staffId: number;
}