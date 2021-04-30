<template>
  <v-app>
    <Header
      style="z-index:4"
    ></Header>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
export default {
    data() {
      return {
      }
    },
    components: {
      'Header': require('@/components/Header.vue').default,
      'Footer': require('@/components/Footer.vue').default
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
