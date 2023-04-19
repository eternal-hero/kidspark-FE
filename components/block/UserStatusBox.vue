<template>
  <div class="user-heading">
    <div class="user-heading__image">
      <img :src="user.avatar" :alt="user.name" v-if="user.avatar" class="u-img-of">
      <img src="@/assets/supporter/img/common/img_use02.png" :alt="user.name" class="u-img-of" v-else>
    </div>
    <div class="user-heading__name">{{ user.name }}</div>
    <div class="user-status">
      <div class="user-status__medal">
        <span class="user-status__medal--regular"></span>
      </div>
      <div class="user-status__star">
        <span class="user-status__star-icn" :data-rate="user.rating"></span>
      </div>
      <div class="user-status__num">（{{ user.num }}件）</div>
  </div>
  </div>
</template>
<script>
export default {
  name: "UserStatusBox",
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: '',
          avatar: '',
          rating: 0,
          num: 0
        }
      }
    },
  },
  data() {
    return {}
  },
  computed: {
    avatar() {
      if (this.user?.avatar) {
        return require(`@/assets/supporter/img/common/${this.user.avatar}`);
      }
    },
  }
}
</script>
<style scoped>
</style>