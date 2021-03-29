import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    isLogin:false,
    loginState:'登陆'
  },
  mutations:{
    turnIsLogin(state,success){
      state.isLogin = success
      if(state.isLogin)
        state.loginState='注销'
      else
        state.loginState='登陆'

    }
  },
  actions:{
    turnIsLogin(x,success){
      x.commit('turnIsLogin',success)
    }
  }
})

export default store;
