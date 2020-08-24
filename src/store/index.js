import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message:'Hello from store',
    links:[
      'www.quickresume.com',
      'www.google.com',
      'www.youtube.com',
      'www.facebook.com'
    ]
  },
  getters:{
    linksCount: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    }
  },
  actions: {
  },
  modules: {
  }
})
