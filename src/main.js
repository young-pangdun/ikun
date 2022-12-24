import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入字体
import '@/assets/font/font.css'

// 按需引入element ui
import '@/plugins/element.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
