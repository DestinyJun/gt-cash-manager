import axios from 'axios';
import router from '@/router';
import store from '@/store'

// let service = {};
// service = axios.create({
//     timeout: 1000, // 请求超时时间
// });

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = process.env.VUE_APP_URL;
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = process.env.VUE_APP_URL;
}
//设置的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

// 全局设置超时时间
axios.defaults.timeout = 3000;


// console.log(config);
axios.interceptors.request.use((config) => {
    store.dispatch("setLoadingStatus", "showLoading")
    if (config.url.includes('/user/login')) {
        // config.headers.post['appkey'] = localStorage.getItem('appkey');
    } else {
        // config.headers.post['appkey'] = localStorage.getItem('appkey');
    }
   return config;
}, (err) => {
    return Promise.reject(err)
});

// 请求到结果的拦截处理
axios.interceptors.response.use( (config) => {
    // 返回请求正确的结果
    if (config.status  === 200) {
        store.dispatch("setLoadingStatus", "hideLoading")
        // if (config.data.status === 10) {
            return config.data;
        // }
    } else {
        store.dispatch('setLoadingStatus',  'hideLoading' )
        // window.alert('链接服务器失败，请稍后重试！')
        router.push({path: '/error'});  // 进入登陆页面
    }
}, (error) => {
    return Promise.reject(error);
    // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
});

export default axios