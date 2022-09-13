<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100vw;overflow:hidden"
    justify="center"
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
      style="max-width:100vw;transform:scale(1);border-top: 1px solid #101010;border-bottom: 1px solid #101010;height:600px"
      justify="center"
    >
      <v-row
        class="ma-0 mt-16 pa-0"
        style="width:100%;font-size:25px;font-weight:300;color:#101010"
        justify="center"
      >
        EN QUÉ ESTAMOS
      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="max-height:100vw;margin-top:-200px !important"
        align="center"
        justify="center"
      >
        <v-row
          v-for="ongoing in $store.state.ongoings" :key="ongoing.index"
          class="ma-0 pa-0"
          style="max-width:50vw;height:100%"
          align="center"
          justify="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="margin-top:-100px !important;width:100%;height:100%;font-weight:bold"
            align="center"
            justify="center"
          >
            <v-img
              contain
              eager
              style="z-index:10;opacity:.85"
              class="ma-0 pa-0"
              min-height="120px"
              max-height="120px"
              width="100%"
              :src="ongoing.image"
            ></v-img>
            <v-row
              class="ma-0 pa-0 mt-n6 text-center"
              style="max-width:90%"
              align="center"
              justify="center"
            >
              {{ ongoing.nombre }}
            </v-row>
            <v-row
              class="ma-0 mt-n6 pa-0"
              style="font-weight:normal;min-width:80%;max-width:80%;font-size:15px;height:130px"
              align="center"
            >
              <v-row
                class="ma-0 pa-0 text-left"
                style="width:100%"
                justify="center"
              >
                <p
                  class="ma-0 pa-0 text-left"
                  style="max-width:100%"
                >
                  {{ ongoing.text }}
                </p>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw"
      v-for="experiencia in $store.state.experiencias"  :key="experiencia.index"
      align="center"
      justify="center"
    >
      <v-row
        class="ma-0 mt-16 mb-16 pa-0"
        style="width:100vw"
        justify="center"
        align="center"
        data-aos="fade-up"
        data-aos-duration="1300"
        data-aos-delay="0"
        data-aos-once="false"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100vw"
          justify="center"
          align="center"
        >
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
          <v-icon v-if="experiencia.index == 0" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
          <v-icon v-if="experiencia.index == 1" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
          <v-icon v-if="experiencia.index == 2" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
          <v-icon v-if="experiencia.index == 3" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 4" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 5" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
          <v-icon v-if="experiencia.index == 6" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 7" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          <v-icon v-if="experiencia.index == 8" class="ma-0 ml-5 mr-10  pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
          <v-icon v-if="experiencia.index == 9" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
          <v-icon v-if="experiencia.index == 10" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
        </v-row>
        <v-row
          class="ma-0 mt-n5 pa-0"
          style="width:100%"
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
              class="ma-0 ml-10 mr-12 pa-0"
              style="width:100%;font-family:Space Grotesk"
              v-for="dex in 2" :key="dex"
            >
              <span v-html="experiencia.text[dex - 1]"></span>
            </v-row>
            <v-row
              class="ma-0 ml-10 mr-12 pa-0"
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
                class="ma-0 ml-10 pa-0"
              >
                <a style="color:black;text-decoration:none;font-weight:bold" :href="experiencia.web" target="_blank">Ver plataforma digital</a><br><br>
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
      style="margin-bottom:120px !important;max-width:90vw"
      align="center"
      justify="center"
    >
      <v-row
        v-for="logo in this.logos" :key="logo"
        class="ma-0 pa-0"
        style="height:80px;max-width:33%;min-width:33%"
        align="center"
        justify="center"
      >
        <v-img
          style="opacity:0.75"
          class="ma-0 mt-3 pa-0"
          eager
          max-height="110"
          max-width="90px"
          :src="logo"
        ></v-img>
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
