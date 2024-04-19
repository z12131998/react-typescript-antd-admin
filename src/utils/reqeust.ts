//此工具用于封装一层axios，对code等做额外的解析
import axios from "axios";
//创建一个axios示例
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API, // api 的 base_url
    timeout: 5000, // request timeout
});


//请求拦截
service.interceptors.request.use(
    //前置处理器
    (config) => {
        console.log('发起请求:', config.headers.url)
        return config;
    },
    //错误拦截
    (error) =>{
        console.log('发起请求异常:', error)
    }
)

service.interceptors.response.use(
    (response) => {
        console.log(response);
        const code = response.data.code;
        if (code === 200){
            console.log("成功");
        }else{
            console.log("失败");
        }
        return response;
    }
)
export default service;