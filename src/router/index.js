import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/about.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../pages/products.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../pages/services.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../pages/contacts.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
