<template>
  <div class="job-infor__list-imgs--clm3">
    <div class="job-infor__list-img" v-for="(item, index) in items">
      <img :src="image(item)" :width="item.width || ''">
    </div>
  </div>
</template>

<script>
export default {
  name: "ListImg",
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    image(item) {
      if (item?.image) {
        return require(`@/assets/supporter/img/P051-3/${item.image}`);
      }
    },
  }
};
</script>

<style scoped>

</style>
