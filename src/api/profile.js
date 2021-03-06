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

function BatchExport(formData, getComplete) {
  return axios.post('/profile/upload', formData, {
    headers: {
      "Content-Type": "multipart/form-data;charset=UTF-8"
    },
    onUploadProgress: function (progressEvent) {
      let complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + "%"
      getComplete(complete)
    }
  })
}

function toChangePassword(t_id, pwd, t_pwd) {
  return axios.post('/profile/updatePwd', {
    t_id,
    pwd,
    t_pwd
  })
}

function sendIcon(t_id, base64, getComplete) {
  return axios.post('/account/icon', {
    t_id,
    base64
  }, {
    onUploadProgress: function (progressEvent) {
      let complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
      getComplete(complete)
    }
  })
}

function getTeacherProfileList(t_id) {
  return axios.get('/profile/setting', {
    params: {
      t_id
    }
  })
}

/*ChangeHomePage:删除表格选中项，id是唯一标识*/
function deleteChoose(multipleSelection) {
  /*自定义键，后端的奇怪需求*/
  let key = multipleSelection[0].table
  return axios.post('/profile/deleteProfile', {
    [key]: multipleSelection
  })
}

/*ChangeHomePage:编辑完成提交数据*/
function insertProfile(row) {
  let key = row.table
  return axios.post('/profile/insertProfile', {
    [key]: row
  })
}

export default {
  sendIcon,
  getTeacherProfile,
  postProfile,
  BatchExport,
  toChangePassword,
  getTeacherProfileList,
  deleteChoose,
  insertProfile
}
