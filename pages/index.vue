<template>
  <v-row justify="center" align="center">
    <v-col class="text-center">
      <span class="header">
        Services &amp; Pricing
      </span>
      <hr :style="{'height': '2px', 'border-radius': '5px', 'background-color': '#373434'}" />

      <div class="wrapper">
        <div class="service text-left" v-for="(service, i) in services" :key="i" data-aos="zoom-in" data-aos-duration="1000">
          <v-divider />
          <v-row>
            <img class="service-img" v-if="i == 0 || i % 2 == 0" :src="require(`~/assets/blobs/${service.src}`)" />
            <v-col>
              <span class="service-title">{{service.title}}</span>
              <v-spacer />
              <span class="service-details">{{service.time}}, {{service.price}}</span>
              <p class="service-description" v-html="service.description"></p>
            </v-col>
            <img class="service-img" v-if="i != 0 && i % 2 != 0" :src="require(`~/assets/blobs/${service.src}`)" />
          </v-row>
        </div>
      </div>

      <span class="header" :style="{'margin': '20px auto', 'display': 'inline-block', 'font-size': '30px'}" data-aos="fade-up">
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
          src: 'facial.png',
          description: 'Includes cleanse, toner, exfoliating mask, extractions, hydrating/cooling mask, serum, hyaluronic acid, moisturizer and SPF.\n*professional grade products customized to your skin.\n\nMay include: Skin scrubber, high frequency, hot/cold hammer, various massage techniques.',
        },
        {
          title: 'Chemical Peel Facial',
          time: '50-60 min',
          price: '$50',
          src: 'chemical.png',
          description: '30% glycolic peel to exfoliate and promote cell turnover, along with a sensitive skin facial.',
        },
        {
          title: 'Mini Facial',
          time: '30 min',
          price: '$25',
          src: 'mini.png',
          description: 'Perfect for teenagers or adults who want a quicker option. Includes cleanse, toner, exfoliating mask, extractions, high frequency machine, moisturizer, SPF and a short massage.',
        },
        {
          title: 'Back Treatment',
          time: '60 min',
          price: '$50',
          src: 'back.png',
          description: 'Includes all basic facial items, but for your back &ndash; an often neglected area. Also includes a hot stone massage.',
        },
        {
          title: 'Back Treatment + Facial',
          time: '90 min',
          price: '$80',
          src: 'back-facial.png',
          description: '$80 for 90 minutes of pampering.',
        },
        {
          title: 'Chin/Mustache or Nose Wax',
          time: '5-10 min',
          price: '$10',
          src: 'chin.png',
          description: 'May be booked separately or added to another service.',
        },
        {
          title: 'Paraffin Wax Treatment',
          time: '20-25 min',
          price: '$10',
          src: 'paraffin.png',
          description: 'Can be for hands or feet. Includes cleanser, moisturizer, massage, and hot wax. May be booked separately or added to another service.',
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
  margin: 30px auto;
  width: 65%;
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
  width: 100%;
  margin: 10px auto;
  font-size: 20px;
  font-family: Playfair Display;
  color: #373434;
  white-space: pre-line;
}

.service-img {
  width: 300px;
}

</style>
