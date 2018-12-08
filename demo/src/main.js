import Vue from 'vue'
import Meta from 'vue-meta'
import VueApexCharts from 'vue-apexcharts'
import VeeValidate from 'vee-validate'
import Notifications from 'vue-notification'
import App from './App.vue'
import router from './router'
import Board from '../../src/board'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VeeValidate, { inject: false })
Vue.use(VueApexCharts)
Vue.use(Notifications)
Vue.component('VueApexCharts', VueApexCharts)

Vue.use(Meta, {
  keyName: 'head'
})
Vue.use(Board)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
