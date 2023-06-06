import { GroupModel } from "./groupModel";

export interface TeamModel {
    team_name: string;
    category: string;
    payed: boolean;
    wins: number;
    defeats: number;
    points_diff: number;
    classification_points: number;
    // group: GroupModel
}