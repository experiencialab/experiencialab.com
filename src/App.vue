<template>
  <v-app id="app">
    <v-row
      v-if="loading"
      class="ma-0 pa-0 ma-auto"
      style="width:100vw;height:100vh;position:absolute;z-index:99;background-color:white"
      align="center"
      justify="center"
    >
      <v-img
        eager
        max-height="330px"
        max-width="330px"
        src="animation.gif"

      ></v-img>
    </v-row>
    <Header
      style="z-index:4"
    ></Header>
    <router-view v-if="!loading"></router-view>
  <Footer></Footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      loading: true
    }),
    components: {
      'Header': require('@/components/Header.vue').default,
      'Footer': require('@/components/Footer.vue').default
    },
    methods: {
      toggleBodyClass(addRemoveClass, className) {
        const el = document.body;

        if (addRemoveClass === 'addClass') {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      },
      sleep(sec) {
        return new Promise((resolve) => {
          setTimeout(resolve, sec);
        });
      }
    },
    mounted() {
      this.sleep(2);
      document.onreadystatechange = () => {
        console.log(document.readyState)
        if (document.readyState == "complete") {
          this.loading = false;
        }
      }

    }
}
</script>

<style lang="sass">

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap')

  ::-webkit-scrollbar
    display: none

  .v-application
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none


</style>
