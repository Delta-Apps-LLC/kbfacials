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
      <v-btn class="nav-btn" v-if="this.$route.path !== '/'" text to="/">Home</v-btn>
      <span v-for="(btn, i) in navBtns" :key="i">
        <v-btn class="nav-btn" :to="btn.to" text>
          {{btn.text}}
        </v-btn>
      </span>
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
      title: 'kb facials',
      navBtns: [
        {
          text: 'Home-2',
          to: '/home2'
        },
        {
          text: 'Schedule',
          to: '/schedule',
        },
        {
          text: 'Reviews',
          to: '/reviews',
        }
      ]
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

.app-bar {
  background-color: #f8f6f6 !important;
}

.logo {
  vertical-align: text-top;
  height: 100px !important;
}


</style>