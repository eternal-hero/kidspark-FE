<template>
  <button class="btn_style_01" @click="clickHandler">保存</button>
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