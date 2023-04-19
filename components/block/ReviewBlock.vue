<template>
  <div class="review-block review-block--02 mbpc-41 mbsp-38">
    <ul class="review-block__list c-txt__01 content-load-ten">
      <li class="review-block__list-item" v-for="(item, key) in reviews" :key="key">
        <div class="review-block__list-img"><img src="@/assets/guardian/img/common/icn-user.png" alt="サポーターからのレビュー"></div>
        <div class="review-block__list-ct">
          <div class="review-block__list-meta">
            <div class="user-heading">
              <div class="user-status">
                <div class="user-status__star">
                  <span class="user-status__star-icn" data-rate="5"></span>
                </div>
              </div>
            </div>
            <span class="review-block__list-date">2022年12月</span>
          </div>
          <p v-html="item.content">この度もありがとうございました。<br> はなこもとても楽しかったと言っていました。またよろしくお願いします(*^◯^*) </p>
        </div>
      </li>
    </ul>
    <div class="c-al--r c-al--ctsp">
      <a href="" class="c-btn__06 js-load-ten">もっと見る</a>
    </div>
  </div>
</template>

<script>
import { loadMoreMixin } from '@/mixins/loadMoreMixin'

export default {
  name: 'ReviewBlock',
  mixins: [ loadMoreMixin ],
  props: {
    reviews: { type: Array },
  },
  mounted () {
    this.initLoadMore();
  }
}
</script>
<style scoped>
</style>