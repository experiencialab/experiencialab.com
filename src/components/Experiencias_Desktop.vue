<template>
  <v-row
    class="ma-0 pa-0"
    style="max-width:100vw;min-width:100vw"
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
          class="ma-0 mr-3 pa-0 pod"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;top:50%;width:250px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
          align="center"
          justify="center"
          @click="whatsapp"
        >
          <p class="ma-0 ml-5 pa-0">WHATSAPP</p> <v-icon class="ma-0 ml-12 mr-5 pa-0" size="40">$camion</v-icon>
        </v-row>

        <v-row
          class="ma-0 pa-0"
          style="width:100vw"
        >
          <v-row
            class="ma-0 mx-5 pa-0"
            style="overflow:hidden;height:56vh"
          >
            <v-img
              class="ma-0 pa-0"
              max-width="100vw"
              height="56vh"
              src="fotos/experiencias.jpg"
              style="color:white"
              position="center top 30%"
            >

            </v-img>
            <v-row
              class="ma-0 pa-0 pb-8"
              style="z-index:1;position:absolute;max-width:75%;height:56vh"
              align="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="font-size:60px;line-height:65px;font-family:Space Grotesk;font-weight:600;width:100vw"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;height:70%"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="max-width:100%"
                  >
                    <p class="ma-0 ml-16 pa-0" style="color:white;max-width:800px;text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Adaptamos la experiencia al tamaño de las necesidades de cualquier organización</p>
                  </v-row>
                </v-row>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-16 mb-16 pa-0"
        style="width:100vw"
        v-for="experiencia in $store.state.experiencias"  :key="experiencia.index"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:55vw"
        >
          <v-row
            class="ma-0 pa-0 d-none"
            style="width:100%;height:100px"
          >
            <v-spacer></v-spacer>


          </v-row>
          <v-row
            class="ma-0 mt-n16 pa-0"
            style="width:100%"
          >
            <v-img
              eager
              position=""
              contain
              :src="experiencia.mock"
            ></v-img>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:45vw;z-index:100"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;height:120px"
            align="center"
          >
            <v-img
              eager
              style="z-index:10"
              class="ma-0 pa-0"
              max-height="100"
              max-width="200"
              :src="experiencia.logo"
            ></v-img>
            <v-icon v-if="experiencia.index == 0" class="ma-0 ml-12 mr-5 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
            <v-icon v-if="experiencia.index == 1" class="ma-0 ml-12 mr-5 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
            <v-icon v-if="experiencia.index == 2" class="ma-0 ml-12 mr-5 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
            <v-icon v-if="experiencia.index == 3" class="ma-0 ml-12 mr-5 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
            <v-icon v-if="experiencia.index == 4" class="ma-0 ml-12 mr-5 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
            <v-icon v-if="experiencia.index == 5" class="ma-0 ml-12 mr-5 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
            <v-icon v-if="experiencia.index == 6" class="ma-0 ml-12 mr-5 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
          </v-row>
          <v-row
            class="d-flex ma-0 pa-0 align-stretch"
            style="min-height:350px"
          >
            <v-row
              class="ma-0 ml-5 mr-12 pa-0"
              style="width:100%;font-family:Space Grotesk"
              v-for="dex in 2" :key="dex"
            >
              <span v-html="experiencia.text[dex - 1]"></span>
            </v-row>
            <v-row
              v-if="experiencia.extend"
              class="ma-0 ml-5 mr-12 pa-0"
              style="width:100%;font-family:Space Grotesk"
              v-for="dex in $store.state.experiencias.length"  :key="dex"
            >
              <span v-html="experiencia.text[dex + 1]"></span>
              <v-spacer vertical></v-spacer>
            </v-row>
            <v-row
              class="ma-0 pa-0"
              align="center"
            >
              <v-spacer></v-spacer>
              <v-icon @click="$store.commit('extending', experiencia.index)" v-if="experiencia.text.length > 2 && !experiencia.extend" color="black" medium class="ma-0 mr-10 mb-5 mr-12 pa-0">mdi-plus</v-icon>
              <v-icon @click="$store.commit('extending', experiencia.index)" v-if="experiencia.text.length > 2 && experiencia.extend" color="black" medium class="ma-0 mr-10 mb-5 mr-12 pa-0">mdi-minus</v-icon>
            </v-row>
          </v-row>
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
    components: {},
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
      },
      site: function (link) {
        window.open(link, "_blank");
      }
    }
  }
</script>


<style lang="sass">
  .tlarge
    font-size: 1000px
  .highlight span
    color: #ADFFFF
  .historia span
    font-weight: 700
  .pod:hover
    cursor: pointer

</style>
