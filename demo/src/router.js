import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from './views/PageNotFound'

Vue.use(Router)

const requireComponent = require.context('./pages', true, /\.(vue)$/)

const loadPageAsync = (page) => () => import(`./pages/${page}.vue`)

const routes = requireComponent.keys().map(fileName => {
  const componentPath = fileName.replace('./', '').split('.').shift()
  let path = `/${componentPath}`
  if (path.indexOf('index') !== -1) {
    path = path.replace('index', '')
  }

  return {
    path,
    component: loadPageAsync(componentPath)
  }
})

routes.push({
  path: '*',
  component: PageNotFound
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
