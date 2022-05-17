<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100vw;overflow:hidden"
  >
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100%"
    >
      <v-row
        class="ma-0 pa-0 justify-end"
        style="position:relative"
      >
        <v-row
          class="ma-0 pa-0"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:#101010;z-index:1;top:75%;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
          align="center"
          justify="center"
          @click="whatsapp()"
        >
          WHATSAPP <v-icon class="ma-0 ml-7 pa-0" style="transform:scale(1.5)">$camion</v-icon>
        </v-row>
        <v-row
          class="ma-0 mt-1 pa-0"
          style="width:100vw;overflow:hidden"
        >
          <v-img
            contain
            eager
            class="ma-0 pa-0"

            src="fotos/experiencias.jpg"
            style="opacity:.85;color:white"
          >

          </v-img>
        </v-row>
      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-16 mb-16 pa-0"
      style="transform:scale(1);background-color:#F2F2F2"
      justify="center"
    >
      <v-row
        class="ma-0 mt-8 ml-16 pa-0"
        style="width:100%;font-size:25px;font-weight:300;color:#101010"
      >
        EN QUÉ ESTAMOS
      </v-row>
      <v-row
        class="ma-0 my-10 pa-0"
        style="width:100%"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
        data-aos-once="false"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-img
            contain
            eager
            style="opacity:.85;z-index:10;min-width:100%"
            class="ma-0 pa-0"
            max-height="200px"
            max-width="200px"
            src="mocks/LAB_HDC.webp"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 mt-4 pa-0"
          style="width:100%;font-weight:bold"
          justify="center"
        >
          Hogar de Cristo – Dirección Social
        </v-row>
        <v-row
          class="ma-0 mx-6 mt-6 pa-0 text-left"
        >
          El contexto social, económico y político de hoy ha generado nuevas vulnerabilidades, específicamente las personas en situación de calle aumentan y experimentan problemáticas urgentes. En experienciaLAB estamos trabajando en conjunto al equipo de Hogar de Cristo para tangibilizar soluciones digitales al servicio de esta realidad.
        </v-row>
      </v-row>
      <v-row
        class="ma-0 my-10 pa-0"
        style="width:100%"
        justify="center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
        data-aos-once="false"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-img
            contain
            eager
            style="opacity:.85;z-index:10;min-width:100%"
            class="ma-0 pa-0"
            max-height="150px"
            max-width="150px"
            src="mocks/hkhumancapital mockup.webp"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 mt-4 pa-0"
          style="width:100%;font-weight:bold"
          justify="center"
        >
          HK Human Capital – Executive Search
        </v-row>
        <v-row
          class="ma-0 mx-6 mt-6 pa-0 text-left"
        >
          Estamos colaborando con el equipo de  HK en la aceleración de su transformación digital, poniendo en el centro de nuestro quehacer las expectativas de sus usuarios, clientes, la naturaleza evolutiva del negocio y las múltiples oportunidades que nos impone el entorno tecnológico emergente.
        </v-row>
        <a class="ma-0 mt-3 pa-0" href="https://www.hkhumancapital.cl/">www.hkhumancapital.cl</a>
      </v-row>
      <v-row
        class="ma-0 my-10 pa-0"
        style="width:100%"
        justify="center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
        data-aos-once="false"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-img
            contain
            eager
            style="opacity:.85;z-index:10;min-width:100%"
            class="ma-0 pa-0"
            max-height="180px"
            max-width="180px"
            src="mocks/LAB-Copeuch.webp"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 mt-4 pa-0"
          style="width:100%;font-weight:bold"
          justify="center"
        >
          Coopeuch – Institución Financiera Cooperativa
        </v-row>
        <v-row
          class="ma-0 mx-6 mt-6 pa-0 text-left"
        >
          Estamos asesorando al equipo de Coopeuch en la estrategia de tangibilización de la experiencia digital que viven sus socios, con el propósito de favorecer  la vinculación hacia sus servicios claves e interacciones libres de fricciones.
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw"
      v-for="experiencia in $store.state.experiencias"  :key="experiencia.index"
      align="center"
    >
      <v-row
        class="ma-0 mt-16 mb-16 pa-0"
        style="width:100vw"
        justify="center"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100vw"
          justify="center"
          align="center"
        >
          <v-spacer></v-spacer>
          <v-img
            contain
            eager
            style="opacity:.85;z-index:10"
            class="ma-0 pa-0"
            max-height="100"
            max-width="200"
            :src="experiencia.logo"
          >
          </v-img>
          <v-spacer></v-spacer>
          <v-icon v-if="experiencia.index == 0" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
          <v-icon v-if="experiencia.index == 1" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
          <v-icon v-if="experiencia.index == 2" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
          <v-icon v-if="experiencia.index == 3" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 4" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 5" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
          <v-icon v-if="experiencia.index == 6" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 7" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 8" class="ma-0 ml-5 mr-5  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
        </v-row>
        <v-row
          class="ma-0 mt-5 pa-0"
          style="width:100%"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="0"
          data-aos-once="false"
        >
          <v-img
            eager
            position=""
            style="opacity:.85"
            contain
            :src="experiencia.mock"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:45vw;z-index:100"
        >
          <v-row
            class="ma-0 pa-0 align-stretch"

          >
            <v-row
              class="ma-0 ml-5 mr-12 pa-0"
              style="width:100%;font-family:Space Grotesk"
              v-for="dex in 2" :key="dex"
            >
              <span v-html="experiencia.text[dex - 1]"></span>
            </v-row>
            <v-row
              class="ma-0 ml-5 mr-12 pa-0"
              style="width:100%;font-family:Space Grotesk"
              v-for="dex in $store.state.experiencias.length"  :key="dex + 100"
            >
              <span v-if="experiencia.extend" v-html="experiencia.text[dex + 1]"></span>
            </v-row>
            <v-row
              class="ma-0 mt-10 pa-0"
              align="center"
            >
              <v-row
                v-if="experiencia.web"
                class="ma-0 ml-5 pa-0"
              >
                <a style="text-decoration:none;font-weight:bold" :href="experiencia.web" target="_blank">Ver plataforma digital</a><br><br>
              </v-row>
              <v-spacer></v-spacer>
              <v-icon @click="$store.commit('extending', experiencia.index)" v-if="experiencia.text.length > 2 && !experiencia.extend" color="#101010" medium class="ma-0 mr-10 mb-5 mr-12 pa-0">mdi-plus</v-icon>
              <v-icon @click="$store.commit('extending', experiencia.index)" v-if="experiencia.text.length > 2 && experiencia.extend" color="#101010" medium class="ma-0 mr-10 mb-5 mr-12 pa-0">mdi-minus</v-icon>
            </v-row>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 mt-10 mx-5 pa-0 d-none"
          style="width:100%;font-size:17px;font-family:Space Grotesk;font-weight:300"
          v-for="text in experiencia.text"  :key="text"
        >
          <p>
            <span v-html="text"></span>
          </p>
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 mb-16 pa-0"
      style="width:100vw"
      align="center"
    >
      <v-row
        class="ma-0 mt-3 mb-5 mx-5 pa-0 logo"
        v-for="(logo,index) in this.logos" :key="index"
        align="center"
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
        >
          <v-img
            style="opacity:0.8"
            eager
            max-height="111"
            max-width="79"
            :src="logo"
          ></v-img>
        </v-row>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      logos: []
    }),
    components: {
    },
    created() {
      var logos = this.$store.state.logos;
      this.logos = logos.sort(function() {return 0.5 - Math.random()});
    },
    methods: {
      whatsapp: function () {
        window.open("https://wa.me/+56994319115", "_blank");
      },
      spotify: function () {
        window.open("https://open.spotify.com/show/50FARDnK33AjV42wtNbq38?si=V-8U9kkiQuSI54pq2tOAbg&dl_branch=1", "_blank");
      }
    }
  }
</script>

<style lang="sass">
  .pod:hover
    cursor: pointer
</style>
