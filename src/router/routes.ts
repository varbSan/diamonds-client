import type { RouteRecordRaw } from 'vue-router'
import VwPrivacyPolicy from '@/pages/PgAbout/views/VwPrivacyPolicy.vue'
import VwTermsOfService from '@/pages/PgAbout/views/VwTermsOfService.vue'
import PgHome from '@/pages/PgHome/PgHome.vue'
import VwCreateQuote from '@/pages/PgHome/views/VwCreateQuote.vue'
import VwUploadQuotes from '@/pages/PgHome/views/VwUploadQuotes.vue'
import PgSignin from '@/pages/PgSignin/PgSignin.vue'
import { authGuard } from './guards/authGuard'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/create-quote',
    beforeEnter: authGuard,
    component: PgHome,
    meta: { label: 'Dashboard', icon: 'i-lucide-home' },
    children: [
      {
        name: 'createQuote',
        path: 'create-quote',
        component: VwCreateQuote,
        meta: { label: 'Create Quote', icon: 'i-lucide-square-pen' },
      },
      {
        name: 'uploadQuotes',
        path: 'upload-quotes',
        component: VwUploadQuotes,
        meta: { label: 'Upload Quotes', icon: 'i-lucide-upload' },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/about/user-agreement',
    beforeEnter: authGuard,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/PgAbout/PgAbout.vue'),
    meta: { label: 'About', icon: 'i-lucide-info' },
    children: [
      {
        name: 'userAgreement',
        path: 'user-agreement',
        component: VwTermsOfService,
        meta: { label: 'Terms of Service', icon: 'i-lucide-file-check' },
      },
      {
        name: 'userPrivacyNotice',
        path: 'user-privacy-notice',
        component: VwPrivacyPolicy,
        meta: { label: 'Privacy Policy', icon: 'i-lucide-book-open-text' },
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
