<template>
  <v-app class="main">
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
      <v-btn v-if="path === '/'" class="nav-btn" to="/inspire" text>Inspire</v-btn>
      <v-btn v-else class="nav-btn" to="/" text>Home</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  name: 'DefaultLayout',

  components: {
    Footer,
  },

  data () {
    return {
      title: 'Vuetify.js'
    }
  },

  methods: {
    toHome() {
      this.$router.push('/')
    }
  },

  computed: {
    path () {
      return this.$route.path
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