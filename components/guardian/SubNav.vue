<template>
  <ul class="m-subnav">
    <li v-for="item in routeNames" class="m-subnav__item" :class="{'is-active': ($nuxt.$route.name === item.routeName)}">
      <NuxtLink :to="{name: item.routeName}" v-text="item.name"></NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SubNav",
  props: {
    routeNames: {
      type: Array,
      default() {
        return [
          {
            name: 'すべて',
            routeName: 'guardian-reservation-management'
          }      ,
          {
            name: '単発予約',
            routeName: 'guardian-reservation-management-single-reservation'
          },
          {
            name: '定期予約',
            routeName: 'guardian-reservation-management-regular-reservation'
          },
          {
            name: '領収書発行',
            routeName: 'guardian-reservation-management-receipt-issue'
          }
        ]
      }
    }
  },
}
</script>
<style scoped>
</style>
