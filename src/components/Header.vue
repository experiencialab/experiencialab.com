<template>
  <v-row
    class="ma-0 pa-0"
    style="position:fixed;width:100vw;height:75px;background-color:white"
    align="center"
  >
    <v-img
      class="ma-0 mb-1 ml-12 pl-16 pa-0"
      max-height="50px"
      max-width="180px"
      src="logo-lab.png"
      :contain="true"/>
    <v-spacer></v-spacer>
    <v-row
      class="ma-0 mr-6 pa-0"
    >
      <v-spacer></v-spacer>
      <a
        class="ma-0 pa-0 mx-4 text-decoration-none text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >nosotros</a>
      <a
        class="ma-0 pa-0 mx-4 text-decoration-none text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >podcast</a>
      <a
        class="ma-0 pa-0 mx-4 text-decoration-none text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >colaboraciones</a>
      <a
        class="ma-0 pa-0 mx-4 text-decoration-none text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >carreras</a>
      <a
        class="ma-0 pa-0 mx-4 text-decoration-none text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >whatsapp</a>
      <v-spacer></v-spacer>

      <a
        class="ma-0 pa-0 mr-12 text-decoration-none text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >en/es</a>
    </v-row>
  </v-row>
</template>

<script>

</script>

<style lang="sass">

</style>
