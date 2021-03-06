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
      path: '/wall-create',
      name: 'wall-create',
      component: () => import('./views/coach/wall/wall-create.vue')
    },
    {
      path: '/wall-edit',
      name: 'wall-edit',
      component: () => import('./views/coach/wall/wall-edit.vue')
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
      path: '/program-inside',
      redirect: '/program-inside/step-1',
      name: 'program-inside',
      component: () => import('./views/coach/program/program-inside.vue'),
      children: [
        {
          path: 'step-1',
          name: 'step-1',
          component: () => import('./views/coach/program/step-1.vue')
        },
        {
          path: 'step-2',
          name: 'step-2',
          component: () => import('./views/coach/program/step-2.vue')
        },
        {
          path: 'step-3',
          name: 'step-3',
          component: () => import('./views/coach/program/step-3.vue')
        },
        {
          path: 'step-4',
          name: 'step-4',
          component: () => import('./views/coach/program/step-4.vue')
        },
        {
          path: 'step-5',
          name: 'step-5',
          component: () => import('./views/coach/program/step-5.vue')
        },
        {
          path: 'step-6',
          name: 'step-6',
          component: () => import('./views/coach/program/step-6.vue')
        },
        {
          path: 'step-7',
          name: 'step-7',
          component: () => import('./views/coach/program/step-7.vue')
        }
      ]
    },
    {
      path: '/toolkit',
      redirect: '/toolkit/phase-1',
      name: 'toolkit',
      component: () => import('./views/coach/toolkit/toolkit.vue'),
      children: [
        {
          path: 'phase-1',
          name: 'phase-1',
          component: () => import('./views/coach/toolkit/phase-1.vue')
        },
        {
          path: 'phase-2',
          name: 'phase-2',
          component: () => import('./views/coach/toolkit/phase-2.vue')
        },
        {
          path: 'phase-3',
          name: 'phase-3',
          component: () => import('./views/coach/toolkit/phase-3.vue')
        },
        {
          path: 'phase-4',
          name: 'phase-4',
          component: () => import('./views/coach/toolkit/phase-4.vue')
        }
      ]
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('./views/coach/calendar/calendar.vue')
    },
    {
      path: '/profile',
      redirect: '/profile/editProfile',
      name: 'profile',
      component: () => import('./views/coach/profile/profile.vue'),
      children: [
        {
          path: 'editProfile',
          name: 'editProfile',
          component: () => import('./views/coach/profile/editProfile.vue')
        },
        {
          path: 'changePassword',
          name: 'changePassword',
          component: () => import('./views/coach/profile/changePassword.vue')
        }
      ]
    }
  ]
})
