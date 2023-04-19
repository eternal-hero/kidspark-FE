<template>
  <textarea
    :maxlength="maxLength"
    class="form_part_txt form_part_txt_memo"
    :placeholder="placeholder"
    :value="value"
    :rows="rows"
    :cols="cols"
    @input="updateValue"
  ></textarea>
</template>
<script>
export default {
  props: {
    value: { type: String },
    placeholder: {
      type: String,
      default: "入力して下さい",
    },
    rows: {
      type: [Number, String]
    },
    cols: {
      type: [Number, String]
    },
    maxLength: { type: String},
  },
  methods: {
    updateValue: function (e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
