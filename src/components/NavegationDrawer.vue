<template>
  <v-row
    class="ma-0 pa-0 d-none"
    style="height:100%;background-color:red"
  >

    <v-navigation-drawer
      v-model="drawer"
      style="z-index:1000;height:24vh;background-color:transparent"
      fixed
      temporary
      bottom
      flat
    >
      <v-row
        class="ma-0 pa-0"
        style="background-color:#707070;width:100vw;position:absolute;opacity:0.3"
      >

      </v-row>

      <v-list
        class="ma-0 pa-0"
        nav
        dense
      >
        <v-list-item-group
          class="ma-0 pa-0"
          v-model="group"
          active-class=""
        >
          <v-row
            class="ma-0 pa-0 menu-item"
            :class="{ 'd-none': !$store.state.isActive }"
            style="height:8vh"
            align="center"
            @click="$store.commit('header', false)"
          >
            <router-link
              to="/Work"
              class="ma-0 pa-0 menu-item text-center text-decoration-none"
              style="width:100vw;height:8vh;font-size:15px"
              align="center"
            >
              <p class="ma-0 mt-6 pa-0"><span>Work</span></p>
            </router-link>
          </v-row>

          <v-row
            class="ma-0 pa-0 menu-item"
            :class="{ 'd-none': $store.state.isActive }"
            style="height:8vh"
            align="center"
            @click="ajust()"
          >
            <router-link
              to="/"
              class="ma-0 pa-0 menu-item text-center text-decoration-none"
              style="width:100vw;height:8vh;font-size:15px"
              align="center"

            >
              <p class="ma-0 mt-5 pa-0"><span>Home</span></p>
            </router-link>
          </v-row>


          <v-row
            class="ma-0 pa-0 menu-item mobile"
            style="height:8vh"
            @click="myFunction()"
            align="center"
          >
            <v-spacer></v-spacer>
            <a
              class="ma-0 mt-5 pa-0"
              style="font-size:15px;color:#EDEDED !important;height:100%"
              align="center"
            >Instagram</a>
            <v-spacer></v-spacer>
          </v-row>

          <v-row
            class="ma-0 pa-0 menu-item mobile"
            style="height:8vh !important"
            @click="whatsapp()"
          >
            <v-spacer></v-spacer>
            <a
              class="ma-0 mt-5 pa-0"
              style="font-size:15px;color:#EDEDED !important"
            >Whatsapp</a>
            <v-spacer></v-spacer>
          </v-row>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-row>
</template>

<script>

</script>

<style lang="sass">

</style>
