<template>
  <v-row
    class="ma-0 pa-0"
    style="max-width:100vw;min-width:100vw"
  >
    <v-row
      class="ma-0 mt-16 pa-0"
      style="max-width:100%"
    >
      <v-row
        class="ma-0 pa-0 justify-end"
        style="position:relative"
      >
        <v-row
          class="ma-0 mr-3 pa-0 pod d-none"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:#101010;z-index:1;top:50%;width:250px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
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
            style="overflow:hidden"
          >
            <img
              contain
              class="ma-0 pa-0"
              src="fotos/footer_team.png"

              position="0px"
              style="max-width:100%;opacity:.85"


            />
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
        style="width:100vw;color:#101010;font-family:Space Grotesk;font-size:44px;font-weight:300"
      >
          <v-row
            class="ma-0 mt-5 ml-8 pa-0"
            style="width:25%;z-index:1;font-size:35px;font-weight:300"
          >
            <p>EN LAB CREEMOS QUE</p>
          </v-row>

          <v-row
            class="ma-0 mt-2 pa-0"
            style="width:68%;z-index:1;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"
            align="center"
          >
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.creemos"></p>
          </v-row>
      </v-row>


      <v-row
        class="ma-0 mt-15 ml-12 pa-0"
        style="width:100vw;color:#101010;font-family:Space Grotesk;font-size:44px;font-weight:300"
      >
          <v-row
            class="ma-0 mt-5 ml-8 pa-0"
            style="width:25%;z-index:1;font-size:35px;font-weight:300"
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
      class="ma-0 mt-15 ml-12 pa-0"
      style="width:100vw;color:#101010;font-family:Space Grotesk;font-size:44px;font-weight:300"
    >
        <v-row
          class="ma-0 mt-5 ml-8 pa-0"
          style="width:25%;z-index:1;font-size:35px;font-weight:300"
        >
          <p>CORE TEAM</p>
        </v-row>
    </v-row>


    <v-row
      class="ma-0 pa-0"
      v-for="member in $store.state.equipo"  :key="member.index"
    >
      <v-row
        v-if="member.index % 2 == 1"
        class="ma-0 mt-6 mb-8 pa-0 pt-16 pb-16"
        style="transform:scale(0.85);position:relative;width:100vw;height:calc( 100vh - 70px );overflow:block"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100vw"
          align="center"
        >
          <v-spacer></v-spacer>
          <v-row
            class="ma-0 pa-0"
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-once="false"
            data-aos-offset="200"
            style="right:5vw;min-height:580px;min-width:60%;max-width:60%"
          >
            <v-img
              contain
              eager
              position="0px"
              class="ma-0 pa-0"
              style="opacity:.85;text-shadow:2px 2px 2px rgba(0,0,0,0.3);font-size:75px;font-family:Space Grotesk;font-weight:500;color:white"
              :src="$store.state.equipo[member.index - 1].foto"

            >
              <v-row
                class="ma-0 mb-4 mr-10 pb-8 pa-0"
                style="height:100%"
                justify="end"
              >
                {{ $store.state.equipo[member.index - 1].nick }}

              </v-row>
            </v-img>
          </v-row>


          <v-row
            class="ma-0 mr-16 pa-0"
            style="left:5vw;position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:#F4F4F4;color:#101010;z-index:1;width:42vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
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
                style="font-size:18px;font-family:Space Grotesk;font-weight:700;height:100%;width:20px"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;font-size:30px"
                  align="center"
                >
                  {{ $store.state.equipo[member.index - 1].nombre }}<p v-if="$store.state.equipo[member.index - 1].twitterlink" @click="site($store.state.equipo[member.index - 1].twitterlink)" class="ma-0 ml-2 pa-0" style="font-size:20px">{{ $store.state.equipo[member.index - 1].twitter }}</p>
                </v-row>
                <v-row
                  class="ma-0 mt-n3 pa-0"
                  style="width:100%;font-weight:500;max-height:30%"

                >
                  {{ $store.state.equipo[member.index - 1].cargo }}
                </v-row>
              </v-row>
            </v-row>
            <v-row
              class="mb-5 mx-12 pa-0"
              style="width:100%;font-size:15px;font-family:Space Grotesk;font-weight:400"
              align="center"
            >
              <p class="ma-0 pa-0" style="width:100%">
                <span v-html="$store.state.equipo[member.index - 1].bio[0]"></span>
              </p>
              <p v-if="$store.state.equipo[member.index - 1].bio[1]" class="ma-0 mt-3 pa-0" style="width:100%">
                <span v-html="$store.state.equipo[member.index - 1].bio[1]"></span>
              </p>
              <p v-if="$store.state.equipo[member.index - 1].bio[2]" class="ma-0 mt-3 pa-0" style="width:100%">
                <span v-html="$store.state.equipo[member.index - 1].bio[2]"></span>
              </p>
              <p class="ma-0 mt-3 pa-0" style="font-size:11px">
                <span v-html="$store.state.equipo[member.index - 1].bio[3]"></span>
              </p>
            </v-row>
            <v-row
              class="ma-0 mb-5 ml-11 pa-0"
              style="height:60px"
              align="center"

            >
              <v-icon
                class="ma-0 mr-2 pa-0"
                v-if="$store.state.equipo[member.index - 1].linkedin"
                color= "#101010"
                @click="site($store.state.equipo[member.index - 1].linkedin)"
              >
                mdi-linkedin
              </v-icon>
              <v-icon
                v-if="$store.state.equipo[member.index - 1].twitterlink"
                class="ma-0 mr-2 pa-0"
                color= "#101010"
                @click="site($store.state.equipo[member.index - 1].twitterlink)"
              >
                mdi-twitter
              </v-icon>
              <v-icon
                class="ma-0 mr-2 pa-0"
                v-if="$store.state.equipo[member.index - 1].instagram"
                color= "#101010"
                @click="site($store.state.equipo[member.index - 1].instagram)"
              >
                mdi-instagram
              </v-icon>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        v-if="member.index % 2 == 0"
        class="ma-0 mt-16 mb-8 pa-0 pt-16 pb-16"
        style="transform:scale(0.85);position:relative;width:100vw;height:calc( 100vh - 70px );overflow:block"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100vw"
          align="center"
        >

          <v-row
            class="ma-0 pa-0"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-once="false"
            style="left:5vw;min-height:580px;min-width:60%;max-width:60%;"
          >
            <v-img
              contain
              eager
              position="0px"
              class="ma-0 pa-0"
              style="opacity:.85;transform:scaleX(-1);text-shadow:2px 2px 2px rgba(0,0,0,0.3);font-size:75px;font-family:Space Grotesk;font-weight:500;color:white"
              :src="$store.state.equipo[member.index - 1].foto"

            >
              <v-row
                class="ma-0 mb-4 mr-10 pb-8 pa-0"
                style="transform:scaleX(-1);height:100%"
                justify="start"
              >
                {{ $store.state.equipo[member.index - 1].nick }}

              </v-row>
            </v-img>
          </v-row>

          <v-row
            class="ma-0 mr-16 pa-0"
            style="right:-0;position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:#F4F4F4;color:#101010;z-index:1;width:42vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
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
                style="font-size:18px;font-family:Space Grotesk;font-weight:700;height:100%;width:20px"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;font-size:30px"
                  align="center"
                >
                  {{ $store.state.equipo[member.index - 1].nombre }}<p v-if="$store.state.equipo[member.index - 1].twitterlink" @click="site($store.state.equipo[member.index - 1].twitterlink)" class="ma-0 ml-2 pa-0" style="font-size:20px">{{ $store.state.equipo[member.index - 1].twitter }}</p>
                </v-row>
                <v-row
                  class="ma-0 mt-n3 pa-0"
                  style="width:100%;font-weight:500;max-height:30%"

                >
                  {{ $store.state.equipo[member.index - 1].cargo }}
                </v-row>
              </v-row>
            </v-row>
            <v-row
              class="mb-5 mx-12 pa-0"
              style="width:100%;font-size:15px;font-family:Space Grotesk;font-weight:400"
              align="center"
            >
              <p class="ma-0 pa-0" style="width:100%">
                <span v-html="$store.state.equipo[member.index - 1].bio[0]"></span>
              </p>
              <p v-if="$store.state.equipo[member.index - 1].bio[1]" class="ma-0 mt-3 pa-0" style="width:100%">
                <span v-html="$store.state.equipo[member.index - 1].bio[1]"></span>
              </p>
              <p v-if="$store.state.equipo[member.index - 1].bio[2]" class="ma-0 mt-3 pa-0" style="width:100%">
                <span v-html="$store.state.equipo[member.index - 1].bio[2]"></span>
              </p>
              <p class="ma-0 mt-3 pa-0" style="font-size:11px">
                <span v-html="$store.state.equipo[member.index - 1].bio[3]"></span>
              </p>
            </v-row>
            <v-row
              class="ma-0 mb-5 ml-11 pa-0"
              style="height:60px"
              align="center"

            >
              <v-icon
                class="ma-0 mr-2 pa-0"
                v-if="$store.state.equipo[member.index - 1].linkedin"
                color= "#101010"
                @click="site($store.state.equipo[member.index - 1].linkedin)"
              >
                mdi-linkedin
              </v-icon>
              <v-icon
                v-if="$store.state.equipo[member.index - 1].twitterlink"
                class="ma-0 mr-2 pa-0"
                color= "#101010"
                @click="site($store.state.equipo[member.index - 1].twitterlink)"
              >
                mdi-twitter
              </v-icon>
              <v-icon
                class="ma-0 mr-2 pa-0"
                v-if="$store.state.equipo[member.index - 1].instagram"
                color= "#101010"
                @click="site($store.state.equipo[member.index - 1].instagram)"
              >
                mdi-instagram
              </v-icon>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100vw"
      align="center"
    >
      <v-row
        class="ma-0 mt-5 ml-12 pa-0"
        style="width:100vw;color:#101010;font-family:Space Grotesk;font-size:44px;font-weight:300"
      >
          <v-row
            class="ma-0 mt-5 ml-8 pa-0"
            style="width:25%;z-index:1;font-size:35px;font-weight:300"
          >
            <p>METODOLOGÍA</p>
          </v-row>

          <v-row
            class="ma-0 mt-2 pa-0"
            style="width:68%;z-index:1;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"
            align="center"
          >
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[0]"></p><br>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[1]"></p><br>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[2]"></p><br>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[3]"></p><br>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[4]"></p>
          </v-row>
      </v-row>

      <v-row
        class="ma-0 mt-16 pa-0 pt-16"
        style=";width:100%;height:10vh"
        justify="center"
      >
        <v-row
          class="ma-0 mt-16 pa-0"
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
        class="ma-0 mt-16 pa-0"
        style="width:100%;border-radius:5px"
        justify="center"
        align="center"
      >
        <v-img
          eager
          class="ma-0 my-16 pa-0"
          max-width="50%"
          max-height="100%"
          src="fotos/metodologia.png"
          style="opacity:.8"
        >
        </v-img>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 mt-16 mb-10 pa-0"
      style="width:100vw"
    >
      <v-row
        class="ma-0 mt-15 mb-15 ml-12 pa-0"
        style="width:100vw;color:#101010;font-family:Space Grotesk;font-size:44px;font-weight:300"
      >
          <v-row
            class="ma-0 mt-5 ml-8 pa-0"
            style="width:25%;z-index:1;font-size:35px;font-weight:300"
          >
            <p>DREAM TEAM</p>
          </v-row>

          <v-row
            class="ma-0 mt-2 pa-0"
            style="width:68%;z-index:1;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"
            align="center"
          >
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.dream[0]"></p>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.dream[1]"></p>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.dream[2]"></p>
          </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-16 pa-0"
        style=";width:100%;height:10vh"
        justify="center"
      >
        <v-row
          class="ma-0 mt-16 pa-0"
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
          style="opacity:.8"
        >
        </v-img>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 mt-16 mb-10 pa-0"
      style="width:100vw"
    >
      <v-row
        class="ma-0 mt-15 mb-15 ml-12 pa-0"
        style="width:100vw;color:#101010;font-family:Space Grotesk;font-size:44px;font-weight:300"
      >
          <v-row
            class="ma-0 mt-5 ml-8 pa-0"
            style="width:25%;z-index:1;font-size:35px;font-weight:300"
          >
            <p>CICLO DE DESARROLLO INCREMENTAL</p>
          </v-row>

          <v-row
            class="ma-0 mt-2 pa-0"
            style="width:68%;z-index:1;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"
            align="center"
          >
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.ciclo[0]"></p>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.ciclo[1]"></p>
            <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.ciclo[2]"></p>
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
          src="fotos/ciclo_desarrollo_incremental.png"
          style="opacity:.8"
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
      style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
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
          src="fotos/LAB_team.png"
          style="color:white;opacity:.85"
          position=""
        >
          <v-row
            class="ma-0 pa-0"
            style="height:100%;width:100%;font-weight:500"
            justify="center"
            align="center"
          >



            <v-row
              class="ma-0 pa-0"
              justify="center"
              align="center"
            >
              <p class="ma-0 pa-0" style="text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Desarrolla tus talentos con nosotros</p>

              <v-icon class="ma-0 ml-5 pa-0" size="100">$bus</v-icon>
            </v-row>
          </v-row>
        </v-img>
        <v-row
          class="ma-0 pa-0"
          style="height:100px;width:100%"
          align="center"
        >
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            width="500"
            style="z-index:100000"
            eager
            @click:outside="onCancel"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-row
                class="ma-0 mt-8 mr-16 pa-0 text-uppercase trabaja"
                style="max-width:350px;height:60px;font-weight:600;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);font-size:20px;font-family:Space Grotesk"
                :ripple="false"
                tile
                plain
                v-bind="attrs"
                v-on="on"
                align="center"
                justify="center"
              >
                ¡Trabaja con nosotros!
              </v-row>
            </template>
            <v-card
              :class="{'d-none': !step0}"
              class="ma-0 pa-0"
              style="height:540px;border-radius:0px !important;background-color:white;font-family:Space Grotesk"
              tile
              align="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="height:100%;z-index:1199;background-color:white"
                align="center"
                justify="center"
              >
                <v-img
                  :class="{'d-none': !step1}"
                  eager
                  max-height="150px"
                  max-width="300px"
                  src="animation.gif"

                ></v-img>
                <v-row
                  :class="{'d-none': step1}"
                  class="ma-0 pa-0"
                >
                  <v-row
                    :class="{'d-none': step2}"
                    class="ma-0 pa-0"
                    style="width:100%;height:100%"
                    align="center"
                    justify="center"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="height:300px"
                      align="center"
                    >
                      <v-icon
                        class="ma-0 pa-0"
                        style="width:100%;transform:scale(5);transform-origin:center"
                        color= "#03F7F7"
                        x-large
                      >
                        mdi-check
                      </v-icon>
                      <p
                        class="ma-0 pa-0"
                        style="width:100%;color:#03F7F7;font-size:30px;line-height:30px"
                      >Mensaje enviado</p>
                    </v-row>
                    <p
                      class="ma-0 pa-0"
                      style="width:100%;color:#101010;font-size:15px;line-height:20px"
                    >Gracias por tu interés.<br>Nos pondremos en contacto contigo.</p>
                  </v-row>
                  <v-row
                    :class="{'d-none': !step2}"
                    class="ma-0 pa-0"
                    style="width:100%;height:100%"
                    align="center"
                    justify="center"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="height:300px"
                      align="center"
                    >
                      <v-icon
                        class="ma-0 pa-0"
                        style="width:100%;transform:scale(5);transform-origin:center"
                        color= "red"
                        x-large
                      >
                        mdi-close-circle-outline
                      </v-icon>
                      <p
                        class="ma-0 pa-0"
                        style="width:100%;color:red;font-size:30px;line-height:30px;opacity:.4"
                      >Un error ha ocurrido</p>
                    </v-row>
                    <p
                      class="ma-0 pa-0"
                      style="width:100%;color:#101010;font-size:15px;line-height:20px"
                    >Por favor intenta otra vez.</p>
                  </v-row>
                </v-row>
              </v-row>
            </v-card>
            <v-card
              :class="{'d-none': step0}"
              class="ma-0 pa-0"
              style="height:540px;border-radius:0px !important;background-color:white;font-family:Space Grotesk"
              tile
              align="center"
            >
              <v-card-title
                class="ma-0 mx-5 pa-0 text-uppercase"
                style="height:13vh"
              >
                Trabaja con nosotros
                <v-spacer></v-spacer>

                <v-icon class="ma-0 pa-0" size="60">$bus</v-icon>
              </v-card-title>

              <v-card-text
                class="text-left"
                align="center"
                justify="center"
              >
                <p class="ma-0 pa-0" v-html="$store.state.trabaja"></p>
              </v-card-text>
              <v-row
                class="ma-0 pa-0"
                style="position:relative;width:100%;font-family:Space Grotesk"
                align="center"
                justify="center"
              >
                <v-form ref="entryForm" lazy-validation eager>
                  <v-row
                    class="ma-0 pa-0"
                    style="max-width:97%"
                    align="center"
                  >
                    <v-text-field
                      required
                      :rules="rules.name"
                      dark
                      class="nombre text"
                      label="Nombre"
                      background-color="#ADFFFF"
                      style="max-width:49.5%"
                      solo
                      dense
                      flat
                      v-model="name"
                      align="center"
                    ></v-text-field>
                    <v-spacer></v-spacer>

                    <v-text-field
                      required
                      :rules="rules.whats"
                      dark
                      dense
                      class="whats text"
                      label="Whatsapp"
                      outlined
                      background-color="#ADFFFF"
                      style="max-width:49.5%"
                      solo
                      flat
                      v-model="whats"
                      align="center"
                      type="number"
                      min="10000000"
                    ></v-text-field>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="max-width:97%"
                    align="center"
                  >
                    <v-text-field
                      required
                      :rules="rules.linkedin"
                      dark
                      dense
                      class="text"
                      label="Linkedin"
                      outlined
                      background-color="#ADFFFF"
                      width="100%"
                      solo
                      flat
                      v-model="linkedin"
                      align="center"
                    ></v-text-field>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="max-width:97%"
                    align="center"
                  >
                    <v-textarea
                      counter="500"
                      :rules="rules.msj"
                      v-model="message"
                      label="Mensaje"
                      no-resize
                      outlined
                      color="#101010"
                      background-color="#ADFFFF"
                      solo
                      rows="4"
                      row-height="15"
                      flat
                    ></v-textarea>
                  </v-row>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn

                      @click="onCancel"
                      color="#101010"
                      text
                      depressed
                      tile
                      v-ripple="false"
                      plain
                    >
                      Cancelar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn

                      @click="onSubmit"
                      color="#101010"
                      text
                      depressed
                      tile
                      v-ripple="false"
                      plain
                    >
                      Enviar
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-row>
            </v-card>
          </v-dialog>
        </v-row>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  import emailjs from 'emailjs-com';
  import{ init } from 'emailjs-com';
  init("user_uRTEJMp7CqTbbwVm6yYMz");

  export default {
    data: () => ({
      rules: {},
      step0: false,
      step1: true,
      step2: true,
      logos: [],
      dialog: false,
      disable: false,
      text: false,
      open: true,
      boton: "Enviar",
      whats: '',
      name: '',
      linkedin: '',
      message: ''
    }),
    components: {},
    watch: {
      dialog: function (val) {
        if (val == false) {
          this.step0 = false,
          this.step1 = true,
          this.rules = {},
          this.name = '',
          this.whats = '',
          this.linkedin = '',
          this.message = ''
        }
      }
    },
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
      },
      isURL(str) {
        let url;

        try {
          url = new URL(str);
        } catch (_) {
          return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
      },
      onCancel() {
        this.step0 = false,
        this.step1 = true,
        this.dialog = false
      },
      onSubmit() {
          //replace empty rules with real rules
          this.rules = {
              name: [
                v => !!v || 'Requerido',
                v => v.length >= 8 || 'Nombre muy corto',
              ],
              whats: [
                v => !!v || 'Requerido',
                v => v.length >= 8 || 'Verifica tu número',
              ],
              linkedin: [
                v => !!v || "Requerido",
                v => this.isURL(v) || "URL inválido",
              ],
              msj: [
                v => !!v || 'Requerido',
                v => v.length <= 500 || 'Máximo 500 caracteres',
              ]
          }
          this.$nextTick(() => {
              if(this.$refs.entryForm.validate()) {
                this.step0 = !this.step0
                this.sendEmail()
              }
          })
      },
      sleep(sec) {
        return new Promise((resolve) => {
          setTimeout(resolve, sec);
        });
      },
      async tantan(templateParams) {
        var r = await emailjs.send('service_8etpp5j', 'template_h955ycq', templateParams)
          .then(function(response) {
            if (response) {
              return true
            } else {
              return false
            }
          }, function(error) {
            console.log(error)
            return false
          });
        return r
      },
      async sendEmail () {
        var templateParams = {
          name: this.name,
          whats: this.whats,
          linkedin: this.linkedin,
          message: this.message
        };
        var results = await this.tantan(templateParams);
        this.step1 = !this.step1

        if (results == true) {
          this.step2 = false
          await this.sleep(5000)
          this.dialog = false
        } else {
          this.step2 = true
          await this.sleep(5000)
          this.step0 = !this.step0
          this.step1 = !this.step1
        }
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
