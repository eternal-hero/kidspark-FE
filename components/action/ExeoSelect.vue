<template>
  <select :name="name" @change="updateValue" :value="value">
        <slot></slot>
        <option v-for="(option, index) in options" :value="option.value" :key="index">
            {{option.label}}
        </option>
  </select>
</template>

<script>
export default {
    props: {
        options: {type: Array},
        value: {type: [Number, String]},
        name: {type: String},
    },
    methods: {
        updateValue: function(e) {
            this.$emit('input', e.target.value);
            this.$emit('change'); // callback event
        }
    }
}
</script>

<style></style>
