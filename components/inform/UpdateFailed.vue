<template>
  <div class="c-notyfication c-notyfication--danger" v-show="value">
    <div class="c-notyfication__icn">
      <img
        :src="require(`@/assets/supporter/img/common/icn_danger.png`)"
        alt="Ico"
        width="24"
      />
    </div>
    <div class="c-notyfication__ct">
      <div class="c-notyfication__ttl">エラー通知</div>
      <div class="c-notyfication__desc">保存できませんでした。</div>
    </div>
    <div class="c-notyfication__close js-close-notyfication" @click.prevent="close">
      <img
        :src="require(`@/assets/supporter/img/common/icn_close_03.png`)"
        alt="Ico"
        width="16"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateFailedInform",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("input", false);
    },
  },
};
</script>

<style scoped></style>
