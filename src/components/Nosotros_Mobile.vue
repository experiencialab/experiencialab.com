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
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:black;z-index:1;top:75%;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
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
          <v-img
            eager
            class="ma-0 pa-0"
            max-width="100vw"
            height="56vh"
            src="fotos/nosotros.jpg"
            style="color:white"
            position="center top 30%"
          >

          </v-img>
        </v-row>
      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-10 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
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
      class="ma-0 mt-16 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">Core team</p>
    </v-row>
    <v-row
      v-for="member in $store.state.equipo"  :key="member.index"
      class="ma-0 mt-8 pa-0"
      style="max-width:100vw"
    >
      <v-row
        class="ma-0 mb-16 mx-3 pa-0 pb-16"
        style="overflow:hidden;height:100%"
        align="center"
      >
        <v-img
          eager
          class="ma-0 pa-0"
          height="55vh"
          max-width="100%"
          style="text-shadow:2px 2px 2px rgba(0,0,0,0.3);font-size:40px;font-family:Space Grotesk;font-weight:700;color:white"
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
          class="ma-0 pa-0 justify-center"
          style="width:100vw"
        >
          <v-row
            class="ma-0 mt-n16 pa-0"
            style="font-family:Space Grotesk;font-weight:400;background-color:white;color:black;z-index:1;max-width:90vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);overflow:hidden"

          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:10vh;border-left:5px solid #03F7F7;font-size:18px;font-family:Space Grotesk;font-weight:700"
            >

                <v-row
                  class="ma-0 ml-5 pa-0"
                  style="width:100%;font-size:25px;min-height:70%;max-height:70%"
                  align="center"
                >
                  <p class="ma-0 mt-1 pa-0" tyle="background-color:red">{{ $store.state.equipo[member.index].nombre }}</p><a @click="site($store.state.equipo[member.index].twitterlink)" class="ma-0 mt-2 ml-2 pa-0" style="font-size:14px;color:black">{{ $store.state.equipo[member.index].twitter }}</a>
                </v-row>
                <v-row
                  class="ma-0 ml-5 pa-0"
                  style="max-width:100%;font-weight:500;min-height:30%;max-height:30%"
                >
                  <p class="ma-0 mt-n3 pa-0">{{ $store.state.equipo[member.index].cargo }}</p>
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
                  <p style="width:100%">
                    <span v-html="$store.state.equipo[member.index].bio[0]"></span>
                  </p>
                  <p style="width:100%">
                    <span v-html="$store.state.equipo[member.index].bio[1]"></span>
                  </p>
                  <p style="width:100%">
                    <span v-html="$store.state.equipo[member.index].bio[2]"></span>
                  </p>
                  <p style="font-size:10px;width:100%">
                    <span v-html="$store.state.equipo[member.index].bio[3]"></span>
                  </p>
                </v-row>
                <v-row
                  class="ma-0 ml-11 pa-0"
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
        </v-row>
      </v-row>
    </v-row>

    <v-row
      class="ma-0 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">Metodología</p>
    </v-row>
    <v-row
      class="ma-0 mt-8 pa-0"
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
      >
      </v-img>
    </v-row>
    <v-row
      class="ma-0 mt-16 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">Dream team</p>
    </v-row>
    <v-row
      class="ma-0 mt-8 pa-0"
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
      class="ma-0 mt-10 pa-0"
      style="width:100vw"
      justify="center"
      align="center"
    >
      <v-img
        contain
        eager
        max-width="90%"
        class="ma-0 mt-16 pa-0"
        src="fotos/dream_team.png"
      >
      </v-img>
    </v-row>
    <v-row
      class="ma-0 mt-16 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">Ciclo de Desarrollo Incremental</p>
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
        min-width="90%"
        max-width="90%"
        class="ma-0 mt-16 pa-0"
        src="fotos/ciclo_desarrollo_incremental_mobile.png"
      >
      </v-img>
    </v-row>
    <v-row
      class="ma-0 mt-16 ml-5 pa-0 pt-8"
      style="width:100vw;height:70px;font-size:30px;line-height:48px;font-family:Space Grotesk;font-weight:300;background-color:white;color:black"
    >
      <p class="ma-0 pa-0 text-uppercase">¿Quieres ser parte?</p>
    </v-row>
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100vw;position:relative;background-color:white;font-size:40px;font-family:Space Grotesk;font-weight:300"
    >
      <v-row
        class="ma-0 mt-16 mb-16 pa-0 pb-16"
        style="overflow:hidden;width:100vw"
      >
        <v-img
          eager
          class="ma-0 pa-0"
          max-width="100%"
          height="56vh"
          src="fotos/trabaja-con-nosotros.jpg"
          style="color:white"
        >
          <v-row
            class="ma-0 pa-0 align-end"
            style="height:100%;width:100%"
          >
            <v-row
              class="ma-0 mb-8 pa-0"
              style="font-size:30px;line-height:30px;font-weight:500;max-width:90%"
            >
              <p class="ma-0 mt-16 ml-5 pa-0" style="text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Desarrolla tus talentos con nosotros</p>
            </v-row>
            <v-icon class="ma-0 mb-8 pa-0 pt-0 pb-2 pl-11" style="transform:scale(8)">$bus</v-icon>
          </v-row>
        </v-img>
        <v-row
          class="ma-0 pa-0"
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
                      style="width:100%;color:black;font-size:15px;line-height:20px"
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
                      style="width:100%;color:black;font-size:15px;line-height:20px"
                    >Por favor intenta otra vez.</p>
                  </v-row>
                </v-row>
              </v-row>
            </v-card>
            <v-card
              :class="{'d-none': step0}"
              class="ma-0 pa-0"
              style="height:550px;border-radius:0px !important;background-color:white;font-family:Space Grotesk"
              tile
              align="center"
            >
              <v-card-title
                class="ma-0 mx-5 pa-0 text-uppercase"
                style="height:13vh;font-size:19px"
              >
                Trabaja con nosotros

                <v-icon class="ma-0 ml-2 pa-0" size="30">$bus</v-icon>
              </v-card-title>

              <v-card-text
                class="text-left"
                align="center"
                justify="center"
              >
                <p class="ma-0 pa-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                      :rules="rules.email"
                      dark
                      dense
                      class="email text"
                      label="Email"
                      outlined
                      background-color="#ADFFFF"
                      style="max-width:49.5%"
                      solo
                      flat
                      v-model="email"
                      align="center"
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
                      color="black"
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
                      color="black"
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
                      color="black"
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
      email: '',
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
          this.email = '',
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
              email: [
                v => !!v || 'Requerido',
                v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Email inválido',
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
          email: this.email,
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
