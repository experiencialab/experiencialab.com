<template>
  <v-row
    class="ma-0 mx-5 pa-0 align-center"
    style="border-top: 1px solid black;font-size:11px;font-family:Space Grotesk;font-weight:400"
    justify="center"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
      align="center"
      justify="center"
    >
      <v-row
        class="ma-0 pa-0"
        style="height:60px"
        align="center"
        justify="center"
      >
        <v-icon
          class="ma-0 mr-2 pa-0"

          color= "black"
          @click="site('https://www.linkedin.com/company/experiencialab')"
        >
          mdi-linkedin
        </v-icon>
        <v-icon
          class="ma-0 mr-2 pa-0"
          color= "black"
          @click="site('https://twitter.com/experiencia_lab')"
        >
          mdi-twitter
        </v-icon>
        <v-icon
          class="ma-0 mr-2 pa-0"

          color= "black"
          @click="site('https://www.instagram.com/experiencialab/?hl=en')"
        >
          mdi-instagram
        </v-icon>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:4px"
      align="center"
      justify="center"
    >
      <p class="ma-0 pa-0 text-decoration-none">Designed & Developed by <a class="ma-0 pa-0 text-decoration-none" style="color:black;font-weight:bold" href="https://pinkdogstudio.com">Pink Dog</a></p>
    </v-row>
    <v-row
      class="ma-0 mt-3 pa-0 pb-10"
      style="width:100%;height:14px;color:#03F7F7"
      align="center"
      justify="center"
    >
      <v-icon
        class="mt-1 mr-1 mb-1"
        x-small
        color= "#03F7F7"
      >
        mdi-copyright
      </v-icon>
      <span class="ma-0 mr-2 pa-0" tyle="font-size:15px">{{ new Date().getFullYear() }}</span>LAB, Inc.<br>
    </v-row>
  </v-row>
</template>


<script>
  export default {
    data: () => ({
    }),
    components: {},
    methods: {
      site: function (link) {
        window.open(link, "_blank");
      }
    }
  }
</script>


<style lang="sass">

</style>
