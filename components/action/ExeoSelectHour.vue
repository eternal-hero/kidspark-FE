<template>
  <select :name="name" @change="updateValue" :value="value" :class="className">
    <slot></slot>
    <option v-for="(option, index) in options" :value="option.value" :key="index">
      {{ option.label }}
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
          {label: '0時', value: '0時'},
          {label: '1時', value: '1時'},
          {label: '2時', value: '2時'},
          {label: '3時', value: '3時'},
          {label: '4時', value: '4時'},
          {label: '5時', value: '5時'},
          {label: '6時', value: '6時'},
          {label: '7時', value: '7時'},
          {label: '8時', value: '8時'},
          {label: '9時', value: '9時'},
          {label: '10時', value: '10時'},
          {label: '11時', value: '11時'},
          {label: '12時', value: '12時'},
          {label: '13時', value: '13時'},
          {label: '14時', value: '14時'},
          {label: '15時', value: '15時'},
          {label: '16時', value: '16時'},
          {label: '17時', value: '17時'},
          {label: '18時', value: '18時'},
          {label: '19時', value: '19時'},
          {label: '20時', value: '20時'},
          {label: '21時', value: '21時'},
          {label: '22時', value: '22時'},
          {label: '23時', value: '23時'},
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
