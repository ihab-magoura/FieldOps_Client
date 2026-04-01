import type { loginReq, loginRes } from "../models/loginModel";

export const LoginApi = (data : loginReq) : loginRes => {
if (data.email != 'sohaib' && data.password != '123456789') {
    console.log('fuck you')
     const res : loginRes = {
        token : 'null',
        user : {
            id  :'N/A', 
            role : 'N/A'
        }
    }
    return res;
}else{
    const res : loginRes = {
        token : '----',
        user : {
            id  :'1', 
            role : 'Admin'
        }
    }
    return res;
}
}