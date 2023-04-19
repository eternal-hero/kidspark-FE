<template>
  <div class="m-tabs">
    <div v-for="item in routeNames" class="m-tabs__item" :class="{'is-active': ($nuxt.$route.name === item.routeName)}">
      <NuxtLink :to="{name: item.routeName}" v-text="item.name"></NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    routeNames: {
      type: Array,
      default() {
        return [
          {name: 'メッセージ', routeName: 'guardian-message'},
          {name: 'お仕事依頼メッセージ', routeName: 'guardian-message-job-request'},
        ]
      }
    }
  }
}
</script>
