<template>
  <v-row
    class="ma-0 pa-0"
    style="max-width:100vw;min-width:100vw"
  >
    
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      logos: []
    }),
    components: {},
    created() {
      var logos = this.$store.state.logos;
      this.logos = logos.sort(function() {return 0.5 - Math.random()});
    },
    methods: {
      spotify: function () {
        window.open("https://open.spotify.com/show/50FARDnK33AjV42wtNbq38?si=V-8U9kkiQuSI54pq2tOAbg&dl_branch=1", "_blank");
      }
    }
  }
</script>


<style lang="sass">
  .tlarge
    font-size: 1000px
  .highlight span
    color: #ADFFFF
  .pod:hover
    cursor: pointer

</style>
