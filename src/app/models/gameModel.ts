export interface GameModel {
    id?: number;
    team1Id: number;
    team2Id: number;
    score1: number;
    score2: number;
    court: number;
    schedule: Date;
    staffId: number;
}