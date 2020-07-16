import axios from './http'

/*请求老师列表*/
function getTeachersProfile() {
  return axios.get('/TeacherElegant/findAll')
}

/*请求教师风采的轮播图*/
function getSwiperPictureAndIntroduction() {
  return axios.get('/TeacherElegant/show')
}

export default {
  getTeachersProfile,
  getSwiperPictureAndIntroduction
}
