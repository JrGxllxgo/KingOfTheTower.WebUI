import { environment } from "src/environments/environment";

export class CommonConstants {
    public static DEFAULT_LANGUAGE: string = 'es';
    public static FRONT_VERSION: string = 'v.2023.05.27';
    public static GOOGLE_LOG_API: string = '450842705465-9gf1q4fafo27b77r6odp78rk0h1v5rsp.apps.googleusercontent.com'
    public static COURTS: number[] = [1,2,3,4];
    
    public static USER_REGISTER: string =
        environment.baseUrl + 'api/Users/register';
    public static USER_INFORMATION: string =
        environment.baseUrl + 'api/Users/getUserByEmail/';
    public static USER_BY_ROLE: string =
        environment.baseUrl + 'api/Users/getUserByRole/'
    public static USERS: string =
        environment.baseUrl + 'api/Users/getAllUsers';
    public static USER_DELETE: string = 
        environment.baseUrl + 'api/Users/'

    public static TEAM_REGISTER: string =
        environment.baseUrl + 'api/Teams/register';
    public static TEAMS: string =
        environment.baseUrl + 'api/Teams/getAllTeams';
    public static TEAMS_BY_GROUP: string =
        environment.baseUrl + 'api/Teams/getTeamByGroup/';

    public static GROUP_REGISTER: string =
        environment.baseUrl + 'api/Groups/register';
    public static GROUPS: string =
        environment.baseUrl + 'api/Groups/getAllGroups'

    public static PLAYERS: string = 
        environment.baseUrl + 'api/Players/getAllPlayers';

    public static GAME_REGISTER: string =
        environment.baseUrl + 'api/Games/register';
    public static GAMES_BY_COURT: string = 
        environment.baseUrl + 'api/Games/getGameByCourt/';
}