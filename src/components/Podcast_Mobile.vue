<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100vw;overflow:hidden"
  >
    <v-row
      style="width:100vw;overflow:hidden"
      justify="center"
    >
      <v-row
        v-if="loading"
        class="ma-0 mx-1 pa-0"
        style="width:100vw;height:100vh;position:absolute;z-index:1199;background-color:white"
        align="center"
        justify="center"
      >
        <v-img
          eager
          max-height="200px"
          max-width="300px"
          src="LAB.gif"

        ></v-img>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 mt-8 pa-0 pt-16"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/show/50FARDnK33AjV42wtNbq38" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/3ESgj7fsqxnvIFqGugZnrk" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/3yoVJLbwu4fkZHt2ATLX7l" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/2rWEBRjxyyIqqwadwOzTT3" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/5HeLXB2mdUBD6sofP3nFnN" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/20MfKcy5ViXI2X7ijo4gu8" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/5K7SayMllvlo9cYrHtnzDK" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/5IHX4pbuT9hzibevRQwmwq" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/6Th3j4QbertSqEwr4S90bW" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/79whFytDbec4OOkBaKAxSb" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/2uPiGPw4wSd5Nkxpn3KTOJ" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/1rsjXiq3Zv2lY3w5reESxt" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/6b7E7i8sHRCsiA2OwTHSod" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/52ssxaJ2KO1w71awUUtLjL" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 pa-0" src="https://open.spotify.com/embed/episode/47xjot60J450SpqIZhubFt" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
      <v-row
        class="ma-0 mx-5 mb-n5 pa-0"
        style="opacity:.85"
      >
        <iframe class="ma-0 mb-16 pa-0" src="https://open.spotify.com/embed/episode/7nkIXQWXviZqjUISUMD9nb" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
