import Vue from 'vue';
import VueRouter from 'vue-router';

import TestView from './views/TestView.vue'
import HelloView from './views/HelloView.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloView',
      component: HelloView,
    },
    {
      path: '/test',
      name: 'TestView',
      component: TestView,
    },
  ]
})
