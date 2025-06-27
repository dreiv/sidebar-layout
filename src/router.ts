import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/about',
      name: 'about-explicit',
      redirect: { name: 'about' },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/ServicesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/ContactView.vue'),
    },
    // Keep these routes for direct access, but sidebar navigation will use query params
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/files',
      name: 'files',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('./views/AboutView.vue'),
    },
  ],
})

export default router
