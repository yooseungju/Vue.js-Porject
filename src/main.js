import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { router } from './router.js'
import VueSimplemde from 'vue-simplemde'
import ChartPlugin from './plugins/ChartPlugin.js';
import 'simplemde/dist/simplemde.min.css'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(VueSimplemde);
Vue.use(ChartPlugin);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
