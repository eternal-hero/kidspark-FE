<template>
  <li class="review-block__list-item">
    {{ review }}
    <div class="review-block__list-img"><img src="@/assets/supporter/img/common/icn-user.png" alt="サポーターからのレビュー"></div>
    <div class="review-block__list-ct">
      <div class="review-block__list-meta">
        <div class="user-heading">
          <div class="user-status">
            <div class="user-status__star">
              <span class="user-status__star-icn" :data-rate="rate"></span>
            </div>
          </div>
        </div>
        <span class="review-block__list-date">{{ date }}</span>
      </div>
      <p>{{ message }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ExeoTableSupporterReviewBox",
  props: {
    rate: {
      type: Number,
      default: 0
    },
    date: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

