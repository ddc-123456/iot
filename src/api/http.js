import axios from 'axios'
import qs from 'qs'
/*
  根据环境变量区分接口的默认地址
*/
/*switch (process.env.NODE_ENV) {
  // 生产环境
  case 'production':
    axios.defaults.baseURL = '/api'
    break;
  // 测试环境
  case 'test':
    axios.defaults.baseURL = '/api'
    break;
  // 开发环境
  default:
    axios.defaults.baseURL = '/api'
    break;
    // http://10.18.5.173:8080
    // http://192.168.0.2:8080
}*/

/*
  设置超时时间和跨域是否允许携带凭证
*/
// axios.defaults.baseURL = '/api'  /*开发时url*/
axios.defaults.baseURL = '/api'  /*生产时url*/
// axios.defaults.baseURL = 'http://192.168.191.1:8082/api'  /*生产时url*/
// axios.defaults.timeout = 1000000
axios.defaults.withCredentials = true

/*
  设置请求传递数据的格式(看服务器要求什么格式)
  x-www-form-urlencoded
*/
// axios.defaults.headers['Content-Type'] = 'application/json'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = data => qs.stringify(data)

/*
  设置请求拦截器
  TOKEN校验（JWT）：接受服务器返回的token，存储到vuex/本地存储中，
  每一次向服务器发送请求，都要把token带上
*/
axios.interceptors.request.use(config => {
  //携带上token
  let token = localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  return config
}, error => {
  return Promise.reject(error)
})

/*
  响应拦截器
*/
/*axios.defaults.validateStatus = status => {
  // 自定义响应成功的HTTP状态码
  return /^(2|3)\d{2}$/.test(status)
}*/

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  let { response } = error
  if (response) {
    // 服务器有返回结果
    switch (response.status) {
      case 401://=>权限
        break;
      case 403://=>服务器拒绝执行（token过期）
        break;
      case 404://=>找不到页面
        break;
      case 500://=>服务器错误
        break;

    }
  } else {
    // 服务器没有返回结果
    if (!window.navigator.onLine) {
      // 断网处理，可以跳转到断网页面
      return;
    }
    return Promise.reject(error)
  }
})

export default axios;
