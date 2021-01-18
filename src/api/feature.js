import axios from './http'

function fetchFeatureList() {
  return axios({
    url: '/specialty/getspecialty',
    method: 'get'
  })
}

export default {
  fetchFeatureList
}
