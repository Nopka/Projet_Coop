import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal= new VuexPersistence({
  storage:window.localStorage
})

export default new Vuex.Store({
  plugins:[vuexLocal.plugin],
  state: {
    token : '',
    member : false,
    membres:[],
    conversations:[]
  },
  mutations: {
    setToken(state, token){
      state.token = token
    },
    setMember(state, member){
      state.member = member
    },
    setMembres(state, membres){
      state.membres = membres
    },
    setConversations(state, conversations){
      state.conversations = conversations
    }
  },
  actions: {
  },
  modules: {
  }
})
