import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Experiencia LAB - Consultoría y Delivery',
    component: Home,
    props: {},
    meta: {
      active: false,
      title: 'Experiencia LAB - Consultoría boutique',
      metaTags: [
          {
            name: 'description',
            content: 'Experiencia Lab - Consultoría boutique'
          },
          {
            property: 'og:description',
            content: 'Somos Experiencia LAB'
          }
        ]
    },
  },
  {
    path: '/experiencias',
    name: 'Experiencias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "experiencias" */ '../views/Experiencias.vue'),
    props: {},
    meta: {
      active: false,
      title: 'Experiencia LAB - Desarrollo ágil de productos digitales',
    }
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue'),
    props: {},
    meta: {
      active: false,
      title: 'Experiencia LAB - Quienes somos',
    }
  },
  {
    path: '/podcast',
    name: 'Podcast',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "podcast" */ '../views/Podcast.vue'),
    props: {},
    meta: {
      active: false,
      title: 'Experiencia LAB - Podcast'
    }
  },
  {
    path: '/terminos-y-condiciones',
    name: 'Terminosycondiciones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "podcast" */ '../views/Terminosycondiciones.vue'),
    props: {},
    meta: {
      active: false,
      title: 'Experiencia LAB - Términos y condiciones'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'is-active',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  from.meta.active = false;
  to.meta.active = true;
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
