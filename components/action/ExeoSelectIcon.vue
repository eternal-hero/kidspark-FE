<template>
  <ul class="use-list">
    <li class="use-list__item" v-for="(item, index) in icons">
      <label class="c-select-icn">
        <input type="radio" :name="name" :checked="index === 0" :value="item.value" @input="updateValue">
        <span>
          <img :src="item.url" alt="use" width="40">
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ExeoSelectIcon",
  props: {
    icons: {
      type: Array,
      default() {
        return [
          {url: require('@/assets/supporter/img/p018/use-01.png'), value: 'supporter/img/p018/use-01.png'},
          {url: require('@/assets/supporter/img/p018/use-02.png'), value: 'supporter/img/p018/use-02.png'},
          {url: require('@/assets/supporter/img/p018/use-03.png'), value: 'supporter/img/p018/use-03.png'},
          {url: require('@/assets/supporter/img/p018/use-04.png'), value: 'supporter/img/p018/use-04.png'},
          {url: require('@/assets/supporter/img/p018/use-05.png'), value: 'supporter/img/p018/use-05.png'},
          {url: require('@/assets/supporter/img/p018/use-06.png'), value: 'supporter/img/p018/use-06.png'},
          {url: require('@/assets/supporter/img/p018/use-07.png'), value: 'supporter/img/p018/use-07.png'},
          {url: require('@/assets/supporter/img/p018/use-08.png'), value: 'supporter/img/p018/use-08.png'},
          {url: require('@/assets/supporter/img/p018/use-09.png'), value: 'supporter/img/p018/use-09.png'},
        ]
      }
    },
    name: {
      type: String,
    },
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
