<template>
  <v-row
    class="ma-0 pa-0"
  >
    <terminos-desktop v-if="$vuetify.breakpoint.xl"></terminos-desktop>
    <terminos-desktop v-if="$vuetify.breakpoint.lg"></terminos-desktop>
    <terminos-desktop v-if="$vuetify.breakpoint.md"></terminos-desktop>
    <terminos-mobile v-if="$vuetify.breakpoint.sm"></terminos-mobile>
    <terminos-mobile v-if="$vuetify.breakpoint.xs"></terminos-mobile>
  </v-row>
</template>

<script>
  export default {
    components: {
      'terminos-desktop': require('@/components/Terminos_Desktop.vue').default,
      'terminos-mobile': require('@/components/Terminos_Mobile.vue').default
    }
  }
</script>
