import Vue from 'vue'
import Vuex from 'vuex'

//安装Vuex

Vue.use(Vuex)

//创建对象

export default new Vuex.Store({

  state: {
    token: '',
    t_name: '',
    t_picture: 'file/icon/0.jpg', /*默认头像以防报错*/
    isShowOfUserBox: false/*用户头像名字显示状态*/
  },
  mutations: {
    //方法
    setToken(state, token) {
      state.token = token
    },
    setName(state, t_name) {
      state.t_name = t_name
    },
    setIcon(state, t_picture) {
      state.t_picture = t_picture
    },
    setShowOfUserBox(state, isShowOfUserBox) {
      state.isShowOfUserBox = isShowOfUserBox
    }
  },
  actions: {},
  getters: {},
  modules: {}
})
