<template>
  <v-row
    class="ma-0 pa-0"
  >
    <homedesktop v-if="$vuetify.breakpoint.xl"></homedesktop>
    <homedesktopmd v-if="$vuetify.breakpoint.lg"></homedesktopmd>
    <homedesktopmd v-if="$vuetify.breakpoint.md"></homedesktopmd>
    <homemobile v-if="$vuetify.breakpoint.sm"></homemobile>
    <homemobile v-if="$vuetify.breakpoint.xs"></homemobile>
  </v-row>
</template>

<script>
  import homedesktop from '@/components/Home_Desktop.vue'
  import homedesktopmd from '@/components/Home_Desktopmd.vue'
  import homemobile from '@/components/Home_Mobile.vue'

  export default {
    components: {
      homedesktop,
      homedesktopmd,
      homemobile
    }
  }
</script>

<style lang="sass">

  .v-carousel .v-window-item
    position: absolute
    top: 0
    width: 100%

  .my-carousel-enter-active

    transition: 2s ease
  .my-carousel-leave-active

    transition: 2s ease
  .my-carousel-move

    transition: transform 6s
  .my-carousel-enter

    transform: translate(-100%, 0)
  .my-carousel-leave

  .my-carousel-leave-to
    position: absolute
    top: 0
    transform: translate(100%, 0)

</style>
