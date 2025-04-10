import type { RouteRecordRaw } from 'vue-router'
import VwUserAgreement from '@/pages/PgAbout/views/VwUserAgreement.vue'
import VwUserPrivacyNotice from '@/pages/PgAbout/views/VwUserPrivacyNotice.vue'
import PgHome from '@/pages/PgHome/PgHome.vue'
import PgSignin from '@/pages/PgSignin/PgSignin.vue'
import { authGuard } from './guards/authGuard'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    beforeEnter: authGuard,
    component: PgHome,
    meta: { label: 'Dashboard', icon: 'i-lucide-home' },
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/about/user-agreement',
    beforeEnter: authGuard,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/PgAbout/PgAbout.vue'),
    meta: { label: 'About', icon: 'i-lucide-info' },
    children: [
      {
        name: 'userAgreement',
        path: 'user-agreement',
        component: VwUserAgreement,
        meta: { label: 'User Agreement', icon: 'i-lucide-file-check' },
      },
      {
        name: 'userPrivacyNotice',
        path: 'user-privacy-notice',
        component: VwUserPrivacyNotice,
        meta: { label: 'User Privacy Notice', icon: 'i-lucide-book-open-text' },
      },
    ],
  },
  {
    path: '/signin',
    name: 'signin',
    component: PgSignin,
    meta: { label: 'Signin', icon: 'i-lucide-circle-user-round' },
  },
]
