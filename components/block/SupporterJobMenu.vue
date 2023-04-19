<template>
  <ul class="m-subnav job-menu">
    <li v-for="item in routeNames" class="m-subnav__item" :class="{'is-active': ($nuxt.$route.name === item.routeName)}">
      <NuxtLink :to="{name: item.routeName}" v-text="item.name"></NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SupporterJobMenu",
  props: {
    routeNames: {
      type: Array,
      default() {
        return [
          {
            name: '依頼メッセージ',
            routeName: 'supporter-job-detail-request-message'
          }      ,
          {
            name: '依頼詳細',
            routeName: 'supporter-job-detail-request-detail'
          },
          {
            name: '完了レポート',
            routeName: 'supporter-job-detail-completion-report'
          }
        ]
      }
    }
  },
}
</script>
<style scoped>
</style>
