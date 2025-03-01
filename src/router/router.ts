import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/dashboard/DashboardView.vue') },
  { path: '/show/:id', component: () => import('../views/show/ShowView.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../views/not-found/NotFoundView.vue') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
