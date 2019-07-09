import Vue from 'vue';
import VueRouter from 'vue-router';

import PostPage from './views/PostPage.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/post/:item',
      name: 'post',
      component: PostPage,
    },
  ]
})
