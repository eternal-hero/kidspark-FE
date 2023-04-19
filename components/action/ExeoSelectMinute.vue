<template>
  <select :name="name" @change="updateValue" :value="value" :class="className">
    <slot></slot>
    <option v-for="(option, index) in options" :value="option.value" :key="index">
      {{ option.label }}分
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {type: [Number, String]},
    name: {type: String},
    className: {type: String},
    options: {
      type: Array,
      default() {
        return [
          {label: '00', value: '00'},
          {label: '15', value: '15'},
          {label: '30', value: '30'},
          {label: '45', value: '45'},
        ];
      },
    }
  },
  methods: {
    updateValue: function (e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e.target.value); // callback event
    }
  }
}
</script>

<style></style>
