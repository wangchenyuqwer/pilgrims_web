import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
// import './assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css';

import mWrapper from "components/wrapper"

Vue.config.productionTip = false

Vue.prototype.themeColor = '#3E92FE';

Vue.use(Element, {
  // size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.component('mWrapper', mWrapper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
