<template>
  <div class="pagination">
    <ul class="pagination_list">
      <li>
        <button class="pagination_btn pagination_btn_prev" @click.prevent="prev">
          <span>前へ</span>
        </button>
      </li>
      <li>
        <input
          type="text"
          aria-activedescendant=""
          class="pagination_input"
          v-model="value.current_page"
          min="1"
          :max="value.last_page"
          @input="$emit('change-page', $event.target.value)"
          disabled
        />
      </li>
      <li>
        <span class="pagination_text">／ {{ value.last_page }}</span>
      </li>
      <li>
        <button class="pagination_btn pagination_btn_next" @click.prevent="next">
          <span>次へ</span>
        </button>
      </li>
    </ul>
    <p>
      {{ value.last_page }} ページ中 {{ value.current_page }} ページ目を表示（ {{ value.per_page }} 件）
    </p>
  </div>
</template>

<script>

export default {
  name: "ExeoPagination",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    prev() {
      if (this.value.current_page > 1) {
        this.$emit('change-page', this.value.current_page - 1);
      }
    },
    next() {
      if (this.value.current_page < this.value.last_page) {
        this.$emit('change-page', this.value.current_page + 1);
      }
    }
  },
};
</script>

<style scoped></style>
