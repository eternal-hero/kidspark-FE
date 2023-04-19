<template>
  <button class="btn_style_02" @click="clickHandler">詳細</button>
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