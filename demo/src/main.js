import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App.vue'
import router from './router'
import Board from '../../src/board'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Meta, {
  keyName: 'head'
})
Vue.use(Board)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
