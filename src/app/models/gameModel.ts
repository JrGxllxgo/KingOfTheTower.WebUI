import { TeamModel } from "./teamModel";

export interface GameModel {
    id: number;
    team1Id: number;
    team1: TeamModel;
    team2Id: number;
    team2: TeamModel;
    score1: number;
    score2: number;
    court: number;
    schedule: Date;
    staffId: number;
}