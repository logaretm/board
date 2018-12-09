import Vue from 'vue'
import Meta from 'vue-meta'
import VueApexCharts from 'vue-apexcharts'
import VeeValidate from 'vee-validate'
import Notifications from 'vue-notification'
import Layout from './layout'
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
  render: h => h(App),
  watch: {
    $route: {
      immediate: true,
      handler (val) {
        const matched = [...val.matched].pop()
        if (!matched) {
          this.setLayout('default')
          return
        }

        this.setLayout(matched.components.default.layout || 'default')
      }
    }
  },
  methods: {
    setLayout (val) {
      Layout.layout = val
    }
  }
}).$mount('#app')
