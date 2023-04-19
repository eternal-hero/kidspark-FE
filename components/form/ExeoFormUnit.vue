<template>
  <div class="form_part_unit">
    <input
      class="form_unit"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />
    <span class="form_part_unit_label">{{ unit }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: [String, Number] },
    placeholder: { type: String },
    unit: { type: String },
  },
  methods: {
    updateValue: function (e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
