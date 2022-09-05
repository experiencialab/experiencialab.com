<template>
  <v-row
    class="ma-0 pa-0"
    style="max-width:100vw;min-width:100vw"
  >
    <v-row
      class="ma-0 mt-12 pa-0"
      style="width:100%"
    >
      <v-row
        class="ma-0 pa-0 justify-end"
        style="position:relative"
      >
        <v-row
          class="ma-0 mr-3 mt-5 pa-0 pod"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:#101010;z-index:1;top:60%;width:250px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
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
            style="overflow:hidden;height:66vh"
          >
            <v-img

              eager
              class="ma-0 pa-0"
              max-width="100vw"
              height="66vh"
              src="fotos/experiencias.jpg"
              style="color:white;opacity:0.8"
              position="center top 30%"
            >

            </v-img>
            <v-row
              class="ma-0 pa-0 pb-8"
              style="z-index:1;position:absolute;max-width:75%;height:56vh"
              align="center"
            >
              <v-row
                class="ma-0 mt-n5 pa-0"
                style="font-size:50px;line-height:50px;font-family:Space Grotesk;font-weight:600;width:100vw"
                align="center"
              >
                <v-row
                  class="ma-0 mt-12 ml-12 pa-0"
                  style="width:100%;height:70%"
                  align="center"
                >
                  <v-row
                    class="ma-0 mt-16 pa-0"
                    style="max-width:80%"
                  >
                    <p class="ma-0 pa-0" style="color:white;max-width:1200px;text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Adaptamos la experiencia al tamaño de las necesidades de cualquier organización.</p>
                  </v-row>
                </v-row>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-10 mx-16 pa-0"
        style="width:100vw;height:20vh;margin-bottom:140px !important"
        justify="center"
      >
        <v-row
          v-for="logo in this.logos" :key="logo"
          class="ma-0 pa-0"
          style="height:80px;max-width:12%;min-width:10%"
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
      <v-row
        class="ma-0 pa-0"
        style="height:700px"
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
          justify="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-width:50%;border-bottom: 1px solid grey"
          >

          </v-row>
        </v-row>
        <v-row
          class="ma-0 ml-4 mr-5 pa-0"
          style="font-family:Space Grotesk;height:450px"
          justify="center"
          align="center"
        >
          <v-row
            class="ma-0 mt-12 pa-0"
            style="width:100%;font-size:35px;font-weight:300;color:#101010"
            justify="center"
          >
            EN QUÉ ESTAMOS
          </v-row>
          <v-row
            class="ma-0 pa-0"
            align="center"
            justify="center"
          >
            <v-row
              v-for="ongoing in $store.state.ongoings" :key="ongoing.index"
              class="ma-0 pa-0"
              style="max-width:30%;height:100%"
              align="center"
              justify="center"
            >
              <v-row
                class="ma-0 mt-n16 pa-0"
                style="height:100%;font-weight:bold"
                align="center"
                justify="center"
              >
                <v-img
                  contain
                  eager
                  style="z-index:10;opacity:.85"
                  class="ma-0 mt-14 pa-0"
                  min-height="220px"
                  max-height="220px"
                  width="100%"
                  :src="ongoing.image"
                ></v-img>
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%"
                  align="center"
                  justify="center"
                >
                  {{ ongoing.nombre }}
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="font-weight:normal;width:34%;min-height:130px"
                  align="center"
                >
                  <v-row
                    class="ma-0 mt-12 pa-0 text-left"
                    style="width:100%"
                    justify="center"
                  >
                    <p
                      class="ma-0 pa-0 text-left"
                      style="max-width:80%"
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
          style="width:100%"
          justify="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-width:50%;border-top: 1px solid grey"
          >

          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mb-8 pa-0"
        style="min-height:80vh;width:100vw;transform:scale(1)"
        v-for="experiencia in $store.state.experiencias"  :key="experiencia.index"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:55vw"
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-delay="300"
          data-aos-once="false"
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
              style="opacity:.85"
            ></v-img>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:40vw;z-index:100"
          align="center"
          data-aos="fade-left"
          data-aos-duration="1300"
          data-aos-once="false"
        >
          <v-row
            class="ma-0 pa-0"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:120px"
              align="center"
            >
              <v-img
                contain
                eager
                style="z-index:10"
                class="ma-0 pa-0"
                max-height="100"
                max-width="200"
                :src="experiencia.logo"
                data-aos="zoom-out"
                data-aos-duration="1300"
                data-aos-delay="800"
                data-aos-once="false"
              ></v-img>
              <v-spacer></v-spacer>
              <v-icon v-if="experiencia.index == 0" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
              <v-icon v-if="experiencia.index == 1" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
              <v-icon v-if="experiencia.index == 2" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
              <v-icon v-if="experiencia.index == 3" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
              <v-icon v-if="experiencia.index == 4" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
              <v-icon v-if="experiencia.index == 5" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
              <v-icon v-if="experiencia.index == 6" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
              <v-icon v-if="experiencia.index == 7" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
              <v-icon v-if="experiencia.index == 8" class="ma-0 ml-12 mr-16 pa-0" size="60" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
            </v-row>
            <v-row
              class="d-flex mt-6 ma-0 pa-0 align-stretch"
              style="min-height:250px"
              align="center"
            >
              <v-row
                class="ma-0 ml-5 mr-12 pa-0"
                style="width:100%;font-family:Space Grotesk"
                v-for="dex in 2" :key="dex"
                align="center"
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
                class="ma-0 mt-8 pa-0"
                align="center"
              >
                <v-row
                  v-if="experiencia.web"
                  class="ma-0 ml-5 pa-0"
                >
                  <a style="color:black;text-decoration:none;font-weight:bold" :href="experiencia.web" target="_blank">Ver plataforma digital</a><br><br>
                </v-row>
                <v-spacer></v-spacer>
                <v-icon @click="$store.commit('extending', experiencia.index)" v-if="experiencia.text.length > 2 && !experiencia.extend" color="#101010" medium class="ma-0 mr-10 mb-5 mr-12 pa-0">mdi-plus</v-icon>
                <v-icon @click="$store.commit('extending', experiencia.index)" v-if="experiencia.text.length > 2 && experiencia.extend" color="#101010" medium class="ma-0 mr-10 mb-5 mr-12 pa-0">mdi-minus</v-icon>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:5vw"
        >

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
