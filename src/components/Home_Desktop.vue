<template>
  <v-row
    class="ma-0 pa-0"
    style="max-width:100vw;min-width:100vw"
  >
    <v-row
      class="ma-0 mt-16 pa-0"
      style="width:100%;height:90vh"
    >
      <v-row
        class="ma-0 pa-0 justify-end"
        style="position:relative"
      >
        <v-row
          class="ma-0 mr-3 pa-0 pod"
          style="position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:#101010;z-index:1;top:63%;width:250px;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);z-index:2"
          align="center"
          justify="center"
          @click="spotify()"
        >
          <p class="ma-0 ml-5 pa-0">PODCAST</p> <v-icon class="ma-0 ml-12 mr-5 pa-0" size="40">$camion</v-icon>
        </v-row>
        <v-row
          class="ma-0 mx-5 pa-0"
          style="max-width:100%;height:66vh;overflow:hidden"
        >
          <v-row
            class="ma-0 pa-0"
            style="transform:scale(1.1)"
          >
            <video
              class="ma-0 pa-0"
              width="100%"
              style="height:66vh;opacity:.85"
              playsinline autoplay muted loop>
              <source src='videos/LAB_1920x600_color_SATURADO_1.mp4' type='video/mp4'>
            </video>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="z-index:1;position:absolute;width:97%"
            align="center"
          >
            <v-carousel
              class="ma-0 mt-10 pa-0"
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
                style="font-size:60px;font-family:Space Grotesk;font-weight:700;width:100vw"
                :class="{'tlarge': $vuetify.breakpoint.md}"
                align="center"
              >
                <v-row
                  class="ma-0 ml-10 mt-n4 pa-0"
                  style="width:100%;height:56vh"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="max-width:60%;line-height:70px;color:white;text-shadow: 2px 2px 5px rgba(0,0,0,0.3)"

                  >

                    <p class="highlight" v-html="item"></p>
                  </v-row>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mx-5 pa-0 justify-center"
        style="position:relative;width:100vw;height:25vh;color:#101010;font-family:Space Grotesk;font-size:16px;font-weight:300"
        align="center"
      >
          <v-row
            class="ma-0 pa-0"
            style="z-index:1;max-width:40%;height:20vh"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%"

            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%"
                align="center"
                justify="center"
              >
                Hemos coordinado exitosamente
              </v-row>
              <v-row
                class="ma-0 pa-0 text-center"
                style="width:33%"

              >
                <v-row
                  class="ma-0 pa-0"
                  data-aos="fade-left"
                  data-aos-duration="1300"
                  data-aos-delay="300"
                  data-aos-once="false"
                >
                  <p style="width:100%;font-size:50px;height:50px">20+</p>
                </v-row>
                <p style="width:100%;font-size:15px">Experiencias</p>
              </v-row>
              <v-row
                class="ma-0 pa-0 text-center"
                style="width:33%"
              >
              <v-row
                class="ma-0 pa-0"
                data-aos="fade-left"
                data-aos-duration="1300"
                data-aos-delay="600"
                data-aos-once="false"
              >
                <p style="width:100%;font-size:50px;height:50px">30+</p>
              </v-row>
                <p style="width:100%;font-size:15px">Equipos</p>
              </v-row>
              <v-row
                class="ma-0 pa-0 text-center"
                style="width:34%"
              >
              <v-row
                class="ma-0 pa-0"
                data-aos="fade-left"
                data-aos-duration="1300"
                data-aos-delay="1000"
                data-aos-once="false"
              >
                <p style="width:100%;font-size:50px;height:50px">2000+</p>
              </v-row>
                <p style="width:100%;font-size:15px">Profesionales y Usuarios</p>
              </v-row>
            </v-row>
          </v-row>

          <v-icon class="ma-0 pa-0 d-none" style="top:-200px;transform:scale(35);position:absolute;opacity:.2">$corazon</v-icon>
          <v-icon class="ma-0 mt-2 pr-7 pa-0" style="z-index:0;top:100px;transform:scale(9);position:absolute;opacity:.3">$corazon</v-icon>

          <p class="ma-0 ml-16 mr-5 pa-0 pl-6" style="z-index:1;width:50%;font-size:16px;font-family:Space Grotesk;font-weight:400;line-height:24px"> {{ $store.state.bajada }} </p>

      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:70px"
    >
    </v-row>
    <v-row
      class="ma-0 ml-12 pa-0"
      style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 ml-8 pa-0 text-uppercase">Servicios</p>
    </v-row>
    <v-row
      v-for="servicio in $store.state.servicios"  :key="servicio.index"
      class="ma-0 mb-16 pa-0 pb-16"
      style="position:relative;width:100vw;height:calc( 100vh - 70px );overflow:block;transform:scale(0.95)"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100vw"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100vw;height:12vh"
        >
        </v-row>
        <v-row
          class="ma-0 pa-0"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <v-img
            eager
            class="mx-16 pa-0"
            style="opacity:.85;min-width:60%;max-width:60%;max-heigth:calc( 100vh - 70px );text-shadow:2px 2px 2px rgba(0,0,0,0.3);left:5vw;font-size:200px;font-family:Space Grotesk;font-weight:700;color:white"
            :src="$store.state.servicios[servicio.index].foto"
            contain
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
          class="ma-0 pa-0 justify-end"
          align="center"
        >
          <v-row
            class="ma-0 mr-16 pa-0"
            style="right:5vw;position:absolute;font-size:17px;font-family:Space Grotesk;font-weight:600;background-color:white;color:#101010;z-index:1;width:40vw;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
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
                style="font-size:22px;font-family:Space Grotesk;font-weight:700"
              >
                {{ $store.state.servicios[servicio.index].titulo }}
              </v-row>
            </v-row>
            <v-row
              class="my-3 mx-12 pa-0"
              style="width:100%;font-size:15px;font-family:Space Grotesk;font-weight:400"
              align="center"
            >
              <p>
                <span v-html="$store.state.servicios[servicio.index].texto"></span>
              </p>
            </v-row>
            <v-row
              class="ma-0 mb-5 pa-0"
              style="height:100px"
              align="center"
              justify="center"
            >
              <v-img
                v-if="servicio.index == 0"
                contain
                eager
                style="max-width:180px;margin-top:-80px !important"
                class="ma-0 ml-5 pa-0"
                min-height="150px"
                max-height="150px"
                src="iconos/LAB--Lancha.gif"
              ></v-img>
              <v-img
                v-if="servicio.index == 1"
                contain
                eager
                style="max-width:180px;margin-top:-40px !important"
                class="ma-0 ml-5 pa-0"
                min-height="130px"
                max-height="130px"
                src="iconos/LAB--Cohete.gif"
              ></v-img>
              <v-img
                v-if="servicio.index == 2"
                contain
                eager
                style="max-width:180px;margin-top:-20px !important"
                class="ma-0 ml-5 pa-0"
                min-height="120px"
                max-height="120px"
                src="iconos/LAB--Avion.gif"
              ></v-img>
            </v-row>
            <v-row
              v-if="servicio.index == 1"
              class="ma-0 pa-0 d-none"
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
      style="width:100vw;height:70px"
    >
    </v-row>
    <v-row
      class="ma-0 ml-12 pa-0"
      style="width:100vw;height:70px;font-size:40px;font-family:Space Grotesk;font-weight:300;background-color:white;color:#101010"
    >
      <p class="ma-0 ml-8 pa-0 text-uppercase">Experiencias</p>
    </v-row>
    <v-row
      class="ma-0 mt-8 pa-0 justify-end"
      style="position:relative;width:100vw;font-size:30px;font-family:Space Grotesk;font-weight:300"
      align="center"
    >
      <v-row
        class="ma-0 mx-5 pa-0"
        style="position:relative;width:100%;overflow:hidden;width:100vw"
        align="center"
      >
        <v-img
          class="ma-0 mt-8 pa-0"
          max-width="100%"
          height="56vh"
          src="fotos/testimonios.jpg"
          eager
        >
          <v-carousel
            hide-delimiters
            :show-arrows="false"
            continuos
            cycle
            interval="8000"
            style="width:100%;height:100%"
          >
            <v-carousel-item
              class="ma-0 pa-0"
              transition="my-carousel"
              v-for="(item, index) in $store.state.testimonios" :key="index"
              style="font-size:25px;line-height:35px;font-family:Space Grotesk;font-weight:600;width:100vw;background-color:transparent"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%;height:100%"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="max-width:100%"
                >
                  <p class="ma-0 ml-16 pa-0 font-italic" style="max-width:800px;text-shadow: 2px 2px 5px rgba(0,0,0,.3);background-color:transparent">"{{ item.cita }}".</p>
                </v-row>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-img>
      </v-row>
      <v-row
        class="ma-0 mr-3 pa-0"
        style="top:400px;z-index:1;position:absolute;color:white;height:70px;box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3)"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:340px;height:100%;background-color:#101010"
          justify="center"
        >
          <v-carousel
            hide-delimiters
            :show-arrows="false"
            continuos
            cycle
            interval="8000"
            style="height:100%"
          >
            <v-carousel-item
              class="ma-0 pa-0"
              transition="my-carousel"
              v-for="(item, index) in $store.state.testimonios" :key="index"
              style="height:100%;font-size:20px;font-family:Space Grotesk;font-weight:600"
            >
              <v-row
                class="ma-0 pa-0"
              >
                <p class="ma-0 ml-5 mt-3 pa-0" style="color:white;text-shadow: 2px 2px 5px rgba(0,0,0,0.3);width:100%">{{ item.autor }}</p>
                <p class="ma-0 ml-5 pa-0" style="color:white;font-size:12px;width:100%">{{ item.cargo }}</p>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mt-16 mx-16 pa-0"
        style="width:100vw"
        align="center"
        justify="center"
      >
        <v-row
          v-for="logo in this.logos" :key="logo"
          class="ma-0 mx-6 mt-5 pa-0"
          style="height:80px;max-width:100%;min-width:7%;opacity:.75"
          align="center"
          justify="center"
        >
          <v-img
            style=""
            class="ma-0 mt-3 pa-0"
            eager
            max-height="110"
            max-width="90px"
            :src="logo"
          ></v-img>
        </v-row>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:200px"
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
          style="color:white;opacity:.8"
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
              <p class="ma-0 pa-0" style="text-shadow: 2px 2px 5px rgba(0,0,0,.3)">Desarrolla tus talentos con nosotras</p>
              <v-img
                contain
                eager
                style="max-width:180px;margin-top:-80px !important"
                class="ma-0 ml-5 pa-0"
                min-height="180px"
                max-height="180px"
                src="iconos/LAB-Bus.gif"
              ></v-img>
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
                ¡Trabaja con nosotras!
              </v-row>
            </template>
            <v-card
              :class="{'d-none': !step0}"
              class="ma-0 pa-0"
              style="height:540px;border-radius:0px !important;background-color:white;font-family:Space Grotesk;overflow:hidden"
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
              style="height:570px;border-radius:0px !important;background-color:white;font-family:Space Grotesk;overflow:hidden"
              tile
              align="center"
            >
              <v-card-title
                class="ma-0 mx-5 pa-0 text-uppercase"
                style="height:13vh"
              >
                Trabaja con nosotras
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

                  <v-row
                    class="ma-0 pa-0 d-none"
                    style="width:100%"
                  >
                    <v-spacer></v-spacer>
                      <v-btn
                        type="submit"
                        v-bind:style="{ color: computedColor }"
                        style="text-transform:none;font-size:20px;font-family:Montserrat;letter-spacing: 0px;transition: ease .5s"
                        :text="this.text"
                        color="#EDEDED"
                        @click="sendEmail()"
                        depressed
                        tile
                        v-ripple="false"
                      >
                        {{this.boton}}
                      </v-btn>

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
  // import VideoParallax from 'vuetify-video-parallax';
  import emailjs from 'emailjs-com';
  import{ init } from 'emailjs-com';
  init("user_uRTEJMp7CqTbbwVm6yYMz");

  export default {
    data: function() {
        return {
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
        }
    },
    components: {
      // VideoParallax
    },
    computed: {
      computedColor: function () {
        return this.color;
      }
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

  input
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0

  .submit
    text-transform: none
    font-size: 20px
    font-family: Space Grotesk
    letter-spacing: 0px

  .text input
    color: #101010 !important

  .v-messages__message
    color: red !important
    opacity: .4

  .v-card__text
    color: #101010 !important

  .v-input label
    animation: none !important


  .v-input
    color: #101010 !important
    font-family: Space Grotesk !important
    font-size: 20px !important
    border-radius: 0px !important

  .v-text-field--outlined fieldset
    display: none !important
    border-radius: 0px !important
    opacity: .6 !important

  .v-text-field--outlined textarea
    color: #101010 !important
    border-radius: 0px !important

  .v-text-area--outlined textarea
    color: #101010 !important
    border-radius: 0px !important

  input:focus
    color: #101010

  .cafe
    margin-left: 40px

  .v-counter
    opacity: .4 !important

  .v-label
    color: #101010 !important
    font-family: Space Grotesk !important
    opacity: .4 !important

  .tlarge
    font-size: 1000px
  .highlight span
    color: #ADFFFF
  .pod:hover
    cursor: pointer
  .trabaja
    background-color: #03F7F7

  .v-btn__content
    opacity: 1 !important

  .trabaja:hover
    box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.3) !important


</style>
