import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {},
    meta: { active: false }
  },
  {
    path: '/experiencias',
    name: 'Experiencias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Experiencias.vue'),
    props: {},
    meta: { active: false }
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue'),
    props: {},
    meta: { active: false }
  },
  {
    path: '/podcast',
    name: 'Podcast',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Experiencias.vue'),
    props: {},
    meta: { active: false }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  from.meta.active = false;
  to.meta.active = true;
  console.log(to.meta.active);
  next()
})

export default router
