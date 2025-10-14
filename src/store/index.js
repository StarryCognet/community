import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createVuexAlong from 'vuex-along'
// import{checkloginByCode}from '@/api/administrator.js'

export default new Vuex.Store({
  state: {
    menu:[],
    token:null
  },
  getters: {
    getTopMenu(state) {
      return state.menu.filter( (item) => item.pid == 0 && item.postion == 'top' );
    }
  },
  mutations: {
    setMenu(state,menu){
      state.menu=menu;
    },
    setToken(state,token){
      state.token=token;
    }
  },
  actions: {
    async loginAsync(context,logininfo){
      
      // 将menu和token保存到vuex中
      context.commit("setMenu",logininfo.menu);
      context.commit("setToken",logininfo.token);
       
      
    }
  },
  modules: {
  },
  plugins: [
    createVuexAlong()
  ]
})
