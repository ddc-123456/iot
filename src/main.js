import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/api'
import store from './store'

import ElementUI from 'element-ui'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$api = api
// Vue.prototype.$url = 'http://120.78.153.151:8080/ssm/'  /*生产时url*/
Vue.prototype.$url = '/api' /*开发时url*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
