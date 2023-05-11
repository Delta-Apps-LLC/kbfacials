<template>
    <v-row justify="center" align="center">
        <v-col class="text-center">
            <span class="header">Hello there</span>
            <v-btn @click="postReview()">Post Review</v-btn>
            <br>
            {{reviews}}
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'ReviewsPage',

    async created () {
        await this.$store.dispatch('reviews/getReviews')
    },

    data () {
        return {

        }
    },

    methods: {
        async postReview() {
            await this.$store.dispatch('reviews/postReview', {
                numStars: 5,
                title: 'Amazing service',
                text: 'Kami does the best job! She was so kind and gave the best service I\'ve ever had.',
                name: 'Andrew'
            })
        }
    },

    computed: {
        reviews () {
            return this.$store.state.reviews.allReviews
        }
    }
}
</script>

<style scoped>
@import '~/assets/style.css';



</style>