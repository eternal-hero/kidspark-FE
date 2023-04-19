<template>
  <button class="btn_style_04 btn_style_04--gray" @click="clickHandler">
    戻る
  </button>
</template>
<script>
export default {
  methods: {
    clickHandler: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>