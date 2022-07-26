import axios from 'axios'
import QS from 'qs'
import {Toast} from 'vant'

// 环境的切换
const env = process.env.NODE_ENV
if ( env === 'development') {
    axios.defaults.baseURL = 'http://localhost:3000'
} else if (env === 'debug') {
    axios.defaults.baseURL = 'http://localhost:3000'
} else if (env === 'production') {
    axios.defaults.baseURL = 'http://localhost:3000'
}
axios.defaults.timeout = 1000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
