import axios from './http'

/*请求教师个人资料*/
function getTeacherProfile(t_id) {
return axios.get('/TeacherElegant/findOneTea',{
  params:{
    t_id
  }
})
}

export default {
  getTeacherProfile
}
