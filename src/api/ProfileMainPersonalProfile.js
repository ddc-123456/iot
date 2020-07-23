import axios from './http'

function getTeacherProfile(t_id) {
  return axios.post('/profile/teaProfile', {
    t_id
  })
}

function postProfile(t_name, t_sex, t_id, t_birthday, t_email, t_phone, t_education, t_post, t_degree, t_stationt_, t_title, t_department, specialtyName) {
  return axios.post('/profile/updateProfile', {
    t_name,
    t_sex,
    t_id,
    t_birthday,
    t_email,
    t_phone,
    t_education,
    t_post,
    t_degree,
    t_stationt_,
    t_title,
    t_department,
    specialtyName
  })
}

function BatchExport(formData,getComplete) {
  return axios.post('/profile/upload', formData, {
    headers: {
      "Content-Type": "multipart/form-data;charset=UTF-8"
    },
    onUploadProgress: function (progressEvent) {
      let complete = (progressEvent.loaded  / progressEvent.total * 100 | 0) + "%"
      getComplete(complete)
    }
  })
}

export default {
  getTeacherProfile,
  postProfile,
  BatchExport
}
