<template>
  <v-app>
    <Header
      style="z-index:2"
    ></Header>
    <router-view/>
  </v-app>
</template>

<script>
export default {
    data() {
      return {
      }
    },
    components: {
      'Header': require('@/components/Header.vue').default
    }
}
</script>

<style lang="sass">

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap')

  ::-webkit-scrollbar
    display: none

  .menu-item
    font-family: Space Grotesk

</style>
