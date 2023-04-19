<template>
  <div class="c-review-stars">
    <span>
      <template v-for="n in number">
        <input :id="'review0' + n" type="radio" :value="n" :name="name" :checked="isRating && n===1" @input="updateValue">
        <label :for="'review0' + n"><i class="fa-solid fa-star"></i></label>
      </template>
    </span>
  </div>
</template>

<script>

export default {
  name: "ExeoRating",
  props: {
    number: {
      type: Number,
      default: 5
    },
    name: {
      type: String,
    },
    isRating: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    updateValue: function (e) {
      this.$emit("input", e.target.value);
    },
  },
}
</script>
<style scoped>
</style>
