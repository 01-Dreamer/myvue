import { createRouter, createWebHistory } from 'vue-router'


import ForumView from '@/views/ForumView.vue';
import FriendView from '@/views/FriendView.vue';
import MineView from '@/views/MineView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import NotFound from '@/views/NotFound.vue';


const routes = [

  {
    path: '/',
    name: 'mine',
    component: MineView,
  },
  {
    path: '/friend',
    name: 'friend',
    component: FriendView,
  },
  {
    path: '/forum',
    name: 'forum',
    component: ForumView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
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

export default router
