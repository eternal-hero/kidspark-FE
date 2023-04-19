<template>
  <div class="modal-ct__select">
    <ul class="modal-ct__select-group">
      <li class="modal-ct__select-item">
        <div class="form_part_select">
          <select @change="updateValue" :value="start_hour">
            <slot></slot>
            <option v-for="(option, index) in option_hours" :value="option.value" :key="index">
              {{ option.label }}
            </option>
          </select>
        </div>
      </li>
      <li class="modal-ct__select-item">
        <div class="form_part_select">
          <select @change="updateValue" >
            <slot></slot>
            <option v-for="(option, index) in option_minutes" :value="option.value" :key="index">
              {{ option.label }}
            </option>
          </select>
        </div>
      </li>
    </ul>
    <span>〜</span>
    <ul class="modal-ct__select-group">
      <li class="modal-ct__select-item">
        <div class="form_part_select">
          <select @change="updateValue" :value="end_hour">
            <slot></slot>
            <option v-for="(option, index) in option_hours" :value="option.value" :key="index">
              {{ option.label }}
            </option>
          </select>
        </div>
      </li>
      <li class="modal-ct__select-item">
        <div class="form_part_select">
          <select @change="updateValue">
            <slot></slot>
            <option v-for="(option, index) in option_minutes" :value="option.value" :key="index">
              {{ option.label }}
            </option>
          </select>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    option_hours: {
      type: Array,
      default() {
        return [
          {label: '00', value: '00'},
          {label: '01', value: '01'},
          {label: '02', value: '02'},
          {label: '03', value: '03'},
          {label: '04', value: '04'},
          {label: '05', value: '05'},
          {label: '06', value: '06'},
          {label: '07', value: '07'},
          {label: '08', value: '08'},
          {label: '09', value: '09'},
          {label: '10', value: '10'},
          {label: '11', value: '11'},
          {label: '12', value: '12'},
          {label: '13', value: '13'},
          {label: '14', value: '14'},
          {label: '15', value: '15'},
          {label: '16', value: '16'},
          {label: '17', value: '17'},
          {label: '18', value: '18'},
          {label: '19', value: '19'},
          {label: '20', value: '20'},
          {label: '21', value: '21'},
          {label: '22', value: '22'},
          {label: '23', value: '23'},
        ]
      }
    },
    option_minutes: {
      type: Array,
      default() {
        return [
          {label: '00', value: '00'},
          {label: '15', value: '15'},
          {label: '30', value: '30'},
          {label: '45', value: '45'},
        ];
      },
    },
    start_hour: {
      type: [Number, String],
      default: '00'
    },
    end_hour: {
      type: [Number, String],
      default: '00'
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
