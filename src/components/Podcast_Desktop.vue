<template>
  <v-row
    justify="center"
  >
    <v-row
      v-if="loading"
      class="ma-0 pa-0 ma-auto"
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
      v-if="!loading"
      class="ma-0 mt-16 pa-0 pt-16 pb-16"
      style="max-width:80vw;top:60px"
      justify="center"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
        justify="left"
      >

        <iframe class="ma-0 mt-n10 mb-n5 mx-1 pa-0" src="https://open.spotify.com/embed/show/50FARDnK33AjV42wtNbq38" width="100%" height="302" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <v-spacer></v-spacer>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/5IHX4pbuT9hzibevRQwmwq" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/6Th3j4QbertSqEwr4S90bW" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/79whFytDbec4OOkBaKAxSb" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/2uPiGPw4wSd5Nkxpn3KTOJ" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/1rsjXiq3Zv2lY3w5reESxt" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/6b7E7i8sHRCsiA2OwTHSod" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/52ssxaJ2KO1w71awUUtLjL" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/47xjot60J450SpqIZhubFt" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <iframe class="ma-0 mt-n10 mx-1 pa-0" src="https://open.spotify.com/embed/episode/7nkIXQWXviZqjUISUMD9nb" width="49%" height="202" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    async mounted() {
      document.onreadystatechange = async () => {
        console.log(document.readyState)
        if (document.readyState == "complete") {
          await this.sleep(2000);
          this.loading = false;
        }
      }
    }
  }
</script>

<style lang="sass">

</style>
