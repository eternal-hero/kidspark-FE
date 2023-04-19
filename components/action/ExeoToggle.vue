<template>
  <div @click="changeValue">
    <div class="form_part_works" :class="[isShow ? 'no-hover' : '']" v-show="checked">
      <span>{{ toggleTexts[0] }}</span>
    </div>
    <div class="form_part_close" :class="[isShow ? 'no-hover' : '']" v-show="!checked">
      <span>{{ toggleTexts[1] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoToggle",
  props: {
    value: {
      type: [Boolean, Number],
      required: true,
    },
    toggleTexts: {
      type: Array,
      default() {
        return ["家事代行をする", "家事代行をしない"];
      },
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    changeValue() {
      if(this.isShow) return

      if (typeof this.checked == "boolean") {
        this.checked = !this.checked;
      } else {
        this.checked = 1 - this.checked;
      }
      this.$emit("input", this.checked);
    },
  },
  created() {
    this.checked = this.value
  },
  watch: {
    value: function() {
      this.checked = this.value
    }
  }
};
</script>

<style scoped></style>
<!--<exeo-toggle @v-model="checked" :toggle-texts="['ON', 'OFF']"></exeo-toggle>-->
