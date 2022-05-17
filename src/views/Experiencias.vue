<template>
  <v-row
    class="ma-0 pa-0"
  >
    <experiencias-desktop v-if="$vuetify.breakpoint.xl"></experiencias-desktop>
    <experiencias-desktopmd v-if="$vuetify.breakpoint.lg"></experiencias-desktopmd>
    <experiencias-desktopmd v-if="$vuetify.breakpoint.md"></experiencias-desktopmd>
    <experiencias-mobile v-if="$vuetify.breakpoint.sm"></experiencias-mobile>
    <experiencias-mobile v-if="$vuetify.breakpoint.xs"></experiencias-mobile>
  </v-row>
</template>

<script>
  export default {
    components: {
      'experiencias-desktop': require('@/components/Experiencias_Desktop.vue').default,
      'experiencias-desktopmd': require('@/components/Experiencias_Desktopmd.vue').default,
      'experiencias-mobile': require('@/components/Experiencias_Mobile.vue').default
    }
  }
</script>
