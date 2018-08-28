import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/app.scss'
import VueSVGIcon from 'vue-svgicon'
import '@/assets/icons'

Vue.config.productionTip = false

Vue.use(VueSVGIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
