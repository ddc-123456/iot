import axios from './http'

/*每次刷新时登陆状态验证*/
function checkLogin() {
  return axios.get('/account/iflogin')
}

export default {
  checkLogin
}
