import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import FeedList from '../components/Feeds/FeedList.vue';
import FeedItem from '../components/Feeds/FeedItem.vue';

import store from '../store';
import users from '../assets/data/mock-data.json';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/feeds',
    name: 'Feeds',
    component: FeedList
  },
  {
    path: '/feeds/:feedId',
    name: 'FeedItem',
    component: FeedItem
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  },
]

const router = createRouter({
  history:  createWebHistory(), //createWebHashHistory(),
  routes
})


// Router Guards
router.beforeEach(async (to, from, next) => {
    const user = store.state.User.user;

    if(!user) {
      await store.dispatch('User/setUser', users[0]);
    }

    const isAdmin = false;
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  
    if (requiresAdmin && !isAdmin)
      next({ name: 'Home' });
    else next();
  })

export default router
