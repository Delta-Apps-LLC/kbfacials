<template>
    <v-row justify="center" align="center">
        <v-col class="text-center">
            <span class="header">Reviews From Customers</span>
            <hr :style="{'height': '2px', 'border-radius': '5px', 'background-color': '#373434'}" />
            <v-row class="columns-row">

                <!-- Post Review Column -->
                <v-col cols="4">
                    <form class="review-form" data-aos="fade-right" data-aos-duration="1500">
                        <span class="basic-title">Leave a Review</span><br>
                        <v-btn icon
                            v-for="i in 5"
                            :key="i"
                        >
                            <v-icon class="star"
                                size="40"
                                @click="giveStars(i)"
                                :color="i <= starIndex ? '#f5e72c' : 'gray'"
                            >
                                mdi-star
                            </v-icon>
                        </v-btn>
                        <input class="form-field" maxlength="50" v-model="title" type="text" name="title" placeholder="Title" required />
                        <v-textarea
                            class="form-field"
                            v-model="text"
                            placeholder="Leave your review..."
                            :rules="[rules.required]"
                            required
                        ></v-textarea>
                        <input class="form-field" maxlength="40" v-model="author" type="name" name="author" placeholder="Your name" /><br>
                        <v-btn class="form-btn" @click="clearForm()" text>
                            <v-icon>mdi-close</v-icon>
                            &ensp;Clear
                        </v-btn>
                        <v-btn class="form-btn" type="submit" @click="postReview()" text>
                            <v-icon>mdi-send</v-icon>
                            &ensp;Post
                        </v-btn>
                    </form>
                </v-col>

                <!-- Reviews Column -->
                <v-col cols="8">
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <v-spacer />
                        <span class="basic-title">{{reviews.length}} Reviews &mdash; {{avgStars}} Stars</span>
                        <v-divider />
                    </div>
                    <div class="review"
                        v-for="(rev, i) in reviews"
                        :key="i"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <v-row class="star-title-row">
                            <span class="basic-title">&ldquo;{{rev.title}}&rdquo;</span>
                            <v-spacer />
                            <v-icon v-for="(star, i) in rev.numstars"
                                :key="i"
                                color="#f5e72c"
                                size="30"
                            >
                                mdi-star
                            </v-icon>
                            
                        </v-row>
                        <v-row class="author-date-row">
                            <span class="basic-subtext">{{rev.author}}</span>
                            <v-spacer />
                            <span class="basic-subtext">{{rev.date}}</span>
                        </v-row>
                        <p class="basic-text">{{rev.text}}</p>
                        <v-divider />
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
    name: 'ReviewsPage',
    mixins: [aosMixin],

    async created () {
        await this.$store.dispatch('reviews/getReviews')
    },

    data () {
        return {
            numStars: 0,
            title: '',
            text: '',
            author: '',
            rules: {
                required: (value) => !!value || 'This field is required',
            },
            starIndex: null
        }
    },

    methods: {
        giveStars(i) {
            this.starIndex = i
            this.numStars = i++
        },

        async postReview() {
            if (this.numStars === 0) {
                alert('Please select a star rating.')
            } else if (this.text === '') {
                alert('Please fill in the review text box.')
            } else {
                await this.$store.dispatch('reviews/postReview', {
                    numStars: this.numStars,
                    title: this.title,
                    text: this.text,
                    name: this.author
                })
                this.clearForm()
            }
        },

        clearForm() {
            this.title = ''
            this.text = ''
            this.author = ''
            this.numStars = 0
            this.starIndex = null
        }
    },

    computed: {
        reviews () {
            return this.$store.state.reviews.allReviews
        },

        avgStars () {
            let total = 0
            this.reviews.forEach(element => {
                total += element.numstars
            });
            return (total / this.reviews.length).toFixed(1)
        }
    }
}
</script>

<style scoped>
@import '~/assets/style.css';

.columns-row {
    margin: 20px 10px;
}

.review-form {
    height: auto;
}

.review {
    margin: 20px 0;
}

.basic-title {
    font-size: 24px;
    font-family: Playfair Display;
    color: #373434;
}

.basic-text {
    font-size: 19px;
    font-family: Playfair Display;
    color: #373434;
    width: 70% !important;
    text-align: center;
    margin: 20px auto;
}

.form-field {
    padding: 8px;
    margin-top: 2px;
    border: solid 1.5px #757070;
    border-radius: 8px;
    width: 100%;
    background-color: transparent;
    backdrop-filter: blur(3px);
}

.form-btn {
    margin-top: 5px;
    margin-right: 4px;
    color: #373434;
}

.star-title-row {
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
}

.basic-subtext {
    margin: 0 20px;
    font-family: Playfair Display;
    font-style: italic;
    color: #373434;
}

</style>