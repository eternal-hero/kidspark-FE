<template>
  <div class="questions-box" :class="addClass">
    <h3 class="questions-box__ttl">
      <img src="@/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
    </h3>
    <ul class="questions-box__list">
      <li class="questions-box__list-item" v-for="(item, index) in questions">
        <a :href="item.url || '#'" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuestionBox',
  props: {
    questions: {
      type: Array,
    },
    addClass: {
      type: String,
      required: false,
    },
  },
}
</script>
<style scoped>
</style>