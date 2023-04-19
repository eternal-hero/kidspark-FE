<template>
  <div class="auto-registration__deadline-time">
    <div class="form_part_select">
      <select @change="updateValue">
        <slot></slot>
        <option v-for="(option, index) in option_years" :value="option.value" :key="index">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="form_part_select">
      <select @change="updateValue" :value="month">
        <slot></slot>
        <option v-for="(option, index) in option_months" :value="option.value" :key="index">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="form_part_select">
      <select @change="updateValue">
        <slot></slot>
        <option v-for="(option, index) in option_days" :value="option.value" :key="index">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option_years: {
      type: Array,
      default() {
        return [
          {label: '2023年', value: '2023'},
          {label: '2022年', value: '2022'},
          {label: '2021年', value: '2021'},
          {label: '2020年', value: '2020'}
        ]
      }
    },
    option_months: {
      type: Array,
      default() {
        return [
          {label: '1月', value: '1'},
          {label: '2月', value: '2'},
          {label: '3月', value: '3'},
          {label: '4月', value: '4'},
          {label: '5月', value: '5'},
          {label: '6月', value: '6'},
          {label: '7月', value: '7'}
        ]
      }
    },
    option_days: {
      type: Array,
      default() {
        return [
          {label: '17（金）', value: '17'},
          {label: '18（金）', value: '18'},
          {label: '19（金）', value: '19'},
          {label: '20（金）', value: '20'}
        ]
      }
    },
    month: {
      type: [Number, String],
      default: 3
    }
  },
  methods: {
    updateValue: function (e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e.target.value); // callback event
    }
  }
};
</script>
