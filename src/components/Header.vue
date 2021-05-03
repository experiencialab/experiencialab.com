<template>
  <v-row
    class="ma-0 pa-0"
    style="position:fixed;width:100vw;height:8vh;background-color:white"
  >
    <v-img
      class="ma-0 mt-1 mb-1 ml-6 pa-0 d-sm-none"
      max-height="80px"
      max-width="150px"
      src="logo-lab.png"
      :contain="true"/>
    <v-img
      class="ma-0 mt-1 mb-1 ml-12 pl-16 pa-0 d-none d-sm-flex"
      max-height="50px"
      max-width="160px"
      src="logo-lab.png"
      :contain="true"/>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon x-large class="mt-2 d-sm-none d-none" color="#03F7F7" @click="drawer = true"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>


    <v-row
      class="ma-0 mt-1 mr-6 pa-0 d-none d-sm-flex"
      align="center"
    >
      <v-spacer></v-spacer>
      <a
        class="ma-0 pa-0 mx-4 text-uppercase menu-item menu-active d-none"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >
        <span class="outer">
          <span class="inner">home</span>
        </span>
      </a>
      <a
        class="ma-0 pa-0 mx-4 text-uppercase menu-item menu-active d-none"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >
        <span class="outer">
          <span class="inner">nosotros</span>
        </span>
      </a>
      <a
        class="ma-0 pa-0 mx-4 text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="spotify()"
      >
        <span class="outer">
          <span class="inner">podcast</span>
        </span>
      </a>
      <a
        class="ma-0 pa-0 mx-4 text-uppercase menu-item menu-active d-none"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >
        <span class="outer">
          <span class="inner">experiencias</span>
        </span>
      </a>
      <a
        class="ma-0 pa-0 mx-4 text-uppercase menu-item menu-active d-none"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >
        <span class="outer">
          <span class="inner">carreras</span>
        </span>
      </a>
      <a
        class="ma-0 pa-0 mx-4 text-uppercase menu-item"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="whatsapp()"
      >whatsapp</a>
      <v-spacer></v-spacer>
      <a
        class="ma-0 pa-0 text-uppercase menu-item d-none"
        :class="{ 'menu-active': !this.english }"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >
        <span class="outer">
          <span class="inner">es</span>
        </span></a>
        
      <a
        class="ma-0 pa-0 mr-12 text-decoration-none text-uppercase menu-item menu-active d-none"
        :class="{ 'menu-active': !this.english }"
        style="color:black;font-size:13px;letter-spacing:0px;font-weight:500"
        @click="myFunction()"
      >
        <span class="outer">
          <span class="inner">en</span>
        </span>
      </a>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      english: false
    }),
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
  .menu-item
    font-family: Space Grotesk

  .menu-active
    span.inner
      color: black
    span.outer
      color: #03F7F7
      text-decoration: line-through

</style>
