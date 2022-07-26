import {myAxios} from ".";

export function getGoodsList(paramsList) {
    return myAxios({
        url:"/goods",
        methods: 'GET'
    })
}