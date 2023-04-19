<template>
  <ul class="m-subnav job-menu">
    <li v-for="item in routeNames" class="m-subnav__item" :class="{'is-active': ($nuxt.$route.name === item.routeName)}">
      <NuxtLink :to="{name: item.routeName}" v-text="item.name"></NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    routeNames: {
      type: Array,
      default() {
        return [
          {
            name: '依頼メッセージ',
            routeName: ''
          }      ,
          {
            name: '依頼詳細',
            routeName: ''
          },
          {
            name: '完了レポート',
            routeName: ''
          }
        ]
      }
    }
  },
}
</script>
<style scoped>
</style>
