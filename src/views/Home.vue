<template>
  <v-row
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:100vh"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100vw;height:75px"
      >
      </v-row>
      <v-row
        class="ma-0 pa-0 justify-end"
        style="position:relative;width:100vw;height:60vh"
      >
        <v-row
          class="ma-0 mt-3 ml-6 mr-3 pa-0"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;top:50%;width:200px;height:70px;box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.6)"
          align="center"
          justify="center"
        >
          PODCAST
        </v-row>
        <v-row
          class="my-3 mx-6 pa-0"
          style="background-color:green;width:100%"
        >
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mx-6 pa-0"
        style="width:100vw;color:black;font-family:Space Grotesk"
      >
          <v-spacer></v-spacer>

          <p class="ma-6 pa-0" style="width:40%"> {{ $store.state.bajada }} </p>

      </v-row>
    </v-row>
  </v-row>
</template>

<script>

</script>
