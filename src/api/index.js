import axios from './http'

function getIndexData() {
  return axios.post('/home/getHot');
}

export default {
  getIndexData
}
