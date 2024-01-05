import { useAuthStore } from '@/stores';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// meta.authed === undefined (accessible)
// meta.authed === true (accessible only if signed in)
// meta.authed === false (accessible only if not signed in)

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/dashboard/Inbox'
  },
  {
    path: '/auth',
    meta: { authed: false },
    component: () => import('@/views/AuthPage.vue'),
    children: [
      {
        path: "sign-in",
        name: "auth-sign-in",
        component: () => import('@/views/auth/SignInPage.vue'),
      },
      {
        path: "sign-up",
        name: "auth-sign-up",
        component: () => import('@/views/auth/SignUpPage.vue'),
      },
    ]
  },
  {
    path: '/dashboard/:id',
    component: () => import('@/views/DashboardPage.vue'),
    children: [
      {
        path: "",
        name: "dashboard",
        meta: { authed: true },
        component: () => import('@/views/dashboard/ContentPage.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

let skipAuthCheck = false;

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (skipAuthCheck) {
    skipAuthCheck = false;
    return next();
  }

  const authedRedirection = { name: "dashboard", params: { id: "Inbox" } };
  const notAuthedRedirection = { name: "auth-sign-in" };
  await authStore.verify();

  if (to.matched.some((record) => record.meta.authed === true)) {
    if (!authStore.signedIn) {
      skipAuthCheck = true;
      return next(notAuthedRedirection);
    }
  } else if (to.matched.some((record) => record.meta.authed === false)) {
    if (authStore.signedIn) {
      skipAuthCheck = true;
      return next(authedRedirection);
    }
  }
  next();
});

export default router;
