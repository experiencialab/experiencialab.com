<template>
  <v-row
    class="ma-0 pa-0"
    style="position:relative;width:100%;font-family:Space Grotesk"
    align="center"
    justify="center"
  >
    <v-row
      class="ma-0 pa-0"
      style="max-width:97%"
      align="center"
    >
      <v-text-field
        :disabled="this.disable"
        :rules="[rules.required, rules.nombre]"
        dark
        class="nombre text"
        label="Nombre"
        outlined
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
        :disabled="this.disable"
        :rules="[rules.required, rules.email]"
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
        :disabled="this.disable"
        :rules="[rules.required, rules.email]"
        dark
        dense
        class="linkedin text"
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
        :disabled="this.disable"
        :rules="[rules.required]"
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

    <v-row
      class="ma-0 pa-0 d-none"
      style="width:100%"
    >
      <v-spacer></v-spacer>
        <v-btn
          class="submit"
          :width="this.width"
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

  </v-row>
</template>

<script>
  import emailjs from 'emailjs-com';
  import{ init } from 'emailjs-com';
  init("user_uRTEJMp7CqTbbwVm6yYMz");

  export default {
    data: () => ({
      width: "150px",
      color: '#707070',
      disable: false,
      text: false,
      open: true,
      boton: "Enviar",
      email: null,
      message: null,
      rules: {
        required: value => !!value || 'Requerido',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo electrónico inválido'
        },
      }
    }),
    computed: {
      computedColor: function () {
        return this.color;
      }
    },
    methods: {
      sleep(sec) {
        return new Promise((resolve) => {
          setTimeout(resolve, sec);
        });
      },
      validateEmail: function (value) {
        var input = document.createElement('input');

        input.type = 'email';
        input.required = true;
        input.value = value;

        return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
      },
      async tantan(templateParams) {
        var r = await emailjs.send('service_8etpp5j', 'template_h955ycq', templateParams)
          .then(function(response) {
            console.log(response)
            return true
          }, function(error) {
            console.log(error)
            return false
          });
        return r
      },
      async sendEmail () {

        if (this.validateEmail(this.email) == true && this.message && this.open == true) {
          this.width = "250px"
          this.boton = "Enviando mensaje"
          this.text = true
          var templateParams = {
            email: this.email,
            message: this.message
          };

          var results = await this.tantan(templateParams);
          if (results == true) {
            this.width = "250px"
            this.boton = "Mensaje recibido"
            this.open = false
            this.text = true
            this.color = "green"
            this.disable = true
          } else {
            this.width = "350px"
            this.boton = "Error. Por favor intenta otra vez."
            this.text = false
            this.color = "red"
            await this.sleep(5000)
            this.width = "150px"
            this.open = true
            this.color = "#707070"
            this.text = false
            this.boton = "Enviar"
          }

        } else if (this.open == true) {
          this.width = "250px"
          this.color = "red"
          this.text = true
          this.boton = "Error en los datos"
          await this.sleep(2000)
          this.width = "150px"
          this.color = "#707070"
          this.text = false
          this.boton = "Enviar"
        }
      }
    }
  }
</script>

<style lang="sass">

  .submit
    text-transform: none
    font-size: 20px
    font-family: Space Grotesk
    letter-spacing: 0px

  .text input
    color: black !important

  .v-messages__message
    color: black !important
    opacity: .6

  .v-card__text
    color: black !important

  .v-input label
    animation: none !important


  .v-input
    color: black !important
    font-family: Space Grotesk !important
    font-size: 20px !important
    border-radius: 0px !important


  .v-text-field--outlined fieldset
    color: transparent !important
    border-radius: 0px !important
    opacity: .6 !important

  .v-text-field--outlined textarea
    color: black !important
    border-radius: 0px !important


  .cafe
    margin-left: 40px


  .v-label
    color: black !important
    font-family: Space Grotesk !important
    opacity: .4 !important

</style>
