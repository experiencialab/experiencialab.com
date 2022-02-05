<template>
  <v-app id="app">
    <v-row
      v-if="loading"
      class="ma-0 pa-0 ma-auto"
      style="width:100vw;height:100vh;position:absolute;z-index:1199;background-color:white"
      align="center"
      justify="center"
    >
      <v-img
        eager
        max-height="100px"
        max-width="150px"
        src="LAB.gif"

      ></v-img>
    </v-row>
    <keep-alive>
      <Header
        v-if="!loading"
        style="position:fixed;z-index:400"
      ></Header>
    </keep-alive>
    <transition :name='name'>
      <router-view v-if="!loading"></router-view>
    </transition>
  <Footer></Footer>
  </v-app>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    data: () => ({
      name: 'fade',
      loading: true
    }),
    components: {
      Header,
      Footer
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
    async mounted() {
      document.onreadystatechange = async () => {
        if (document.readyState == "complete") {

          this.loading = false;
          await this.sleep(2000);
          this.name = null
        }
      }

    }
}
</script>

<style lang="sass">

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap')

  // ::-webkit-scrollbar
  //   display: none

  .v-application
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

  .fade-enter-active, .fade-leave-active
    transition: opacity 2s

  .fade-enter, .fade-leave-to
    opacity: 0

</style>
