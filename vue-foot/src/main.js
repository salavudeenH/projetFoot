import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueAgile from 'vue-agile'
 
Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
