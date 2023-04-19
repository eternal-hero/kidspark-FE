<template>
  <div class="job-infor__list-desc">
    <div class="c-control__02">
      <label class="form-edit__radio" v-for="(option, index) in options" :key="index">
        <input type="radio" :name=name :value="option.value" v-model.trim="val" v-model='value'>
        <span>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoRadio_Guardian",
  props: {
    options: {},
    value: {},
    name: {},
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

</style>


<!--<exeo-radio_new :options="options" v-model="checked"></exeo-radio_new>-->
