<template>
  <div style="display: flex">
    <div class="pure-input pure-input--styles02" v-for="(option, index) in options" :key="index">
      <input type="radio" :value="option.value" :id="`${name}-${index}`" v-model.trim="val"
        :name="name" />
      <label :for="`${name}-${index}`">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoRadio",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      val: null,
    };
  },
  mounted() {
    this.val = this.value;
  },
  watch: {
    val() {
      this.$emit("input", this.val);
    },
  },
};
</script>

<style scoped>
.pure-input--styles02 {
  margin-right: 10px;
}
</style>
<!--<exeo-radio :options="options" v-model="checked"></exeo-radio>-->
