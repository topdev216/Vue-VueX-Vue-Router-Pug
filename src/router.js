import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route level code-splitting
// this generates a separate chunk (dashboard.[hash].js) for this route
// which is lazy-loaded when the route is visited.
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      redirect: '/dashboard/weight'
    },
    {
      path: '/dashboard',
      redirect: '/dashboard/weight',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/coach/dashboard/dashboard.vue'),
      children: [
        {
          path: 'weight',
          name: 'weight',
          component: () => import('./views/coach/dashboard/weight.vue')
        },
        {
          path: 'bmi',
          name: 'bmi',
          component: () => import('./views/coach/dashboard/bmi.vue')
        },
        {
          path: 'engagement',
          name: 'engagement',
          component: () => import('./views/coach/dashboard/engagement.vue')
        },
        {
          path: 'education',
          name: 'education',
          component: () => import('./views/coach/dashboard/education.vue')
        },
        {
          path: 'well-being',
          name: 'wellbeing',
          component: () => import('./views/coach/dashboard/wellBeing.vue')
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('./views/coach/dashboard/feedback.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('./views/coach/dashboard/profile.vue')
        }
      ]
    },
    {
      path: '/calls',
      name: 'calls',
      component: () => import('./views/coach/calls/calls.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('./views/coach/messages/messages.vue')
    },
    {
      path: '/wall',
      name: 'wall',
      component: () => import('./views/coach/wall/wall.vue')
    },
    {
      path: '/program',
      redirect: '/program/phase-1',
      name: 'program',
      component: () => import('./views/coach/program/program.vue'),
      children: [
        {
          path: 'phase-1',
          name: 'phase-1',
          component: () => import('./views/coach/program/phase-1.vue')
        },
        {
          path: 'phase-2',
          name: 'phase-2',
          component: () => import('./views/coach/program/phase-2.vue')
        },
        {
          path: 'phase-3',
          name: 'phase-3',
          component: () => import('./views/coach/program/phase-3.vue')
        },
        {
          path: 'phase-4',
          name: 'phase-4',
          component: () => import('./views/coach/program/phase-4.vue')
        }
      ]
    },
    {
      path: '/toolkit',
      name: 'toolkit',
      component: () => import('./views/coach/toolkit/toolkit.vue')
    }
  ]
})
