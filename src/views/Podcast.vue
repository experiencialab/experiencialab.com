<template>
  <v-row
    class="ma-0 pa-0"
  >
    <podcastdesktop v-if="$vuetify.breakpoint.xl"></podcastdesktop>
    <podcastdesktop v-if="$vuetify.breakpoint.lg"></podcastdesktop>
    <podcastdesktop v-if="$vuetify.breakpoint.md"></podcastdesktop>
    <podcastmobile v-if="$vuetify.breakpoint.sm"></podcastmobile>
    <podcastmobile v-if="$vuetify.breakpoint.xs"></podcastmobile>
  </v-row>
</template>

<script>
  import podcastdesktop from '@/components/Podcast_Desktop.vue'
  import podcastmobile from '@/components/Podcast_Mobile.vue'

  export default {
    components: {
      podcastdesktop,
      podcastmobile
    }
  }
</script>
