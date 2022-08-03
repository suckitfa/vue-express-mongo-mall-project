import axios  from "axios";
const baseURL = 'http://localhost:3000'
function myAxios(axiosConfig) {
    const service  = axios.create({
        baseURL,
        timeout:1000,
        // 携带cookie发送请求
        withCredentials:true,
    })
    return service(axiosConfig)
}

export {
    myAxios,
    baseURL
}