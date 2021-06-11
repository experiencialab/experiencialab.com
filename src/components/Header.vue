<template>
  <v-row
    class="ma-0 pa-0"
    style="position:fixed;background-color:white;overflow:hidden"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;min-height:8vh"
      align="center"
    >
      <v-img
        class="ma-0 mt-1 mb-1 ml-6 pa-0 d-none"
        max-height="80px"
        max-width="150px"
        src="logo-lab.png"
        :contain="true"/>
      <v-img
        class="ma-0 ml-16 pa-0 d-none"
        eager
        max-height="8vh"
        max-width="150px"
        src="logo-lab.png"
      ></v-img>
      <a
        :href="ref('home')"

        class="ma-0 mt-n1 pa-0 d-sm-none"
      >
        <v-img
          class="ma-0 ml-8 pa-0"
          eager
          max-height="80px"
          max-width="160px"
          :src="this.logo"
        ></v-img>
      </a>
      <a
        :href="ref('home')"

        class="ma-0 pa-0 d-none d-sm-flex"
      >
        <v-img
          href="ref('home')"
          class="ma-0 ml-16 pa-0"
          eager
          max-height="9vh"
          max-width="140px"
          :src="this.logo"
        ></v-img>
      </a>
      <v-row
        class="ma-0 ml-16 pa-0 d-none"
        style="height:8vh;width:220px;z-index:55555555"
      >
        <video style="transform:scale(.23);transform-origin:left top" autoplay muted><source src="LAB.mp4" type='video/mp4'></video>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon x-large class="mt-1 mr-3 d-sm-none" color="#03F7F7" @click="drawer = !drawer"></v-app-bar-nav-icon>


      <v-row
        class="ma-0 mr-6 pa-0 d-none d-sm-flex"
        style="max-height:13px"
      >
        <v-spacer></v-spacer>
        <v-row
          class="ma-0 pa-0"
          style="color:black;letter-spacing:0px;max-width:100px;transform-origin:center"
          align="center"
          justify="center"
        >
          <router-link
            to="/"
            class="ma-0 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('home') }"
            tag="button"
            :disabled="check('home')"
          >
            <span class="outer">
              <span class="inner">home</span>
            </span>
          </router-link>
        </v-row>
        <v-row
          class="ma-0 mx-3 pa-0"
          style="color:black;letter-spacing:0px;max-width:100px;transform-origin:center"
          align="center"
          justify="center"
        >
          <router-link
            to="/experiencias"
            class="ma-0 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('experiencias') }"
            tag="button"
            :disabled="check('experiencias')"
          >
            <span class="outer">
              <span class="inner">experiencias</span>
            </span>
          </router-link >
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="color:black;letter-spacing:0px;max-width:100px;transform-origin:center"
          align="center"
          justify="center"
        >
          <router-link
            to="/podcast"
            class="ma-0 mr-1 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('podcast') }"
            tag="button"
            :disabled="check('podcast')"
          >
            <span class="outer">
              <span class="inner">podcast</span>
            </span>
          </router-link>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="color:black;letter-spacing:0px;max-width:100px;transform-origin:center"
          align="center"
          justify="center"
        >
          <router-link
            to="/nosotros"
            class="ma-0 mr-1 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('nosotros') }"
            tag="button"
            :disabled="check('nosotros')"
          >
            <span class="outer">
              <span class="inner">nosotros</span>
            </span>
          </router-link>
        </v-row>
        <a
          class="ma-0 pa-4 text-uppercase menu-item menu-active d-none"
          style="color:black;letter-spacing:0px;width:100px;transform-origip center"
          @click="myFunction()"
        >
          <span class="outer">
            <span class="inner">carreras</span>
          </span>
        </a>
        <v-row
          class="ma-0 pa-0"
          style="color:black;letter-spacing:0px;max-width:100px;transform-origin:center"
          align="center"
          justify="center"
        >
          <a
            @click="whatsapp()"
            class="ma-0 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
          >
            <span class="outer">
              <span class="inner">whatsapp</span>
            </span>
          </a>
        </v-row>
        <v-spacer></v-spacer>
        <a
          class="ma-0 pa-0 text-uppercase menu-item d-none"
          :class="{ 'menu-active': !this.english }"
          style="color:black;letter-spacing:0px"
          @click="myFunction()"
        >
          <span class="outer">
            <span class="inner">es</span>
          </span></a>

        <a
          class="ma-0 pa-0 mr-12 text-decoration-none text-uppercase menu-item menu-active d-none"
          :class="{ 'menu-active': !this.english }"
          style="color:black;letter-spacing:0px"
          @click="myFunction()"
        >
          <span class="outer">
            <span class="inner">en</span>
          </span>
        </a>
      </v-row>
    </v-row>





    <v-row
      :class="{ 'drawer': drawer }"
      class="ma-0 pa-0 d-sm-none"
      style="background-color:white;width:100vw;height:0px;transition: height 0.2s;overflow:hidden"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="height:30px;color:black;letter-spacing:0px;width:100%;transform-origin:center"
          align="center"
        >
          <v-spacer></v-spacer>
          <a
            :href="ref('home')"
            class="ma-0 mr-6 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('home') }"
            tag="button"
            :disabled="check('home')"
          >
            <span class="outer">
              <span class="inner">home</span>
            </span>
          </a>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="height:30px;color:black;letter-spacing:0px;width:100%;transform-origin:center"
          align="center"
          justify="center"
        >
          <v-spacer></v-spacer>
          <a
            :href="ref('experiencias')"
            class="ma-0 mr-6 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('experiencias') }"
            tag="button"
            :disabled="check('experiencias')"
          >
            <span class="outer">
              <span class="inner">experiencias</span>
            </span>
          </a>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="height:30px;color:black;letter-spacing:0px;width:100%;transform-origin:center"
          align="center"
        >
          <v-spacer></v-spacer>
          <a
            :href="ref('podcast')"
            class="ma-0 mr-6 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('podcast') }"
            tag="button"
            :disabled="check('podcast')"
          >
            <span class="outer">
              <span class="inner">podcast</span>
            </span>
          </a>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="height:30px;color:black;letter-spacing:0px;width:100%;transform-origin:center"
          align="center"
        >
          <v-spacer></v-spacer>
          <a
            :href="ref('nosotros')"
            class="ma-0 mr-6 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            :class="{ 'menu-active': check('nosotros') }"
            tag="button"
            :disabled="check('nosotros')"
          >
            <span class="outer">
              <span class="inner">nosotros</span>
            </span>
          </a>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="height:30px;color:black;letter-spacing:0px;width:100%;transform-origin:center"
          align="center"
        >
          <v-spacer></v-spacer>
          <a
            @click="whatsapp()"
            class="ma-0 mr-6 pa-0 menu-item text-uppercase text-decoration-none"
            style="color:black;letter-spacing:0px;transform-origin:center"
            tag="button"
          >
            <span class="outer">
              <span class="inner">whatsapp</span>
            </span>
          </a>
        </v-row>
      </v-row>
    </v-row>

  </v-row>

