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

// 
export function doToggleCheckAll(checkAll) {
    return myAxios({
        url:"/users/editCheckAll",
        method:"POST",
        data:{checkAll}
    });
}

// 获取用户的地址列表
export function doGetAddressList() {
    return myAxios({
        url:"/users/addressList",
        method:"GET",
    })
}

// 设置默认地址
export function doSetDefaultAddress(addressId) {
    return myAxios({
        url:"/users/setDefault",
        method:"POST",
        data: {addressId}
    });
}

// 删除地址
export function doDelAddress(addressId) {
    return myAxios({
        url:"/users/delAddress",
        method:"POST",
        data:{addressId}
    })
}

// 生成订单
export function doPayMent({addressId,orderTotal}){
    return myAxios({
        url:"/users/payMent",
        method:"POST",
        data: {addressId,orderTotal}
    });
}

// 获取订单详情
export function doGetOrderDetail(orderId) {
    return myAxios({
        url:"/users/orderDetail",
        method:"GET",
        params:{orderId}
    })
}