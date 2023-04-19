<template>
  <NuxtLink :to="url" class="message-list__link">
    <div class="message-list__img">
      <img :src="item.src" v-if="item.src" :alt="item.name" width="60">
      <img src="@/assets/supporter/img/common/img_use02.png" :alt="item.name" v-else>
    </div>
    <div class="message-list__meta">
      <p class="message-list__meta-name">{{ item.name }}</p>
      <p class="message-list__meta-date">{{ item.date }}</p>
    </div>
    <div class="message-list__desc">{{ item.desc }}</div>
    <span class="message-list__qty" v-if="item.qty">{{ item.qty }}</span>
  </NuxtLink>
</template>

<script>

export default {
  name: "ItemMessage",

  props: {
    url: {
      type: String,
      default: '/'
    },
    item: {
      type: Object,
      default () {
        return {
          name: '',
          desc: '',
          date: '',
          qty: 0,
          src: '',
        }
      }
    },
  },
}
</script>
<style scoped>
</style>
