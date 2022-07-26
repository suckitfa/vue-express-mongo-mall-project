import {myAxios} from ".";

export function getGoodsList(params) {
    console.log(params)
    return myAxios({
        url:"/goods",
        methods: 'GET',
        params
    })
}