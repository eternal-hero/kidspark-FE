<template>
  <ul class="form-narrow__check">
    <template v-if="this.options.length">
      <li
        class="form-narrow__check-item"
        v-for="(option, index) in options"
        :key="index"
      >
        <label class="checkbox-custom checkbox-custom--02">
          <input
            type="checkbox"
            class="checks"
            v-model="val"
            :value="option.value"
          />
          <span class="checkmark"></span>{{ option.label }}
        </label>
      </li>
    </template>
    <template v-else>
      <li>
        <label class="checkbox-custom checkbox-custom--02">
          <input type="checkbox" class="checks" v-model="val" />
          <span class="checkmark"></span>
          <slot></slot>
        </label>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    value: {
      type: [Boolean, Array],
      required: true,
    },
    name: { Type: String },
    options: {
      type: Array,
      default() {
        return [];
      },
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

<style></style>
<!--<exeo-checkbox v-model="checked"></exeo-checkbox>-->
<!--<exeo-checkbox v-model="multipleCheck" :options="options"></exeo-checkbox><br>-->
<!--options: [-->
<!--    {value: 1, label: "1つ星"},-->
<!--    {value: 2, label: "2つ星"},-->
<!--    {value: 3, label: "3つ星"},-->
<!--],-->
<!--checked: false,-->
<!--multipleCheck: [],-->
