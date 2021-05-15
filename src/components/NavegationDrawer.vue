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
      class="ma-auto pa-0"
      style="width:100vw"
      v-for="item in this.items"  :key="item.nombre"

    >
      <router-link
        v-if="item.nombre == 'Home' || item.nombre == 'Experiencias' || item.nombre == 'Nosotros'"
        :to="item.link"
        class="ma-0 mr-10 pa-0 text-decoration-none text-uppercase text-right"
        style="width:100vw;height:40px;color:black;font-family: Space Grotesk;font-size:13px;letter-spacing:0px;font-weight:500"
        align="center"
      >
        {{ item.nombre }}
      </router-link>
      <a
        v-if="item.nombre == 'Podcast' || item.nombre == 'Whatsapp'"
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
          nombre: 'Home',
          link: '/'
        },
        {
          nombre: 'Nosotros',
          link: '/nosotros'
        },
        {
          nombre: 'Podcast',
          link: 'https://open.spotify.com/show/50FARDnK33AjV42wtNbq38?si=V-8U9kkiQuSI54pq2tOAbg&dl_branch=1'
        },
        {
          nombre: 'Experiencias',
          link: '/experiencias'
        },
        {
          nombre: 'Whatsapp',
          link: 'https://wa.me/+56994319115'
        }
      ]
    })
  }
</script>

<style lang="sass">

</style>
