<template>
  <button class="button-small-close" @click="clickHandler"></button>
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

<style>
.button-small-close {
  background: url(assets/admin/img/common/icn_close_red.png) no-repeat
    center/100%;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: none;
}
</style>