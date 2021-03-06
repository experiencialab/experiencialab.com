import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Bus from "@/components/iconos/bus.vue";
import Corazon from "@/components/iconos/corazon.vue";
import Camion from "@/components/iconos/camion.vue";
import Cohete from "@/components/iconos/cohete.vue";
import Barco from "@/components/iconos/barco.vue";
import Avion from "@/components/iconos/avion.vue";
import S from "@/components/iconos/s.vue";
import M from "@/components/iconos/m.vue";
import XL from "@/components/iconos/xl.vue";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    // ...
  },
  iconfont: "fa",
  icons: {
    values: {
      bus: {
        component: Bus,
      },
      camion: {
        component: Camion,
      },
      cohete: {
        component: Cohete,
      },
      barco: {
        component: Barco,
      },
      avion: {
        component: Avion,
      },
      s: {
        component: S,
      },
      m: {
        component: M,
      },
      xl: {
        component: XL,
      },
      corazon: {
        component: Corazon,
      }
    },
  },
});
