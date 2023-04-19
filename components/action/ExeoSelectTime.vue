<template>
  <div class="add-form__input-group add-form__input-group--styles02">
    <div class="tableform_select">
      <select name="pref_name" @input="updateHour" :value="hours">
        <template v-for="(option, index) in option_hours">
          <option :value="option.value" :key="index">
            {{ option.label }}
          </option>
        </template>
      </select>
    </div>

    <div class="tableform_select">
      <select name="pref_name" @input="updateMinute" :value="minutes">
        <template v-for="(option, index) in option_minutes">
          <option :value="option.value" :key="index">
            {{ option.label }}
          </option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option_hours: { type: Array },
    option_minutes: { type: Array },
    hours: { type: Number },
    minutes: { type: Number },
    name: { type: String },
  },
  data() {
    return {};
  },
  methods: {
    updateHour: function (e) {
      this.$emit("update:hours", e.target.value);
    },
    updateMinute: function (e) {
      this.$emit("update:minutes", e.target.value);
    },
  },
};
</script>