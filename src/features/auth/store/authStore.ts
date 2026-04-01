import { create } from "zustand";
import { loginService } from "../service/authServices";
import type { loginReq } from "../models/loginModel";

type LogState = {
    user : any | null ,
    token : String | null,
    login : (data : loginReq) => any,
    logout : () => void
}

export const useLoginState = create<LogState>((set) => ({
    user :null , 
    token : null ,

    login :(data : loginReq)  =>  {
        try {
            const res = loginService.login(data);
            set({
                user:{
                    id : res.user.id,
                    role : res.user.role
                },
                token : res.token , 
            }),
            console.log(data)
            return res
        } catch (error) {
            console.log(error)
        }
        
    },
    logout() {
    },
}))