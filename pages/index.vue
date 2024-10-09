<template>
  <v-row justify="center" align="center">
    <v-col class="text-center">
      <span class="header">
        Specializing in facials, laser hair removal, and body contouring!
      </span><br>
      <hr :style="{'height': '2px', 'border-radius': '5px', 'background-color': '#373434'}" />
      <span class="header">
        Services &amp; Pricing
      </span>

      <div class="wrapper">
        <div :class="isMobile ? 'service text-center' : 'service text-left'"
          v-for="(service, i) in services"
          :style="isMobile ? { 'width': '90%', 'margin': '30px auto' } : null"
          :key="i"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <v-divider />
          <v-row :justify="isMobile ? 'center' : null">
            <img class="service-img" v-if="(i == 0 || i % 2 == 0) || isMobile" :src="require(`~/assets/blobs/${service.src}`)" />
            <v-col>
              <span class="service-title">{{service.title}}</span>
              <v-spacer v-if="!isMobile" />
              <span class="service-details">{{service.time}}, {{service.price}}</span>
              <p class="service-description" v-html="service.description"></p>
            </v-col>
            <img class="service-img" v-if="i != 0 && i % 2 != 0 && !isMobile" :src="require(`~/assets/blobs/${service.src}`)" />
          </v-row>
        </div>

        <hr :style="{'height': '2px', 'border-radius': '5px', 'background-color': '#373434'}" />
        <span class="header">
          Add-Ons &ndash; Can add one, or combine any of these for a truly custom facial!
        </span>
        
        <div :class="isMobile ? 'service text-center' : 'service text-left'"
          v-for="(addon, i) in addons"
          :style="isMobile ? { 'width': '90%', 'margin': '30px auto' } : null"
          :key="i"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <v-divider />
          <v-row :justify="isMobile ? 'center' : null">
            <img class="service-img" v-if="(i == 0 || i % 2 == 0) || isMobile" :src="require(`~/assets/blobs/${addon.src}`)" />
            <v-col>
              <span class="service-title">{{addon.title}}</span>
              <v-spacer v-if="!isMobile" />
              <span class="service-details">{{addon.price}}</span>
              <p class="service-description" v-html="addon.description"></p>
            </v-col>
            <img class="service-img" v-if="i != 0 && i % 2 != 0 && !isMobile" :src="require(`~/assets/blobs/${addon.src}`)" />
          </v-row>
        </div>
      </div>

      <!-- <span class="header" :style="{'margin': '20px auto', 'display': 'inline-block', 'font-size': '30px'}" data-aos="fade-up">
        {{discount}}
      </span> -->
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
          title: 'Dermadality Duo - Fall Special!',
          time: '50-60 min',
          price: '$85',
          src: 'pumpkin.png',
          description: 'Goodbye dry summer skin; hello Fall fresh!\nYou will receive:\n<ul><li>Pumpkin Peel - 30% AHA, organic, active antioxidants and enzymes. Increases cell turnover, hydration, and collogen production.</li><li>Seaweed Mask - Blue-green algae; detoxifies (highly mineralized), moisturizes, increases circulation (rich in amino acids and antioxidants)</li><li>Includes extractions, vitamin C serum, moisturizer & SPF</li></ul>',
        },
        {
          title: 'Custom Facial',
          time: '50-60 min',
          price: '$80',
          src: 'facial.png',
          description: 'Includes 2-step cleanse, toner, exfoliating mask, extractions, hydrating/cooling mask, serum, hyaluronic acid, moisturizer and SPF.\n*professional grade products customized to your skin.\n\nMay include: Skin scrubber, high frequency, hot/cold hammer, various massage techniques.',
        },
        {
          title: 'Chemical Peel Facial',
          time: '50-60 min',
          price: '$80',
          src: 'chemical.png',
          description: '20-30% glycolic peel to exfoliate and promote cell turnover, finished with a custom facial.\n\nMust restrict outdoor activity for several days and wear SPF.',
        },
        {
          title: 'Mini Facial',
          time: '30 min',
          price: '$30',
          src: 'mini.png',
          description: 'Perfect for teenagers or adults who want a quicker option. Includes cleanse, toner, exfoliating mask, extractions, high frequency machine, moisturizer, SPF and a short massage.',
        },
        // {
        //   title: 'Back Treatment',
        //   time: '60 min',
        //   price: '$75',
        //   src: 'back.png',
        //   description: 'Includes all basic facial items, but for your back &ndash; an often neglected area. Also includes a hot stone massage.',
        // },
        {
          title: 'Back Treatment + Facial',
          time: '90 min',
          price: '$120',
          src: 'back-facial.png',
          description: 'Includes all basic facial items, but for your back &ndash; an often neglected area. Also includes a hot stone massage.',
        },
        {
          title: 'GlyMed Plus® Facial',
          time: '60 min',
          price: '$80',
          src: 'glymed.png',
          description: 'GlyMed Plus® offers pharmaceutical-grade skin care products that can significantly improve these and other skin concerns:\n<ul><li>Common signs of aging</li><li>Pigmentation issues</li><li>Rosacea</li><li>Sun damage</li><li>Acne</li></ul>I have attended several classes and become a GlyMed Pro. I offer this professional line of skincare as well.<br>Includes:<br>Glycolic facial cleanser, peptide firming cleanser, specialty deep cleansing mask, anti aging mask, peptide or retinol serum, balance beauty oil, repair cream, peptide moisturizer, firming eye cream, SPF, hydrating lip balm.',
        },
        // {
        //   title: 'Chin/Mustache or Nose Wax',
        //   time: '5-10 min',
        //   price: '$10 each',
        //   src: 'chin.png',
        //   description: 'May be booked separately or added to another service.',
        // },
        // {
        //   title: 'Bikini Wax',
        //   time: '15 min',
        //   price: '$40 each',
        //   src: 'bikini.png',
        //   description: 'May be booked separately or added to another service.',
        // },
        {
          title: 'Paraffin Wax Treatment',
          time: '20-25 min',
          price: '$10',
          src: 'paraffin.png',
          description: 'Can be for hands or feet. Includes cleanser, moisturizer, massage, and hot wax. May be booked separately or added to another service.',
        },
      ],
      addons: [
        {
          title: 'Microdermabrasion',
          price: '$15',
          src: 'microderm.png',
          description: 'Fine diamond tip that "sands" skin and helps renew texture and tone through exfoliation. Helps with fine lines and wrinkles, hyperpigmentation, scars and sun damage.'
        },
        {
          title: 'Dermaplaning',
          price: '$10',
          src: 'dermaplaning.png',
          description: 'Fine blade to remove vellus hair and dry skin. Leaves skin silky smooth.\n<ul><li>Red light therapy - dome mask to stimulate collagen heal damage.</li><li>Facial contouring - electric massage rollers + red light to lift sagging skin.</li><li>Paraffin wax treatment</li><li>Nose wax - quickly remove unwanted nasal cavity hair. (I promise you\'ll love it!)</li></ul>'
        },
      ],
      discount: 'Book 5 facials, get $20 off your 6th facial!',
    }
  },

  methods: {
  },

  computed: {
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
  max-width: auto;
  max-height: 250px;
  margin-top: 20px;
}

</style>
