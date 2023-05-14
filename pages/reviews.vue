<template>
    <v-row justify="center" align="center">
        <v-col class="text-center">
            <span class="header">Customer Reviews</span>
            <hr :style="{'height': '2px', 'border-radius': '5px', 'background-color': '#373434'}" />
            <v-row class="columns-row">

                <!-- Post Review Column -->
                <v-col :cols="isMobile ? '12' : '4'">
                    <form class="review-form" data-aos="fade-right" data-aos-duration="1500">
                        <span class="basic-title">Leave a Review</span><br>
                        <v-btn icon
                            v-for="i in 5"
                            :key="i"
                            :rules="[rules.required]"
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
                        <input class="form-field" maxlength="40" v-model="author" type="name" name="author" placeholder="Your name" required /><br>
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
                <v-col :cols="isMobile ? '12' : '8'">
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
                    <span class="header"
                        v-if="reviews.length == 0"
                        v-html="noReviews"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    ></span>
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
            starIndex: null,
            noReviews: 'No reviews yet &ndash; be the first to leave one!'
        }
    },

    methods: {
        giveStars(i) {
            this.starIndex = i
            this.numStars = i++
        },

        async postReview() {
            if (this.validate()) {
                await this.$store.dispatch('reviews/postReview', {
                    numStars: this.numStars,
                    title: this.title,
                    text: this.text,
                    name: this.author
                })
                this.clearForm()
            }
        },

        validate() {
            if (this.numStars === 0) {
                alert('Please select your star rating.')
                return false
            } else if (this.title === '') {
                alert('Please fill in the title.')
                return false
            } else if (this.text === '') {
                alert('Please fill in the review text field.')
                return false
            } else if (this.author === '') {
                alert('Please fill in your name.')
                return false
            }
            return true
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
            if (this.reviews.length == 0) return 0
            let total = 0
            this.reviews.forEach(element => {
                total += element.numstars
            });
            return (total / this.reviews.length).toFixed(1)
        },

        isMobile () {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r750|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
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