<template>
  <div class="job-money">
    <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" :alt="label" width="17"> {{ label }}</h3>
    <div class="job-money__list">
      <div class="job-money__list-item">
        <div class="job-money__list-ttl">基本料金</div>
        <div class="job-money__list-desc">600円（1200円×0.5時間）</div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl"> 手数料 <span>（保険料・消費税込み）</span>
          <div class="statuschips tooltip">

            <span></span>
            <p class="tooltip__txt">
              手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission/42/' target='_blank'>手数料についてはこちら</a>
            </p>
          </div>
        </div>
        <div class="job-money__list-desc">0円</div>
      </div>
      <div class="job-money__list-item job-money__list-item--price">
        <div class="job-money__list-ttl">合計</div>
        <div class="job-money__list-desc">
          <span>600</span>円
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupporterJobMoney3",
  props: {
    label: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped>

</style>
