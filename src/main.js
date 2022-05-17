import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as VueAos from 'vue-aos'

Vue.use(VueAos)
Vue.use(VueTelInputVuetify, {
  vuetify,
});

Vue.config.productionTip = false

new Vue({
  data: { loading: false },
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted() {
    AOS.init()
  }
}).$mount('#app')
