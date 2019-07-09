import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { router } from './router.js'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'



Vue.config.productionTip = false
Vue.use(VueSimplemde)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
