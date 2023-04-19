<template>
  <div class="works-user__wp">
    <div class="works-user__heading">
      <span class="works-user__heading-number">{{ item.number }}</span>
      <span class="works-user__heading-txt">{{ item.txt }}</span>
    </div>
    <div class="works-user__ct">
      <dl class="works-user__item">
        <dt class="works-user__item-label">お仕事ID</dt>
        <dd class="works-user__item-desc"><a href="./P011-3.html">{{ item.id }}</a></dd>
      </dl>
      <dl class="works-user__item">
        <dt class="works-user__item-label">開始</dt>
        <dd class="works-user__item-desc">{{ item.start }}</dd>
      </dl>
      <dl class="works-user__item">
        <dt class="works-user__item-label">終了</dt>
        <dd class="works-user__item-desc">{{ item.end }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>

export default {
  name: "WorkUser",
  props: {
    item: {
      type: Object,
      default() {
        return {
          number: 0,
          txt: 0,
          id: '',
          start: '',
          end: ''
        }
      }
    },
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>
