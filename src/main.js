import Vue from 'vue'
import vuetify from './plugins/vuetify'
import store from './store/index.js'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
