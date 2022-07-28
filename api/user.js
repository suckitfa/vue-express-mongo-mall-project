import { myAxios } from ".";

export function login({userName,userPwd}) {
    return myAxios( {
        url:"/users/login",
        method:"POST",
        data:{userName,userPwd}
    })
}