</template>

<script>


  export default {
    data: () => ({
      english: false,
      drawer: false,
      logo: 'LAB.gif'
    }),
    components: {

    },
    async created () {
      this.$router.beforeEach( (to, from, next) => {
        this.drawer = !this.drawer;
        next()
      });
    },
    methods: {
      sleep(sec) {
        return new Promise((resolve) => {
          setTimeout(resolve, sec);
        });
      },
      whatsapp: function () {
        window.open("https://wa.me/+56994319115", "_blank");
      },
      spotify: function () {
        window.open("https://open.spotify.com/show/50FARDnK33AjV42wtNbq38?si=V-8U9kkiQuSI54pq2tOAbg&dl_branch=1", "_blank");
      },
      check: function (item) {
        if (item == 'home') {
          return this.$router.options.routes[0].meta.active
        }
        else if (item == 'nosotros') {
          return this.$router.options.routes[2].meta.active
        }
        else if (item == 'podcast') {
          return this.$router.options.routes[3].meta.active
        }
        else if (item == 'experiencias') {
          return this.$router.options.routes[1].meta.active
        }
      },
      ref: function (item) {
        if (item == 'home' && this.check('home') == false) {
          return this.$router.options.routes[0].path
        }
        else if (item == 'nosotros' && this.check('nosotros') == false) {
          return this.$router.options.routes[2].path
        }
        else if (item == 'podcast' && this.check('podcast') == false) {
          return this.$router.options.routes[3].path
        }
        else if (item == 'experiencias' && this.check('experiencias') == false) {
          return this.$router.options.routes[1].path
        }
      }
    }
  }
</script>

<style lang="sass">
  .menu-item
    font-weight: 400
    font-size: 13px
    font-family: Space Grotesk
    transition: ease .3s
    transform-origin: center center
  .menu-item:hover
    transform: scale(1.03)
    font-weight: 500
    cursor: pointer
  .menu-active
    font-weight: 400
    span.inner
      color: black
    span.outer
      color: #03F7F7
      text-decoration: line-through
      text-decoration-thickness: 2px
  .menu-active:hover
    transform: scale(1)
    font-weight: 400
    cursor: auto
  .drawer
    height: 160px !important

</style>
