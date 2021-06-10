<template>
  <v-row
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:5px;background-color:white"
    >

    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="color:black;letter-spacing:0px;width:max-100px;transform-origin:center"
      align="center"
    >
      <v-spacer></v-spacer>
      <a
        :href="ref('home')"
        class="ma-0 pa-0 menu-item text-uppercase text-decoration-none"
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
      class="ma-0 mx-3 pa-0"
      style="color:black;letter-spacing:0px;max-width:100px;transform-origin:center"
      align="center"
      justify="center"
    >
      <a
        :href="ref('experiencias')"
        class="ma-0 pa-0 menu-item text-uppercase text-decoration-none"
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
      class="ma-auto pa-0"
      style="width:100vw"
      v-for="item in this.items"  :key="item.nombre"

    >
      <a
        :href="ref(item.nombre)"
        :class="{ 'menu-active': check(item.nombre) }"
        class="ma-0 mr-10 pa-0 text-decoration-none text-uppercase text-right"
        style="width:100vw;height:40px;color:black;font-family: Space Grotesk;font-size:13px;letter-spacing:0px;font-weight:500"
        align="center"
      >
        <span class="outer">
          <span class="inner">{{ item.nombre }}</span>
        </span>
      </a>

      <a
        v-if="item.nombre == 'Whatsapp'"
        class="ma-0 mr-10 pa-0 text-decoration-none text-uppercase text-right"
        style="width:100vw;height:40px;color:black;font-family: Space Grotesk;font-size:13px;letter-spacing:0px;font-weight:500"
        align="center"
        :href="item.link"
      >
        <span class="outer">
          <span class="inner">{{ item.nombre }}</span>
        </span>
      </a>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          nombre: 'home',
          link: '/'
        },
        {
          nombre: 'nosotros',
          link: '/nosotros'
        },
        {
          nombre: 'podcast',
          link: '/podcast'
        },
        {
          nombre: 'experiencias',
          link: '/experiencias'
        },
        {
          nombre: 'Whatsapp',
          link: 'https://wa.me/+56994319115'
        }
      ]
    }),
    methods: {
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
      },
      check: function (item) {
        if (item == 'Home') {
          return this.$router.options.routes[0].meta.active
        }
        else if (item == 'Nosotros') {
          return this.$router.options.routes[2].meta.active
        }
        else if (item == 'Podcast') {
          return this.$router.options.routes[3].meta.active
        }
        else if (item == 'Experiencias') {
          return this.$router.options.routes[1].meta.active
        }
      }
    }
  }
</script>

<style lang="sass">

</style>
