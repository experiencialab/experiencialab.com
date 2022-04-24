<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100vw;overflow:hidden"
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
          class="ma-0 pa-0 d-none"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:#101010;z-index:1;top:75%;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
          align="center"
          justify="center"
          @click="spotify()"
        >
          PODCAST <v-icon class="ma-0 ml-7 pa-0" style="transform:scale(1.5)">$camion</v-icon>
        </v-row>
        <v-row
          class="ma-0 mt-1 pa-0"
          style="height:max-63vh;width:100vw;overflow:hidden"
        >
          <img
            class="ma-0 pa-0"
            style="opacity:.85;width:100%"
            src="fotos/footer_team.png"

          />
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 ml-5 mt-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">En LAB creemos que</p>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw"
    >
      <p class="ma-0 mb-5 ml-10 mr-5 pa-0 pl-6 historia" v-html="$store.state.creemos"></p><br>
    </v-row>

    <v-row
      class="ma-0 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">Nuestra historia</p>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw"
    >
      <p class="ma-0 mb-5 ml-10 mr-5 pa-0 pl-6 historia" v-html="$store.state.historia[0]"></p><br><br>
      <p class="ma-0 mb-5 ml-10 mr-5 pa-0 pl-6 historia" v-html="$store.state.historia[1]"></p><br><br>
      <p class="ma-0 mb-5 ml-10 mr-5 pa-0 pl-6 historia" v-html="$store.state.historia[2]"></p>
    </v-row>
    <v-row
      class="ma-0 mt-8 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">Core team</p>
    </v-row>
    <v-row
      v-for="member in $store.state.equipo"  :key="member.index"
      class="ma-0 mt-0 pa-0"
      style="max-width:100vw"
    >
      <v-row
        class="ma-0 mb-16 mx-3 pa-0 pb-16"
        style="overflow:hidden;height:100%"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="false"
          style="height:55vh;width:100%"
        >
          <v-img
            eager
            class="ma-0 pa-0"
            height="55vh"
            max-width="100%"
            style="opacity:.85;text-shadow:2px 2px 2px rgba(0,0,0,0.3);font-size:40px;font-family:Space Grotesk;font-weight:700;color:white"
            :src="$store.state.equipo[member.index - 1].foto"

          >
            <v-row
              class="ma-0 mb-4 ml-5 pb-8 pa-0"
              style="height:100%"

            >
              {{ $store.state.equipo[member.index - 1].nick }}

            </v-row>
          </v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0 justify-center"
          style="width:100vw"
        >
          <v-row
            class="ma-0 mt-n16 pa-0"
            style="font-family:Space Grotesk;font-weight:400;background-color:white;color:#101010;z-index:1;max-width:90vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);overflow:hidden"

          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:10vh;border-left:5px solid #03F7F7;font-size:18px;font-family:Space Grotesk;font-weight:700"
            >

                <v-row
                  class="ma-0 ml-5 pa-0"
                  style="width:100%;font-size:20px;min-height:70%;max-height:70%"
                  align="center"
                >
                  <p class="ma-0 mt-1 pa-0" tyle="background-color:red">{{ $store.state.equipo[member.index - 1].nombre }}</p><a @click="site($store.state.equipo[member.index - 1].twitterlink)" class="ma-0 mt-2 ml-2 pa-0" style="font-size:14px;color:#101010">{{ $store.state.equipo[member.index -1 ].twitter }}</a>
                </v-row>
                <v-row
                  class="ma-0 ml-5 mt-1 pa-0"
                  style="max-width:100%;font-size:12px;font-weight:400;min-height:30%;max-height:30%;line-height:12px"
                >
                  <p class="ma-0 mt-n3 pa-0">{{ $store.state.equipo[member.index - 1].cargo }}</p>
                </v-row>

            </v-row>
            <v-row
              class="ma-0 pa-0"
              align="center"
              justify="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100vw"
              >
                <v-row
                  class="mt-5 mx-12 pa-0"
                  style="width:100%;font-size:15px;font-family:Space Grotesk;font-weight:400"
                  align="center"
                >
                  <p v-if="$store.state.equipo[member.index - 1].bio[0]" style="width:100%">
                    <span v-html="$store.state.equipo[member.index - 1].bio[0]"></span>
                  </p>
                  <p v-if="$store.state.equipo[member.index - 1].bio[1]" style="width:100%">
                    <span v-html="$store.state.equipo[member.index - 1].bio[1]"></span>
                  </p>
                  <p v-if="$store.state.equipo[member.index - 1].bio[2]" style="width:100%">
                    <span v-html="$store.state.equipo[member.index - 1].bio[2]"></span>
                  </p>
                  <p style="font-size:11px;width:100%">
                    <span v-html="$store.state.equipo[member.index - 1].bio[3]"></span>
                  </p>
                </v-row>
                <v-row
                  class="ma-0 ml-11 pa-0"
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
      </v-row>
    </v-row>

    <v-row
      class="ma-0 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">Metodología</p>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw"
    >
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[0]"></p><br>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[1]"></p><br>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[2]"></p><br>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[3]"></p><br>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.metodologia[4]"></p>
    </v-row>
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100%;height:10vh"
    >
      <v-row
        class="ma-0 pa-0"
        style=""
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="background-color:#03F7F7;min-width:5px;max-width:5px;min-height:100%"
        >

        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:95%;font-size:15px;font-family:Space Grotesk;font-weight:500;height:100%"
        >
          <v-row
            class="ma-0 ml-5 pa-0"
            style="width:100%;font-size:20px"
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
      class="ma-0 mt-5 pa-0"
      style="width:100vw"
      justify="center"
      align="center"
    >
      <v-img
        contain
        eager
        max-width="90%"
        class="ma-0 mt-16 pa-0"
        src="fotos/metodologia.png"
        style="opacity:.85"
      >
      </v-img>
    </v-row>
    <v-row
      class="ma-0 mt-16 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">Dream team</p>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
      align="center"
    >
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.dream[0]"></p>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.dream[1]"></p>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.dream[2]"></p>
    </v-row>
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100%;height:10vh"
    >
      <v-row
        class="ma-0 pa-0"
        style=""
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="background-color:#03F7F7;min-width:5px;max-width:5px;min-height:100%"
        >

        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:95%;font-size:15px;font-family:Space Grotesk;font-weight:500;height:100%"
        >
          <v-row
            class="ma-0 ml-5 pa-0"
            style="width:100%;font-size:20px"
            align="center"
          >
          Talentos diversos, multiculturales y multidisciplinarios que hacen realidad una ambición digital. <br>Trabajamos basados en:
          </v-row>
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100vw"
      justify="center"
      align="center"
    >
      <v-img
        class="ma-0 mt-16 pa-0"
        src="fotos/foto.png"
        style="opacity:.85"
      />
    </v-row>
    <v-row
      class="ma-0 mt-16 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">Ciclo de Desarrollo Incremental</p>
    </v-row>
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100%"
      align="center"
    >
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.ciclo[0]"></p>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.ciclo[1]"></p>
      <p class="ma-0 mt-5 ml-16 mr-10 pa-0 pl-6 historia" v-html="$store.state.ciclo[2]"></p>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw"
      justify="center"
      align="center"
    >
      <v-img
        contain
        eager
        min-width="90%"
        max-width="90%"
        class="ma-0 mt-16 pa-0"
        src="fotos/ciclo_desarrollo_incremental_mobile.png"
        style="opacity:.85"
      >
      </v-img>
    </v-row>
    <v-row
      class="ma-0 mt-16 pa-0 pt-8"
      style="width:100vw;font-size:30px;line-height:48px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 ml-5 pa-0 text-uppercase">¿Quieres ser parte?</p>
    </v-row>

    <v-img
      contain
      eager
      class="ma-0 mt-5 pa-0"
      src="fotos/LAB_team.png"
      style="opacity:.85;color:white"
    >
      <v-row
        class="ma-0 pa-0 align-end"
        style="height:100%;width:100%"
        justify="center"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%;font-size:15px;line-height:30px;font-weight:500"
          justify="center"
          align="center"
        >
          <p class="ma-0 pa-0" style="text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Desarrolla tus talentos con nosotros</p>
          <v-icon x-large class="ma-0 ml-5 pa-0" style="scaleX(2)">$bus</v-icon>
        </v-row>
      </v-row>
    </v-img>
    <v-row
      class="ma-0 mb-16 pa-0"
      style="height:100px;width:100%"
      align="center"
      justify="center"
    >
      <v-dialog
        v-model="dialog"
        width="550"
        style="z-index:100000"
        eager
        @click:outside="onCancel"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-row
            class="ma-0 mt-8 pa-0 text-uppercase trabaja"
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
          style="height:550px;border-radius:0px !important;background-color:white;font-family:Space Grotesk"
          tile
          align="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="height:100%;z-index:99119999;background-color:white"
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
          style="height:550px;border-radius:0px !important;background-color:white;font-family:Space Grotesk;overflow:hidden"
          tile
          align="center"
        >
          <v-card-title
            class="ma-0 mx-5 pa-0 text-uppercase"
            style="height:7vh;font-size:19px"
          >
            Trabaja con nosotros

            <v-icon class="ma-0 ml-2 pa-0" size="30">$bus</v-icon>
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
    components: {
    },
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
      whatsapp: function () {
        window.open("https://wa.me/+56994319115", "_blank");
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
                v => v.length >= 8 || 'Verifica tu número',              ],
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
  .pod:hover
    cursor: pointer
</style>
