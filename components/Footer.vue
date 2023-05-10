<template>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <img src="~/assets/background.png" height="75px" />
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


</style>
