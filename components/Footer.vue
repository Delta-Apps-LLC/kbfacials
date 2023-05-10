<template>
    <v-footer
      class="footer"
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <img src="~/assets/background-trans.png" height="75px" />
      <!-- <v-spacer /> -->
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
@import '~/assets/style.css';

.footer {
  background-color: #f8f6f6;
}

</style>
