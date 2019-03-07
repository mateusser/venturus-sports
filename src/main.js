import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './utils/filters'

Vue.config.productionTip = false

Vue.filter('frequency', filters.frequency)
Vue.filter('dotw', filters.dayOfTheWeek)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
