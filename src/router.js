import Vue from 'vue';
import VueRouter from 'vue-router';

import PostPage from './views/PostPage.vue'
import NewPostPage from './views/NewPostPage.vue'

import PortfolioPage from './views/PortfolioPage.vue'
import NewPortfolioPage from './views/NewPortfolioPage.vue'

import Main from './views/Main.vue'
import UserProfile from './views/UserProfile.vue'



Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes: [
    {
    path: '/',
    name: 'Main',
    component: Main,
  },
  
  
  {
    path: '/post/:item/',
    name: 'post',
    component: PostPage,
  },
  {
    path: '/post/:item/new/',
    name: 'newpost',
    component: NewPostPage,
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/portfolio/new/',
    name: 'newportfolio',
    component: NewPortfolioPage,
  
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage,
  
  }
  ]
})
