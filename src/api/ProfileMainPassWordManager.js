import axios from './http'

function toChangePassword(t_id, pwd, t_pwd) {
  return axios.post('/profile/updatePwd', {
    t_id,
    pwd,
    t_pwd
  })
}

export default {
  toChangePassword
}
