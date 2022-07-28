import {myAxios} from ".";

export function getGoodsList(params) {
    return myAxios({
        url:"/goods",
        methods: 'GET',
        params
    })
}

export function addToCart(productId) {
    return myAxios({
        url:"/goods/addCart",
        method:'POST',
        data:{productId}
    })
}