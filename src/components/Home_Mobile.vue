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
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;top:75%;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
          align="center"
          justify="center"
          @click="spotify()"
        >
          PODCAST <v-icon class="ma-0 ml-7 pa-0" style="transform:scale(1.5)">$camion</v-icon>
        </v-row>
        <v-row
          class="ma-0 mt-1 pa-0"
          style="height:max-63vh;width:100vw;overflow:hidden"
        >
          <VideoParallax class="ma-0 pa-0" style="width:100%;transform:scale(4);transform-origin:top center" src="videos/LAB_1920x600_color.mp4">

            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:56vh"
            >
            </v-row>

          </VideoParallax>
          <v-row
            class="ma-0 mt-n5 pa-0"
            style="z-index:1;position:absolute;width:100%"
          >
            <v-carousel
              class="ma-0 pa-0"
              hide-delimiters
              :show-arrows="false"
              continuos
              cycle
              style="height:450px"
            >
              <v-carousel-item
                class="ma-0 pa-0"
                transition="my-carousel"
                v-for="(item, index) in $store.state.titulares" :key="index"
                style="font-size:36px;font-family:Space Grotesk;font-weight:700;width:100vw"
                :class="{'tlarge': $vuetify.breakpoint.md}"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;height:60vh"
                >
                  <v-row
                    class="ma-0 ml-3 pa-0"
                    style="min-height:25vh;line-height:35px;color:white;text-shadow: 2px 2px 5px rgba(0,0,0,0.3)"
                    align="center"
                  >

                    <p class="mt-n16 highlight" style="max-width:80%" v-html="item"></p>
                  </v-row>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 pa-0 justify-center"
        style="position:relative;width:100vw;color:black;font-family:Space Grotesk;font-size:16px;font-weight:300"
        align="center"
      >
          <p class="ma-0 mx-8 mt-8 pa-0" style="z-index:2;width:100%;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"> {{ $store.state.bajada }} </p>

          <v-row
            class="ma-0 mt-16 pa-0"
            style="z-index:2;width:100%;height:15vh"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%"
            >
              <v-row
                class="ma-0 mb-2 pa-0"
                style="width:108"
                align="center"
                justify="center"
              >
                Hemos coordinado exitosamente
              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:100%;height:80%"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:30%;border-right:1px solid #03F7F7"
                >
                  <p class="ma-auto pa-0 text-center" style="font-size:35px;max-height:80%;width:100%">20+</p>
                  <p class="ma-0 mb-3 pa-0 text-center" style="font-size:15px;width:100%">Experiencias</p>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:30%;border-right:1px solid #03F7F7"
                >
                  <p class="ma-auto pa-0 text-center" style="font-size:35px;max-height:80%;width:100%">30+</p>
                  <p class="ma-0 mb-3 pa-0 text-center" style="font-size:15px;width:100%">Equipos</p>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:40%;border-right:1px solid #03F7F7"
                >
                  <p class="ma-auto mt-2 pa-0 text-center" style="font-size:35px;max-height:80%;width:100%">1000+</p>
                  <p class="ma-0 mb-3 pa-0 text-center" style="font-size:15px;line-height:16px;width:100%">Profesionales y Usuarios</p>
                </v-row>
              </v-row>
            </v-row>
          </v-row>

          <v-icon class="ma-0 pa-0" style="z-index:1;top:190px;transform:scale(12);position:absolute;opacity:.25">$corazon</v-icon>

      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-16 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">Servicios</p>
    </v-row>
    <v-row
      v-for="servicio in $store.state.servicios"  :key="servicio.index"
      class="ma-0 mt-8 pa-0"
      style="max-width:100vw"
    >
      <v-row
        class="ma-0 mb-16 mx-3 pa-0 pb-16"
        style="overflow:hidden;height:100%"
        align="center"
      >
        <v-img
          eager
          class="ma-0 pa-0"
          height="55vh"
          max-width="100%"
          style="text-shadow:2px 2px 2px rgba(0,0,0,0.3);font-size:130px;font-family:Space Grotesk;font-weight:700;color:white"
          :src="$store.state.servicios[servicio.index].foto"
        >
          <v-row
            class="ma-0 mb-4 pb-8 pa-0"
            style="height:100%"
            align="center"
            justify="center"
          >
            {{ $store.state.servicios[servicio.index].letra }}

          </v-row>
        </v-img>
        <v-row
          class="ma-0 pa-0 justify-center"
          style="width:100vw"
          align="center"
        >
          <v-row
            class="ma-0 mt-n16 pa-0"
            style="font-family:Space Grotesk;font-weight:400;background-color:white;color:black;z-index:1;max-width:90vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:10vh"
              align="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="background-color:#03F7F7;max-width:5px;min-height:100%"
                align="center"
              >

              </v-row>
              <v-row
                class="ma-0 ml-6 pa-0"
                style="font-size:18px;font-family:Space Grotesk;font-weight:700;max-width:92%"
              >
                {{ $store.state.servicios[servicio.index].titulo }}
              </v-row>
            </v-row>
            <v-row
              class="my-3 mx-5 pa-0"
              style="width:100%;font-size:15px;font-family:Space Grotesk;font-weight:400"
              align="center"
            >
              <p>
                <span v-html="$store.state.servicios[servicio.index].texto"></span>
              </p>
            </v-row>
            <v-row
              class="ma-0 mb-5 pa-0"
              style="height:60px"
              align="center"
              justify="center"
            >
              <v-icon v-if="servicio.index == 0" style="transform:scale(2)">$barco</v-icon>
              <v-icon class="ma-0 ml-16 pa-0" v-if="servicio.index == 1" style="transform:scale(2.5)">$cohete</v-icon>
              <v-icon v-if="servicio.index == 2" style="transform:scale(2)">$avion</v-icon>

            </v-row>
            <v-row
              v-if="servicio.index == 1"
              class="ma-0 pa-0"
              style="max-width:70px;height:40px"
            >
              <v-icon
                style="width:50px"
                class="mt-1 mr-1 mb-1 d-none"

                color= "black"
              >
                mdi-plus-thick
              </v-icon>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:50px"
    >
    </v-row>
    <v-row
      class="ma-0 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">Experiencias</p>
    </v-row>
    <v-row
      class="ma-0 mt-10 pa-0"
      style="width:100vw;position:relative;background-color:white;font-size:40px;font-family:Space Grotesk;font-weight:300"
    >
      <v-row
        class="ma-0 pa-0 justify-end"
        style="overflow:hidden;width:100vw"
      >
        <v-img
          eager
          class="ma-0 mt-8 pa-0"
          max-width="100vw"
          height="56vh"
          src="fotos/testimonios.jpg"
          style="color:white"
        >
          <v-carousel
            height="42vh"
            hide-delimiters
            :show-arrows="false"
            continuos
            cycle
            interval="8000"
            style="height:43vh"
          >
            <v-carousel-item
              class="ma-0 pa-0"
              transition="my-carousel"
              v-for="(item, index) in $store.state.testimonios" :key="index"
              style="font-size:18px;font-family:Space Grotesk;font-weight:500;width:100vw;height:42vh"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%;height:42vh"
                justify="center"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="max-width:85%;height:42vh"
                  align="center"
                >
                  <p class="ma-0 pa-0 font-italic" style="line-height:20px;text-shadow: 2px 2px 5px rgba(0,0,0,.3)">"{{ item.cita }}".</p>
                </v-row>
              </v-row>
            </v-carousel-item>
          </v-carousel>
          <v-row
            class="ma-0 pa-0"
            style="width:100vw;height:50px"
          >
            <v-spacer></v-spacer>
            <v-row
              class="ma-0 pa-0"
              style="font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:black;color:black;z-index:1;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
              justify="center"
            >
              <v-carousel
                hide-delimiters
                :show-arrows="false"
                continuos
                cycle
                interval="8000"
              >
                <v-carousel-item
                  class="ma-0 pa-0"
                  transition="my-carousel"
                  v-for="(item, index) in $store.state.testimonios" :key="index"
                  style="font-size:20px;font-family:Space Grotesk;font-weight:600"
                >
                  <v-row
                    class="ma-0"
                    style="position:flex;width:100%"
                    align="center"
                  >
                    <p class="ma-0 ml-5 mt-3 pa-0" style="min-width:100%;color:white;text-shadow: 2px 2px 5px rgba(255,255,255,0.3)">{{ item.autor }}</p>
                    <p class="ma-0 ml-5 pa-0" style="min-width:100%;color:white;font-size:10px">{{ item.cargo }}</p>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-row>
          </v-row>
        </v-img>
      </v-row>
      <v-row
        class="ma-0 mt-16 pa-0"
        style="width:100vw;background-color:white"
        align="center"
        justify="center"
      >
        <v-row
          class="ma-0 mt-3 mb-5 mx-5 pa-0 logo"
          v-for="logo in this.logos" :key="logo"
          justify="center"
        >

            <v-img
              eager
              max-height="100"
              max-width="100"
              :src="logo"
            ></v-img>

        </v-row>
      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-16 ml-5 pa-0 pt-8"
      style="width:100vw;height:70px;font-size:30px;line-height:48px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">¿Quieres ser parte?</p>
    </v-row>
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100vw;position:relative;background-color:white;font-size:40px;font-family:Space Grotesk;font-weight:300"
    >
      <v-row
        class="ma-0 mt-16 mb-16 pa-0 pb-16"
        style="overflow:hidden;width:100vw"
      >
        <v-img
          eager
          class="ma-0 mt-8 pa-0"
          max-width="100%"
          height="56vh"
          src="fotos/trabaja-con-nosotros.jpg"
          style="color:white"
        >
          <v-row
            class="ma-0 pa-0 align-end"
            style="height:100%;width:100%"
          >
            <v-row
              class="ma-0 mb-8 pa-0"
              style="font-size:30px;line-height:30px;font-weight:500;max-width:90%"
            >
              <p class="ma-0 mt-16 ml-5 pa-0" style="text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Desarrolla tus talentos con nosotros</p>
            </v-row>
            <v-icon class="ma-0 mb-8 pa-0 pt-0 pb-2 pl-11" style="transform:scale(8)">$bus</v-icon>
          </v-row>
        </v-img>
        <v-row
          class="ma-0 pa-0"
          style="height:100px;width:100%"
        >
          <v-spacer></v-spacer>
          <v-row
            class="ma-0 mt-16 mr-5 pa-0 text-uppercase d-none"
            style="background-color:#03F7F7;max-width:350px;height:60px;font-size:20px;font-weight:600;color:black;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
            justify="center"
            align="center"
          >
            ¡Trabaja con nosotros!
          </v-row>
        </v-row>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  import VideoParallax from 'vuetify-video-parallax';
  export default {
    data: () => ({
      logos: []
    }),
    components: {
      VideoParallax
    },
    created() {
      var logos = this.$store.state.logos;
      this.logos = logos.sort(function() {return 0.5 - Math.random()});
    },
    methods: {
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
