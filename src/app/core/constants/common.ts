import { environment } from "src/environments/environment";

export class CommonConstants {
    public static DEFAULT_LANGUAGE: string = 'en';
    public static FRONT_VERSION: string = 'v.2023.05.27';
    public static GOOGLE_LOG_API: string = '450842705465-9gf1q4fafo27b77r6odp78rk0h1v5rsp.apps.googleusercontent.com'
    
    public static USER_REGISTER: string =
        environment.baseUrl + 'api/Users/register';
}