import { LoginApi } from "../api/authApi";
import type { loginReq } from "../models/loginModel";


export const loginService = {

    login :(data : loginReq) => {
        const res = LoginApi(data)
        return res;
    }
}