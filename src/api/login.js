import axios from './http'
import md5 from 'blueimp-md5'

/*登录请求*/
function login(t_id, t_pwd) {
  return axios.post('/account/tlogin',{
    t_id,
    t_pwd
  })
}

export default {
  login
}
