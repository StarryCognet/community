// 使用promise 封装axios
import axios from 'axios';
import { Message } from 'element-ui';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.baseURL=process.env.VUE_APP_API_BASE_URL;
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status==200){
        if(response.data.errcode==!'10000'){
            Message.error(response.data.errMsg);
            return Promise.reject(response.data.errMsg);
        }
        return response.data;
    }
    return response;
}, function (error) {
    if(error.code=='ECONNABORTED'){
        Message.error('网络错误');
    }
    // console.log('error',error);
    
    // 对响应错误做点什么
    return Promise.reject(error);
});
export const http = (url, params = {}, data = {}, method = "get") => {
    return new Promise((reslove, reject) => {
        axios({
            method,
            url,
            data,
            params,
        }).then(response => {
            reslove(response)
        }).catch(error => {
            reject(error)
        });
    });
};
export const get = (url, params = {}) => {
    return http(url, params, {}, 'get')
};
export const post = (url, data = {}, params = {}) => {
    return http(url, params, data, 'post')
};

