import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Board from '../../src/board'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Board)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
