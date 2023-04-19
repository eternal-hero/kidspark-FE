<template>
  <div class="c-notyfication c-notyfication--primary" v-show="value">
    <div class="c-notyfication__icn">
      <img
        :src="require(`@/assets/supporter/img/common/icn_success.png`)"
        alt="Ico"
        width="24"
      />
    </div>
    <div class="c-notyfication__ct">
      <div class="c-notyfication__ttl">送信しました</div>
    </div>
    <div
      class="c-notyfication__close js-close-notyfication"
      @click.prevent="close"
    >
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
  name: "UpdateSucceededInform",
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
