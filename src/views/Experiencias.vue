<template>
  <v-row
    class="ma-0 pa-0"
  >
    <experiencias-desktop v-if="$vuetify.breakpoint.xl"></experiencias-desktop>
    <experiencias-desktop v-if="$vuetify.breakpoint.lg"></experiencias-desktop>
    <experiencias-desktop v-if="$vuetify.breakpoint.md"></experiencias-desktop>
    <experiencias-mobile v-if="$vuetify.breakpoint.sm"></experiencias-mobile>
    <experiencias-mobile v-if="$vuetify.breakpoint.xs"></experiencias-mobile>
  </v-row>
</template>

<script>
  export default {
    components: {
      'experiencias-desktop': require('@/components/Experiencias_Desktop.vue').default,
      'experiencias-mobile': require('@/components/Experiencias_Mobile.vue').default
    }
  }
</script>
