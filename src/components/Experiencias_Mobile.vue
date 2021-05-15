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
          @click="whatsapp()"
        >
          WHATSAPP <v-icon class="ma-0 ml-7 pa-0" style="transform:scale(1.5)">$camion</v-icon>
        </v-row>
        <v-row
          class="ma-0 mt-1 pa-0"
          style="height:max-63vh;width:100vw;overflow:hidden"
        >
          <v-img
            class="ma-0 pa-0"
            max-width="100vw"
            height="56vh"
            src="fotos/experiencias.jpg"
            style="color:white"
            position="70%"
          >

          </v-img>
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
          <v-img
            eager
            style="z-index:10"
            class="ma-0 pa-0"
            max-height="100"
            max-width="200"
            :src="experiencia.logo"
          >
          </v-img>
        </v-row>
        <v-row
          class="ma-0 mt-6 pa-0"
          style="width:100vw;max-height:50px;z-index:10"
          justify="center"
        >

            <v-icon v-if="experiencia.index == 0" class="ma-0 pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
            <v-icon v-if="experiencia.index == 1" class="ma-0 pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
            <v-icon v-if="experiencia.index == 2" class="ma-0 pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$s</v-icon>
            <v-icon v-if="experiencia.index == 3" class="ma-0 pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
            <v-icon v-if="experiencia.index == 4" class="ma-0 pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>
            <v-icon v-if="experiencia.index == 5" class="ma-0 pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$xl</v-icon>
            <v-icon v-if="experiencia.index == 6" class="ma-0 pa-0" size="50" style="filter: invert(90%) sepia(30%) saturate(4740%) hue-rotate(111deg) brightness(108%) contrast(104%)">$m</v-icon>

        </v-row>
        <v-row
          class="ma-0 mt-n5 pa-0"
          style="width:100%"
        >
          <v-img
            eager
            position=""
            contain
            :src="experiencia.mock"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 mt-10 mx-5 pa-0"
          style="width:100%;font-size:17px;font-family:Space Grotesk;font-weight:300"
          v-for="text in experiencia.text"  :key="text"
        >
          <p>
            <span v-html="text"></span>
          </p>
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
