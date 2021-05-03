<template>
  <v-row
    class="ma-0 pa-0"
  >
    <home-desktop v-if="!$vuetify.breakpoint.md"></home-desktop>
    <home-mobile v-if="$vuetify.breakpoint.md"></home-mobile>
  </v-row>
</template>

<script>
  export default {
    components: {
      'home-desktop': require('@/components/Home_Desktop.vue').default,
      'home-mobile': require('@/components/Home_Mobile.vue').default
    }
  }
</script>

<style lang="sass">
  .spany
    font-weight: bold

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
