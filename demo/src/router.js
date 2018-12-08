import Vue from 'vue'
import Router from 'vue-router'
// import Home from './pages/index.vue'

Vue.use(Router)

// const requireFolder = (path) => {
//   return require.context(path, false, /\.(vue)$/)
// }

// const isDir = (fileName) => !fileName.test(/\.vue$/)

// function mapRoutes (path, context) {
//   const routes = [];
//   if (isDir(path)) {
//     requireFolder)
//   }

//   const pathName = fileName.replace('./', '').split('.').shift()

//   const route = {
//     path: pathName

//   }
// }

const requireComponent = require.context('./pages', true, /\.(vue)$/)

const loadPageAsync = (page) => () => import(`./pages/${page}.vue`)

const routes = requireComponent.keys().map(path => {
  const pathName = path.replace('./', '').split('.').shift()
  let isIndex = false
  if (pathName.endsWith('index.vue')) {
    isIndex = true
  }

  console.log('loading: ', `./pages/${pathName}.vue`, `/${pathName.replace('index', '')}`)

  return {
    path: isIndex ? `/${pathName.replace('index', '')}` : `/${pathName}`,
    component: loadPageAsync(pathName)
  }
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
