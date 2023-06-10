import { GroupModel } from "./groupModel";

export interface TeamModel {
    name: string;
    category: string;
    pay: boolean;
    wins: number;
    defeats: number;
    points_diff: number;
    classification_points: number;
    group?: GroupModel
}