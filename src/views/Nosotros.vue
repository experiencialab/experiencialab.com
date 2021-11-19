<template>
  <v-row
    class="ma-0 pa-0"
  >
    <nosotros-desktop v-if="$vuetify.breakpoint.xl"></nosotros-desktop>
    <nosotros-desktop v-if="$vuetify.breakpoint.lg"></nosotros-desktop>
    <nosotros-desktop v-if="$vuetify.breakpoint.md"></nosotros-desktop>
    <nosotros-mobile v-if="$vuetify.breakpoint.sm"></nosotros-mobile>
    <nosotros-mobile v-if="$vuetify.breakpoint.xs"></nosotros-mobile>
  </v-row>
</template>

<script>
  export default {
    components: {
      'nosotros-desktop': require('@/components/Nosotros_Desktop.vue').default,
      'nosotros-mobile': require('@/components/Nosotros_Mobile.vue').default
    }
  }
</script>
