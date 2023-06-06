import { TeamModel } from "./teamModel";
import { UserModel } from "./userModel";

export interface GameModel {
    team1: TeamModel;
    team2: TeamModel;
    score1: number;
    score2: number;
    pitch: number;
    schedule: Date;
    staff: UserModel;
}