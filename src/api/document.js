import axios from './http'

/**
 * getCourseSet  获取教学计划表数据
 * downLoadFile  文件下载
 * UploadFile    文件上传
 */
function getCourseSet() {
  return axios.get('/courseSet/find_all')
}

function downLoadFile(id) {
  return axios({
    method: 'get',
    url: '/courseSet/download',
    params: {
      id
    },
    responseType: 'blob'
  })
}

function UploadFile(fromData, getComplete) {
  return axios.post('/courseSet/fileupload', fromData, {
    headers: {
      "Content-Type": "multipart/form-data;charset=UTF-8"
    },
    onUploadProgress: function (progressEvent) {
      let complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
      getComplete(complete)
    }
  })
}

function getPreview(id) {
  return axios({
    method: 'get',
    url: '/courseSet/preview_word',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    params: {
      id
    }
  })
}

function fetchList(data) {

  return axios({
    url: '/courseSet/pagelist',
    method: 'post',
    data
  })
}

function fetchTalentDocument() {
  return axios({
    url: '/talents/depAndVer',
    method: 'get'
  })
}

function fetchSearch(data) {
  return axios({
    url: '/talents/findTalents',
    method: 'post',
    data
  })
}

function postAddClass(data) {
  return axios({
    url: '/talents/add',
    method: 'post',
    data
  })
}


export default {
  getCourseSet,
  downLoadFile,
  UploadFile,
  getPreview,
  fetchList,
  fetchTalentDocument,
  fetchSearch,
  postAddClass
}
