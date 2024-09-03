import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/Pricing',
    name: 'Pricing',
    component: () => import('../pages/Pricing.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import('../pages/Projects.vue')
  },
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: () => import('../pages/ProjectDetails.vue')
  },
  {
    path: '/Blog',
    name: 'BlogGrid',
    component: () => import('../pages/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'BlogDetails',
    component: () => import('../pages/BlogDetails.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router
