<template>
    <v-row justify="center" align="center">
        <v-col class="d-flex flex-column align-center text-center">
            <span class="header">{{contactKami}}</span>
            <span class="coming-soon">{{comingSoon}}</span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'SchedulePage',

    data () {
        return {
            contactKami: 'To schedule an appointment, text or call Kami at 702-340-0921 to see what\'s available.',
            comingSoon: 'Coming soon...\nBook appointments and services online.'
        }
    }
}
</script>

<style scoped>
@import '~/assets/style.css';

.header {
    width: 550px;
}

.coming-soon {
    margin-top: 10%;
    white-space: pre-line;
    font-family: Playfair Display;
    font-size: 22px;
    font-style: italic;
}

</style>
