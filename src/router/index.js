import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';


import ForumView from '@/views/ForumView.vue';
import FriendView from '@/views/FriendView.vue';
import MineView from '@/views/MineView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import NotFound from '@/views/NotFound.vue';

import TestView from '@/views/TestView.vue';


const routes = [

  {
    path: '/',
    name: 'mine',
    component: MineView,
    meta: { requiresAuth: true }
  },
  {
    path: '/friend',
    name: 'friend',
    component: FriendView,
    meta: { requiresAuth: true }
  },
  {
    path: '/forum',
    name: 'forum',
    component: ForumView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { guestOnly: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { guestOnly: true }
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound,
  },

]


const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const isLogin = store.state.is_login;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin) {
      next('/login');
    } else {
      next();
    }
  }
  else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLogin) {
      next('/');
    } else {
      next();
    }
  }
  else {
    next();
  }
});


export default router
