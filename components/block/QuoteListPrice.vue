<template>
  <div class="quote-list__box-price">
    <div class="quote-list__box-price-item" v-for="(item, index) in items" :key="index">
      <img :src="getImage(item.icon)" alt="icon" width="30"> {{ item.price}}<span>円<span>/{{ item.times }}時間</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteListPrice',
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    getImage(icon) {
      if (icon) {
        return require(`@/assets/supporter/img/common/${icon}`);
      }
    }
  }
}
</script>
<style scoped>
</style>