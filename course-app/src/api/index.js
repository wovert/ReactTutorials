/*
 * 项目中所有向服务器发送具体请求的操作写在API中（不写在组件内部，方便请求处理的统一管理）
 * index.js: AXIOS或者FETCH等进行初始处理或者二次封装
 */
import axios from "axios";
import Qs from "qs";

axios.defaults.baseURL = "http://localhost:8000";

// 允许跨域并且允许携带COOKIE
axios.defaults.withCredentials = true;

// 把POST/PUT，通过请求主体传递给服务器的内容，统一处理为 X-WWW-URL-ENCODED 格式
axios.defaults.transformRequest = (data = {}) => Qs.stringify(data);

// 响应拦截器:把服务返回的信息中响应主体内容拦截返回，以后在THEN中获取的结果就是主体内容
axios.interceptors.response.use(result => result.data);

export default axios;
