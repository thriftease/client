import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/dashboard/Inbox'
  },
  {
    path: '/dashboard/:id',
    component: () => import('@/views/DashboardPage.vue'),
    children: [
      {
        path: "",
        component: () => import('@/views/dashboard/ContentPage.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
