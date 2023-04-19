<template>
  <button class="form_part_add_option" @click="clickHandler">
    オプションを追加する
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