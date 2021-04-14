<template>
  <v-row
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:100vh"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100vw;height:75px"
      >
      </v-row>
      <v-row
        class="ma-0 pa-0 justify-end"
        style="position:relative;width:100vw;height:60vh"
      >
        <v-row
          class="ma-0 ml-6 mr-3 pa-0"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;top:50%;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
          align="center"
          justify="center"
        >
          PODCAST <v-icon class="ma-0 ml-7 pa-0">$corazon</v-icon>
        </v-row>
        <v-row
          class="my-1 mx-6 pa-0"
          style="width:100%;min-height:100%"
        >
          <VideoParallax class="ma-0 pa-0" style="width:100%;min-height:60vh" src="videos/lab.mov">

            <v-row
              class="ma-0 pa-0"
              style="width:50%;min-height:65vh;background-color:transparent"
            >

            </v-row>

          </VideoParallax>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mx-6 pa-0"
        style="width:100vw;color:black;font-family:Space Grotesk"
      >
          <v-spacer></v-spacer>
          <v-icon class="ma-0 mt-10 mr-5 pa-0" style="transform:scale(2)">$corazon</v-icon>
          <p class="mx-6 mb-5 mt-2 pa-0" style="width:40%"> {{ $store.state.bajada }} </p>

      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:70px"
    >
    </v-row>
    <v-row
      class="ma-0 ml-12 pa-0"
      style="width:100vw;height:70px;font-size:20px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black"
    >
    SERVICIOS
    </v-row>
    <v-row
      v-for="servicio in $store.state.servicios"  :key="servicio.index"
      class="ma-0 pa-0"
      style="position:relative;width:100vw;height:calc( 100vh - 70px )"
    >
        <v-img
          class="ma-16 pa-0"
          style="min-width:50%;max-width:50%;max-heigth:calc( 100vh - 70px );text-shadow:2px 2px 2px rgba(0,0,0,0.3);left:5vw;font-size:200px;font-family:Space Grotesk;font-weight:700;color:white"
          src="fotos/aceleracion-digital.jpg"

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
          class="ma-0 pa-0 justify-end"
          align="center"
        >
          <v-row
            class="ma-0 mr-16 pa-0"
            style="right:5vw;position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;width:500px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:60px"
              align="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="background-color:#03F7F7;max-width:5px;height:100%"
                align="center"
              >

              </v-row>
              <v-row
                class="ma-0 ml-6 pa-0"
                style="font-size:17px;font-family:Space Grotesk;font-weight:700"
              >
                {{ $store.state.servicios[servicio.index].titulo }}
              </v-row>
            </v-row>
            <v-row
              class="my-3 mx-12 pa-0"
              style="width:100%;height:65%;font-size:14px;font-family:Space Grotesk;font-weight:400"
              align="center"
            >
              <p>
                <span v-html="$store.state.servicios[servicio.index].texto"></span>
              </p>
            </v-row>
            <v-row
              class="ma-0 mb-5 pa-0"
              style="width:100%;height:60px"
              align="center"
              justify="center"
            >
              <v-icon class="ma-0 pa-0">$corazon</v-icon>
            </v-row>
          </v-row>
        </v-row>


    </v-row>
  </v-row>
</template>

<script>
  import VideoParallax from 'vuetify-video-parallax';
  export default {
  components: {
    VideoParallax,
  }
}
</script>

<style lang="sass">
  .spany
    font-weight: bold
</style>
