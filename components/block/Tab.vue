<template>
  <ul class="m-subnav job-menu" :class="addClass">
    <li v-for="item in tabs" class="m-subnav__item" :class="{'is-active': ($nuxt.$route.path === item.path)}">
      <NuxtLink :to="item.path" v-text="item.name"></NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabs: {
      type: Array,
    },
    addClass: {
      type: String,
      required: false
    }
  },
}
</script>
<style scoped>
</style>
