<template>
    <v-row justify="center" align="center">
        <v-col class="text-center">
            <span class="header">{{contactKami}}</span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'SchedulePage',

    data () {
        return {
            contactKami: 'To schedule an appointment, text or call Kami at 702-340-0921 to see what\'s available.',

        }
    }
}
</script>

<style scoped>
@import '~/assets/style.css';

.header {
    width: 550px;
}

</style>
