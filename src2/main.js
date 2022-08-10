import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import customIndex from './views/customIndex'
Vue.config.productionTip = false

import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.component('customIndex',customIndex)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
