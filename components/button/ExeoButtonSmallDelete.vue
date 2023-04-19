<template>
  <button class="btn_style_03" @click="clickHandler">削除</button>
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