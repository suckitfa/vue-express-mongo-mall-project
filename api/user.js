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

export function getCartList() {
    return myAxios({
        url:"/users/cartList",
        method:'GET'
    })
}

export function doDelCart(productId) {
    return myAxios({
        url:"/users/delCart",
        method:"POST",
        data: {productId}
    })
}