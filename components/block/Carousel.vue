<template>
  <vue-slick-carousel class="exo-carousel" v-bind="settings">
    <slot></slot>
  </vue-slick-carousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: "slickCarousel",
  components: {
    'vue-slick-carousel': VueSlickCarousel
  },
  props: {
    settings: {
      type: Object,
      required: false,
      default: () => {
        return {
          dots: true,
          dotsClass: "slick-dots exeo-dots",
          edgeFriction: 0.35,
          speed: 1500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    }
  }
}
</script>

<style>
.exeo-dots {
  z-index: 1;
  bottom: 15px !important;
}
.slick-dots li button:before {
  font-size: 15px !important;
}
</style>
