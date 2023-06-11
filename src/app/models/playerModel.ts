import { TeamModel } from "./teamModel";

export interface PlayerModel {
    id?: number;
    nif: string;
    name: string;
    phone: string;
    instagram: string;
    want_pics: boolean;
    teamId?: number;
    team?: string;
}