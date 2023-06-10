import { TeamModel } from "./teamModel";

export interface PlayerModel {
    nif: string;
    name: string;
    phone: string;
    instagram: string;
    want_pics: boolean;
    teamId?: number;
    team?: TeamModel;
}