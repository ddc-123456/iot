import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/api'
import store from './store'
import ElementUI from 'element-ui'
//import Mock from "./common/mock";


const anime = require('animejs/lib/anime');


Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$bus = new Vue()
Vue.prototype.$anime = anime

// Vue.prototype.$url = 'http://10.18.5.173:8080/'  /*生产时url*/
Vue.prototype.$url = '/api' /*开发时url*/
Vue.prototype.$baseUrl = 'http://10.18.1.41:8080' /*开发时url*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
