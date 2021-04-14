import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Bus from "@/components/bus.vue";
import Corazon from "@/components/corazon.vue";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    // ...
  },
  iconfont: "fa",
  icons: {
    values: {
      bus: { // name of our custom icon
        component: Bus, // our custom component
      },
      corazon: { // name of our custom icon
        component: Corazon, // our custom component
      }
    },
  },
});
