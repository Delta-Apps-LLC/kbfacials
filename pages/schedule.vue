<template>
    <v-row class="container" justify="center" align="center">
        <div class="wrapper text-center">
            <span class="header" data-aos="zoom-in" data-aos-duration="1000">
                {{contactKami}}
            </span>
            <!-- <span class="coming-soon">{{comingSoon}}</span> -->
        </div>
    </v-row>
</template>

<script>
import {aosMixin} from '~/mixins/aos'
export default {
    name: 'SchedulePage',
    mixins: ['aosMixin'],

    data () {
        return {
            contactKami: 'To schedule an appointment, text or call Kami at 702-340-0921 to see what\'s available.',
            // comingSoon: 'Coming soon...\nBook appointments and services online.'
        }
    }
}
</script>

<style scoped>
@import '~/assets/style.css';

.container {
    height: 100%;
    margin: auto;
}

.wrapper {
    margin-top: 10%;
    align-items: center;
    width: 100%;
}

.header {
    width: 550px;
}

/* .coming-soon {
    margin-top: 10%;
    white-space: pre-line;
    font-family: Playfair Display;
    font-size: 22px;
    font-style: italic;
} */

</style>
