import { TeamModel } from "./teamModel";

export interface PlayerModel {
    nif: string;
    player_name: string;
    phone: string;
    instagram: string;
    want_pics: boolean;
    team: TeamModel;
}