<template>
  <v-app class="main-2">
    <v-app-bar
      class="app-bar"
      fixed
      app
      height="100px"
    >
      <v-toolbar-title dense>
        <button @click="toHome()">
          <img class="logo" src="~/assets/logo-trans.png" />
        </button>
      </v-toolbar-title>
      <v-spacer />
      <v-btn class="nav-btn" to="/" text>Home</v-btn>
    </v-app-bar>

    <v-main >
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data () {
    return {
      title: 'Vuetify.js'
    }
  },

  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import '~/assets/style.css';

.logo {
  vertical-align: text-top;
  height: 100px !important;
}


</style>