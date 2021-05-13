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
                    <p class="ma-0 ml-16 pa-0" style="color:white;max-width:800px;text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Adaptamos la experiencia al tamaño de las necesidades de cualquier empresa o institución</p>
                  </v-row>
                </v-row>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-16 pa-0"
        style="width:100vw"
        v-for="experiencia in $store.state.experiencias"  :key="experiencia.index"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:55vw;height:100%;background-color:red"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;height:100px;background-color:blue"
          >

          </v-row>
          <v-spacer></v-spacer>

          <v-img
            class="ma-0 ml-12 pa-0"
            max-height="100"
            max-width="200"
            :src="experiencia.logo"
          ></v-img>
          <v-img
            width="100%"
            :src="experiencia.mock"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:45vw;height:100px;background-color:yellow"
          align="center"
        >
          <v-icon class="ma-0 ml-12 mr-5 pa-0" size="60">$camion</v-icon>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:25vw;background-color:yellow"
        >
          {{ experiencia.text }}
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
