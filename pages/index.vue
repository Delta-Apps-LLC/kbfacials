<template>
  <v-row justify="center" align="center">
    <v-col class="text-center">
      <span class="header">
        Services &amp; Pricing
      </span>
      <hr :style="{'height': '2px', 'border-radius': '5px', 'background-color': '#373434'}" />
      <div class="service text-left" v-for="(service, i) in services" :key="i" data-aos="zoom-in" data-aos-duration="1000">
        <v-divider />
        <v-row class="service-title-row">
          <span class="service-title">{{service.title}}</span>
          <v-spacer />
          <span class="service-details">{{service.time}}, {{service.price}}</span>
        </v-row>
        <p class="service-description">{{service.description}}</p>
        <p class="service-description">{{service.addons}}</p>
      </div>

      <span class="header" :style="{'margin': '10px auto', 'display': 'inline-block'}" data-aos="fade-up">
        {{discount}}
      </span>
    </v-col>
  </v-row>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],

  data () {
    return {
      services: [
        {
          title: 'Custom Facial',
          time: '50-60 min',
          price: '$50',
          description: 'Includes cleanse, toner, exfoliating mask, professional grade products customized to your skin, extractions, hydrating/cooling mask, serum, hyaluronic acid, moisturizer and SPF.',
          addons: 'Add ons: Skin scrubber, high frequency, hot/cold hammer, various massage techniques.',
        },
        {
          title: 'Chemical Peel Facial',
          time: '50-60 min',
          price: '$50',
          description: '30% glycolic peel to exfoliate and prompt cell turnover.',
          addons: 'Add ons: $10 each: Chin/nose wax, Paraffin wax treatment (hands or feet).',
        },
        {
          title: 'Back Treatment',
          time: '50-60 min',
          price: '$50',
          description: 'Includes all basic facial items, but for your back-- an often neglected area. Also includes a hot stone massage.',
          addons: 'Add ons: None',
        },
        {
          title: 'Back Treatment + Facial',
          time: '90 min',
          price: '$80',
          description: '$80 for 90 minutes of pampering.',
          addons: 'Add ons: None',
        },
      ],
      discount: 'Book 5 facials, get $20 off your 6th facial!',
    }
  }
}
</script>

<style scoped>
@import '~/assets/style.css';

.service {
  margin: 50px auto;
  width: 50%;
  height: auto;
}

.service-title-row {
  margin: 10px;
}

.service-title, .service-details {
  font-size: 24px;
  font-family: Playfair Display;
  color: #373434;
}

.service-description {
  width: 80%;
  margin: 10px auto;
  font-size: 20px;
  font-family: Playfair Display;
  color: #373434;
}

</style>
