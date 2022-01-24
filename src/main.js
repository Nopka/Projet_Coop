import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$api = axios.create({
  baseURL : 'https://allweb.fun/coop/api/',
  params:{},
  headers : {'Authorization' : '4bb68d18cec736a6c29efe9f824ee71d8de975b5'}
});
Vue.prototype.$api.interceptors.request.use(function(config) {
  if (store.state.token) {
    config.params.token = store.state.token;
  }
  return config;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
