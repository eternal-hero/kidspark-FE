<template>
  <li class="col2_block_side_user_star">
    <span class="col2_block_side_user_star_icn" :data-rate="rating"></span>
  </li>
</template>

<script>
export default {
  name: "RatingStar",
  props: {
    rating: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
</style>
