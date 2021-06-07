<template>
  <v-row
    class="ma-0 pa-0"
    style="max-width:100vw;min-width:100vw"
  >
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100%"
    >
      <v-row
        class="ma-0 pa-0 justify-end"
        style="position:relative"
      >
        <v-row
          class="ma-0 mr-3 pa-0 pod d-none"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;top:50%;width:250px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
          align="center"
          justify="center"
        >
          <v-row
            class="ma-0 pa-0"
          >
            <p class="ma-0 ml-5 pa-0" style="width:100%;text-shadow: 2px 2px 5px rgba(0,0,0,0.3)">Vivi Ponce</p>
            <p class="ma-0 ml-5 pa-0" style="width:100%;font-size:10px">CEO LAB</p>
          </v-row>
        </v-row>

        <v-row
          class="ma-0 pa-0"
          style="width:100vw"
        >
          <v-row
            class="ma-0 mx-5 pa-0"
            style="overflow:hidden;height:56vh"
          >
            <v-img
              eager
              class="ma-0 pa-0"
              max-width="100vw"
              height="56vh"
              src="fotos/nosotros.jpg"
              style="color:white"
              position="-40px"
            >

            </v-img>
            <v-row
              class="ma-0 pa-0 pb-8"
              style="z-index:1;position:absolute;max-width:75%;height:56vh"
              align="end"
            >
              <v-row
                class="ma-0 pa-0 d-none"
                style="font-size:25px;line-height:35px;font-family:Space Grotesk;font-weight:600;width:100vw"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;height:70%"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="max-width:100%"
                  >
                    <p class="ma-0 ml-16 pa-0 font-italic" style="color:white;max-width:800px;text-shadow: 2px 2px 5px rgba(0,0,0,.3)">"{{ $store.state.testimonios[1].cita }}".</p>
                  </v-row>
                </v-row>
              </v-row>
            </v-row>
          </v-row>


        </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-5 ml-12 pa-0"
        style="width:100vw;color:black;font-family:Space Grotesk;font-size:44px;font-weight:300"
      >
          <v-row
            class="ma-0 mt-5 ml-8 pa-0"
            style="z-index:1;font-size:40px;font-weight:300"
          >
            <p>NUESTRA HISTORIA</p>
          </v-row>

          <v-row
            class="ma-0 mt-2 pa-0"
            style="width:68%;z-index:1;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"
            align="center"
          >
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.historia[0]"></p><br><br>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.historia[1]"></p><br><br>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.historia[2]"></p>
          </v-row>
      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-16 ml-12 pa-0"
      style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 mt-10 ml-8 pa-0 text-uppercase">Core Team</p>
    </v-row>
    <v-row
      v-for="member in $store.state.equipo"  :key="member.index"
      class="ma-0 mt-16 mb-8 pa-0 pt-16 pb-16"
      style="transform:scale(0.85);position:relative;width:100vw;height:calc( 100vh - 70px );overflow:block"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100vw"
        align="center"
      >
        <v-spacer></v-spacer>

        <v-img
          eager
          position="-130px"
          class="ma-0 pa-0"
          style="min-height:580px;min-width:60%;max-width:60%;text-shadow:2px 2px 2px rgba(0,0,0,0.3);right:5vw;font-size:75px;font-family:Space Grotesk;font-weight:500;color:white"
          :src="$store.state.equipo[member.index].foto"

        >
          <v-row
            class="ma-0 mb-4 mr-5 pb-8 pa-0"
            style="height:100%"
            justify="end"
          >
            {{ $store.state.equipo[member.index].nick }}

          </v-row>
        </v-img>

        <v-row
          class="ma-0 mr-16 pa-0"
          style="left:5vw;position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;width:42vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
          align="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;height:10vh"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="background-color:#03F7F7;max-width:5px;min-height:100%"
              align="center"
            >

            </v-row>
            <v-row
              class="ma-0 ml-6 pa-0"
              style="font-size:18px;font-family:Space Grotesk;font-weight:700;height:100%"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%;font-size:30px"
                align="center"
              >
                {{ $store.state.equipo[member.index].nombre }}<p v-if="$store.state.equipo[member.index].twitterlink" @click="site($store.state.equipo[member.index].twitterlink)" class="ma-0 ml-2 pa-0" style="font-size:20px">{{ $store.state.equipo[member.index].twitter }}</p>
              </v-row>
              <v-row
                class="ma-0 mt-n3 pa-0"
                style="width:100%;font-weight:500;max-height:30%"
                align="top"
              >
                {{ $store.state.equipo[member.index].cargo }}
              </v-row>
            </v-row>
          </v-row>
          <v-row
            class="mt-8 mb-5 mx-12 pa-0"
            style="width:100%;font-size:15px;font-family:Space Grotesk;font-weight:400"
            align="center"
          >
            <p class="ma-0 pa-0" style="width:100%">
              <span v-html="$store.state.equipo[member.index].bio[0]"></span>
            </p>
            <p class="ma-0 mt-3 pa-0" style="width:100%">
              <span v-html="$store.state.equipo[member.index].bio[1]"></span>
            </p>
            <p class="ma-0 mt-3 pa-0" style="width:100%">
              <span v-html="$store.state.equipo[member.index].bio[2]"></span>
            </p>
            <p class="ma-0 mt-3 pa-0" style="font-size:10px">
              <span v-html="$store.state.equipo[member.index].bio[3]"></span>
            </p>
          </v-row>
          <v-row
            class="ma-0 mb-5 ml-11 pa-0"
            style="height:60px"
            align="center"

          >
            <v-icon
              class="ma-0 mr-2 pa-0"

              color= "black"
              @click="site($store.state.equipo[member.index].linkedin)"
            >
              mdi-linkedin
            </v-icon>
            <v-icon
              v-if="$store.state.equipo[member.index].twitterlink"
              class="ma-0 mr-2 pa-0"

              color= "black"
              @click="site($store.state.equipo[member.index].twitterlink)"
            >
              mdi-twitter
            </v-icon>
            <v-icon
              class="ma-0 mr-2 pa-0"

              color= "black"
              @click="site($store.state.equipo[member.index].instagram)"
            >
              mdi-instagram
            </v-icon>
          </v-row>
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 mt-16 mb-10 pa-0"
      style="width:100vw"
      align="center"
    >
      <v-row
        class="ma-0 mt-16 ml-12 pa-0 pt-8"
        style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
      >
        <p class="ma-0 ml-8 pa-0 text-uppercase">Metodología</p>
      </v-row>
      <v-row
        class="ma-0 mt-16 pa-0 pt-8"
        style=";width:100%;height:10vh"
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="max-width:45%"
        >
          <v-row
            class="ma-0 pa-0"
            style="background-color:#03F7F7;max-width:1%;min-height:100%"
          >

          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="max-width:99%;font-size:18px;font-family:Space Grotesk;font-weight:700;height:100%"
          >
            <v-row
              class="ma-0 ml-5 pa-0"
              style="width:100%;font-size:25px"
              align="center"
            >
              INSPIRACIÓN PARA MÉTODO DE TRABAJO
            </v-row>
            <v-row
              class="ma-0 ml-5 pa-0"
              style="width:100%;font-weight:500"
              align="center"
            >
              LAB NOSOTROS (Metodología) DISCOVERY
            </v-row>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-16 mx-16 pa-0"
        style="border-radius:5px"
        justify="center"
        align="center"
      >
        <v-img
          eager
          class="ma-0 my-16 pa-0"
          max-width="50%"
          max-height="100%"
          src="fotos/metodologia.png"
        >
        </v-img>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 mb-10 pa-0"
      style="width:100vw"
    >
      <v-row
        class="ma-0 mt-16 ml-12 pa-0"
        style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
      >
        <p class="ma-0 ml-8 pa-0 text-uppercase">Dream Team</p>
      </v-row>
      <v-row
        class="ma-0 mt-16 pa-0"
        style=";width:100%;height:10vh"
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="max-width:55%"
        >
          <v-row
            class="ma-0 pa-0"
            style="background-color:#03F7F7;max-width:1%;min-height:100%"
          >

          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="max-width:99%;font-size:18px;font-family:Space Grotesk;font-weight:700;height:100%"
          >
            <v-row
              class="ma-0 ml-5 pa-0"
              style="width:100%;font-size:18px;font-weight:500"
              align="center"
            >
              Talentos diversos, multiculturales y multidisciplinarios que hacen realidad una ambición digital. <br>Trabajamos basados en:
            </v-row>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-5 pa-0"
        style="width:100vw"
        justify="center"
        align="center"
      >
        <v-img
          eager
          class="ma-0 mt-16 pa-0"
          max-width="65%"
          max-height="100%"
          src="fotos/dream_team.png"
        >
        </v-img>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 mt-16 mb-10 pa-0"
      style="width:100vw"
    >
      <v-row
        class="ma-0 mt-16 ml-12 pa-0"
        style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
      >
        <p class="ma-0 ml-8 pa-0 text-uppercase">Ciclo de Desarrollo Incremental</p>
      </v-row>
      <v-row
        class="ma-0 mt-5 pa-0"
        style="width:100vw"
        justify="center"
        align="center"
      >
        <v-img
          eager
          class="ma-0 mt-16 pa-0"
          max-width="65%"
          max-height="100%"
          src="fotos/ciclo_desarrollo_incremental.png"
        >
        </v-img>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:130px"
    >
    </v-row>
    <v-row
      class="ma-0 ml-12 pa-0"
      style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 ml-8 pa-0 text-uppercase">¿Quieres ser parte?</p>
    </v-row>
    <v-row
      class="ma-0 mt-12 pa-0"
      style="width:100vw;position:relative;background-color:white;font-size:40px;font-family:Space Grotesk;font-weight:300"
    >
      <v-row
        class="ma-0 mx-5 mb-16 pa-0 pb-16"
        style="overflow:hidden;width:100vw"
      >
        <v-img
          eager
          class="ma-0 mt-8 pa-0"
          max-width="100%"
          height="56vh"
          src="fotos/trabaja-con-nosotros.jpg"
          style="color:white"
        >
          <v-row
            class="ma-0 pa-0"
            style="height:100%;width:100%"
            align="end"
          >
            <v-row
              class="ma-0 ml-8 mb-16 pa-0 pb-8"
              style="font-size:60px;line-height:60px;font-weight:500;max-width:700px"
            >
              <p class="ma-0 pa-0" style="text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Desarrolla tus talentos con nosotros</p>
            </v-row>
            <v-row
              class="ma-0 pa-0"
            >
              <v-spacer></v-spacer>
              <v-icon class="ma-0 mr-16 pa-0" size="300">$bus</v-icon>
            </v-row>
          </v-row>
        </v-img>
        <v-row
          class="ma-0 pa-0"
          style="height:100px;width:100%"
        >
          <v-spacer></v-spacer>
          <v-row
            class="ma-0 mt-8 mr-16 pa-0 text-uppercase d-none"
            style="background-color:#03F7F7;max-width:350px;height:60px;font-size:20px;font-weight:600;color:black;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
            justify="center"
            align="center"
          >
            ¡Trabaja con nosotros!
          </v-row>
        </v-row>
      </v-row>
    </v-row>
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
      },
      site: function (link) {
        window.open(link, "_blank");
      }
    }
  }
</script>


<style lang="sass">
  .tlarge
    font-size: 1000px
  .highlight span
    color: #ADFFFF
  .historia span
    font-weight: 700
  .pod:hover
    cursor: pointer

</style>
