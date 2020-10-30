import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios) 

export default new Vuex.Store({
   // data ()
  state: {
    message:'Hello from store',
    links:[
      'www.quickresume.com',
      'www.google.com',
      'www.youtube.com',
      'www.facebook.com'
    ]
  },
  // computed ()
  getters:{
    linksCount: (state) => {
      return state.links.length
    }
  },
   // methods ()
  mutations: {
    ADD_LINK: (state, payload) => {
      state.links.push(payload)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = []
    }
  },
   // used to trigger methods asynchronously ()
  actions: {
    //USE THIS
    removeAll:(context) => {
      context.commit('REMOVE_ALL')
    },
    /*
    removeAllLinks: ({commit}) => {
      return new Promise((resolve) => {
        setTimeout(()=>{
          commit('REMOVE_ALL')
          resolve()
        },1500)
      })
    }, */
    removeAllLinks:(context)=>{
      return new Promise((resolve) =>{
        setTimeout(()=>{
          context.commit('REMOVE_ALL')
          resolve()
        },1500)
      })
    }
  },

  modules: {
  }
})
