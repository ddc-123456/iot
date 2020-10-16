import axios from './http'
/**
 * getCourseSet  获取教学计划表数据
 * downLoadFile  文件下载
 * UploadFile    文件上传
 */
function getCourseSet () {
  return axios.get('/courseSet/find_all')
}
function downLoadFile (id) {
  return axios({
    method: 'get',
    url: '/courseSet/download',
    params: {
      id
    },
    responseType: 'blob'
  })
}
function UploadFile (fromData) {
  return axios.post('/courseSet/fileupload', fromData, {
    headers: {
      "Content-Type": "multipart/form-data;charset=UTF-8"
    }
  })
}
export default {
  getCourseSet,
  downLoadFile,
  UploadFile
}