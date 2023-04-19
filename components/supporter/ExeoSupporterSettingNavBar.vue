<template>
  <div class="nav-scroll">
    <ul class="m-subnav job-menu mbsp-1">
      <li class="m-subnav__item" :class="{'is-active': ($nuxt.$route.name === routeNames[0])}">
        <nuxt-link :to="{ name: routeNames[0] }">シッター設定</nuxt-link>
      </li>
      <li class="m-subnav__item" :class="{'is-active': ($nuxt.$route.name === routeNames[1])}">
        <nuxt-link :to="{ name: routeNames[1] }">産前産後設定</nuxt-link>
      </li>
      <li class="m-subnav__item" :class="{'is-active': ($nuxt.$route.name === routeNames[2])}">
        <nuxt-link :to="{ name: routeNames[2] }">病児保育設定</nuxt-link>
      </li>
      <li class="m-subnav__item" :class="{'is-active': ($nuxt.$route.name === routeNames[3])}">
        <nuxt-link :to="{ name: routeNames[3] }">家事代行設定</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExeoSupporterSettingNavBar",
  props: {
    editingMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      routeNames: [
        "supporter-sitter-setting",
        "supporter-childbirth-setting",
        "supporter-sick-child-care-setting",
        "supporter-housekeeping-setting"
      ]
    }
  }
}
</script>

<style scoped>

</style>
