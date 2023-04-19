<template>
  <button class="btn_style_04 btn_style_04--border" @click="clickHandler">
    削除する
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