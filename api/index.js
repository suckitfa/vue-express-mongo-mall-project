import axios  from "axios";
const baseURL = 'http://localhost:3000'
function myAxios(axiosConfig) {
    const service  = axios.create({
        baseURL,
        timeout:1000,
    })
    return service(axiosConfig)
}

export {
    myAxios,
    baseURL
}