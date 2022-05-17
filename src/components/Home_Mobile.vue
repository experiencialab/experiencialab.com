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
        style="position:relative;min-height:500px"
      >
        <v-row
          class="ma-0 pa-0"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:#101010;z-index:1;top:75%;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
          align="center"
          justify="center"
          @click="spotify()"
        >
          PODCAST <v-icon class="ma-0 ml-7 pa-0" style="transform:scale(1.5)">$camion</v-icon>
        </v-row>
        <v-row
          class="ma-0 mt-1 pa-0"
          style="opacity:.85;width:100vw;overflow:hidden"
        >
          <video
            class="ma-0 pa-0"
            playsinline autoplay muted loop>
            <source src='videos/LAB_chico.mp4' type='video/mp4'>
          </video>
          <!-- <VideoParallax class="ma-0 pa-0" style="width:100%;transform-origin:top center" src="videos/LAB_chico.mp4">

            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:56vh"
            >
            </v-row>

          </VideoParallax> -->
          <v-row
            class="ma-0 mt-n5 pa-0"
            style="z-index:1;position:absolute;width:100%"
          >
            <v-carousel
              class="ma-0 pa-0"
              hide-delimiters
              :show-arrows="false"
              continuos
              cycle
              style="height:450px"
            >
              <v-carousel-item
                class="ma-0 pa-0"
                transition="my-carousel"
                v-for="(item, index) in $store.state.titulares" :key="index"
                style="font-size:36px;font-family:Space Grotesk;font-weight:700;width:100vw"
                :class="{'tlarge': $vuetify.breakpoint.md}"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;height:60vh"
                >
                  <v-row
                    class="ma-0 ml-3 pa-0"
                    style="min-height:25vh;line-height:35px;color:white;text-shadow: 2px 2px 5px rgba(0,0,0,0.3)"
                    align="center"
                  >

                    <p class="mt-n16 highlight" style="max-width:80%" v-html="item"></p>
                  </v-row>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 pa-0 justify-center"
        style="position:relative;width:100vw;color:#101010;font-family:Space Grotesk;font-size:16px;font-weight:300"
        align="center"
      >
          <p class="ma-0 mx-8 mt-8 pa-0" style="z-index:2;width:100%;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"> {{ $store.state.bajada }} </p>

          <v-row
            class="ma-0 mt-16 pa-0"
            style="z-index:2;width:100%;height:15vh"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%"
            >
              <v-row
                class="ma-0 mb-2 pa-0"
                style="width:108"
                align="center"
                justify="center"
              >
                Hemos coordinado exitosamente
              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:100%;height:80%"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:30%;border-right:1px solid #03F7F7"
                >
                  <p class="ma-auto pa-0 text-center" style="font-size:35px;max-height:80%;width:100%">20+</p>
                  <p class="ma-0 mb-3 pa-0 text-center" style="font-size:15px;width:100%">Experiencias</p>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:30%;border-right:1px solid #03F7F7"
                >
                  <p class="ma-auto pa-0 text-center" style="font-size:35px;max-height:80%;width:100%">30+</p>
                  <p class="ma-0 mb-3 pa-0 text-center" style="font-size:15px;width:100%">Equipos</p>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:40%;border-right:1px solid #03F7F7"
                >
                  <p class="ma-auto mt-2 pa-0 text-center" style="font-size:35px;max-height:80%;width:100%">1000+</p>
                  <p class="ma-0 mb-3 pa-0 text-center" style="font-size:15px;line-height:16px;width:100%">Profesionales y Usuarios</p>
                </v-row>
              </v-row>
            </v-row>
          </v-row>

          <v-icon class="ma-0 pa-0" style="z-index:1;top:190px;transform:scale(12);position:absolute;opacity:.25">$corazon</v-icon>

      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-16 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">Servicios</p>
    </v-row>
    <v-row
      v-for="servicio in $store.state.servicios"  :key="servicio.index"
      class="ma-0 mt-8 pa-0"
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
          data-aos-duration="2000"
          data-aos-once="false"
          style="height:55vh;width:100%"
        >
          <v-img
            eager
            class="ma-0 pa-0"
            height="55vh"
            max-width="100%"
            style="opacity:.85;text-shadow:2px 2px 2px rgba(0,0,0,0.3);font-size:130px;font-family:Space Grotesk;font-weight:700;color:white"
            :src="$store.state.servicios[servicio.index].foto"
            position="0px"
          >
            <v-row
              class="ma-0 mb-4 pb-8 pa-0"
              style="height:100%"
              align="center"
              justify="center"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-delay="1000"
              data-aos-once="false"
            >
              {{ $store.state.servicios[servicio.index].letra }}

            </v-row>
          </v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0 justify-center"
          style="width:100vw"
          align="center"
        >
          <v-row
            class="ma-0 mt-n16 pa-0"
            style="font-family:Space Grotesk;font-weight:400;background-color:white;color:#101010;z-index:1;max-width:90vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:10vh"
              align="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="background-color:#03F7F7;max-width:2%;min-height:100%"
                align="center"
              >

              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:98%;min-height:100%;font-size:18px;font-family:Space Grotesk;font-weight:700"
                align="center"
              >
                <p
                  class="ma-0 ml-5 pa-0"

                >
                  {{ $store.state.servicios[servicio.index].titulo }}
                </p>
              </v-row>
            </v-row>
            <v-row
              class="my-3 mx-5 pa-0"
              style="width:100%;font-size:15px;font-family:Space Grotesk;font-weight:400"

            >
              <p class="ma-0 mb-10 pa-0">
                <span v-html="$store.state.servicios[servicio.index].texto"></span>
              </p>
            </v-row>
            <v-row
              class="ma-0 mb-5 pa-0"
              style="height:60px"
              align="center"
              justify="center"
            >
              <video
                v-if="servicio.index == 0"
                class="ma-0 mt-n16 pa-0"
                style="height:150px;margin-top:-100px !important"
                playsinline autoplay muted loop>
                <source src='iconos/LAB-Lancha.mp4' type='video/mp4'>
              </video>
              <video
                v-if="servicio.index == 1"
                class="ma-0 mt-n16 pa-0"
                style="height:100px"
                playsinline autoplay muted loop>
                <source src='iconos/LAB-Cohete.mp4' type='video/mp4'>
              </video>
              <video
                v-if="servicio.index == 2"
                class="ma-0 mt-n14 pa-0"
                style="height:100px"
                playsinline autoplay muted loop>
                <source src='iconos/LAB-Avion.mp4' type='video/mp4'>
              </video>
            </v-row>
            <v-row
              v-if="servicio.index == 1"
              class="d-none ma-0 pa-0"
              style="max-width:70px;height:40px"
            >
              <v-icon
                style="width:50px"
                class="mt-1 mr-1 mb-1"

                color= "#101010"
              >
                mdi-plus-thick
              </v-icon>
            </v-row>
          </v-row>
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:50px"
    >
    </v-row>
    <v-row
      class="ma-0 ml-5 pa-0"
      style="width:100vw;height:70px;font-size:30px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">Experiencias</p>
    </v-row>
    <v-row
      class="ma-0 mt-10 pa-0"
      style="width:100vw;position:relative;background-color:white;font-size:40px;font-family:Space Grotesk;font-weight:300"
    >
      <v-row
        class="ma-0 pa-0 justify-end"
        style="overflow:hidden;width:100vw"
      >
        <v-img
          eager
          class="ma-0 mt-8 pa-0"
          max-width="100vw"
          height="56vh"
          src="fotos/testimonios.jpg"
          style="opacity:.85;color:white"
        >
          <v-carousel
            height="42vh"
            hide-delimiters
            :show-arrows="false"
            continuos
            cycle
            interval="8000"
            style="height:43vh"
          >
            <v-carousel-item
              class="ma-0 pa-0"
              transition="my-carousel"
              v-for="(item, index) in $store.state.testimonios" :key="index"
              style="font-size:18px;font-family:Space Grotesk;font-weight:500;width:100vw;height:42vh"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%;height:42vh"
                justify="center"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="max-width:85%;height:42vh"
                  align="center"
                >
                  <p class="ma-0 pa-0 font-italic" style="line-height:20px;text-shadow: 2px 2px 5px rgba(0,0,0,.3)">"{{ item.cita }}".</p>
                </v-row>
              </v-row>
            </v-carousel-item>
          </v-carousel>
          <v-row
            class="ma-0 pa-0"
            style="width:100vw;height:50px"
          >
            <v-spacer></v-spacer>
            <v-row
              class="ma-0 pa-0"
              style="font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:#101010;color:#101010;z-index:1;width:200px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
              justify="center"
            >
              <v-carousel
                hide-delimiters
                :show-arrows="false"
                continuos
                cycle
                interval="8000"
              >
                <v-carousel-item
                  class="ma-0 pa-0"
                  transition="my-carousel"
                  v-for="(item, index) in $store.state.testimonios" :key="index"
                  style="font-size:20px;font-family:Space Grotesk;font-weight:600"
                >
                  <v-row
                    class="ma-0"
                    style="position:flex;width:100%"
                    align="center"
                  >
                    <p class="ma-0 ml-5 mt-3 pa-0" style="min-width:100%;color:white;text-shadow: 2px 2px 5px rgba(255,255,255,0.3)">{{ item.autor }}</p>
                    <p class="ma-0 ml-5 pa-0" style="min-width:100%;color:white;font-size:10px">{{ item.cargo }}</p>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-row>
          </v-row>
        </v-img>
      </v-row>
      <v-row
        class="ma-0 mt-16 pa-0"
        style="width:100vw;background-color:white"
        align="center"
      >
        <v-row
          class="ma-0 mt-3 mb-5 mx-5 pa-0 logo"
          v-for="logo in this.logos" :key="logo"
          align="center"
          justify="center"
        >

            <v-img
              eager
              max-height="111"
              max-width="79"
              :src="logo"
              style="opacity:.8"
            ></v-img>

        </v-row>
      </v-row>
    </v-row>

    <v-row
      class="ma-0 mt-16 ml-5 pa-0 pt-12"
      style="width:100vw;height:70px;font-size:30px;line-height:48px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 pa-0 text-uppercase">¿Quieres ser parte?</p>
    </v-row>
    <v-img
      contain
      eager
      class="ma-0 mt-12 pa-0"
      src="fotos/LAB_team.png"
      style="opacity:.85;color:white"
    >
      <v-row
        class="ma-0 pa-0"
        style="height:100%;width:100%"
        justify="center"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:75%"
          justify="end"
        >
          <p class="ma-0 pa-0" style="text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Desarrolla tus talentos con nosotras
          </p>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:25%"
          justify="start"
        >
          <v-img
            contain
            eagerpx
            style="margin-top:-25px !important"
            class="ma-0 ml-n5 pa-0"
            min-height="55px"
            max-height="55px"
            src="iconos/LAB-Bus.gif"
            ></v-img>
            <v-spacer></v-spacer>

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
            ¡Trabaja con nosotras!
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
            Trabaja con nosotras
            <v-spacer></v-spacer>

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
  // import VideoParallax from 'vuetify-video-parallax';

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
      // VideoParallax
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
  .pod:hover
    cursor: pointer
</style>
