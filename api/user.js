import { myAxios } from ".";

export function login({userName,userPwd}) {
    return myAxios( {
        url:"/users/login",
        method:"POST",
        data:{userName,userPwd}
    })
}

export function logout() {
    return myAxios({
        url:"/users/logout",
        method:"POST"
    })
}