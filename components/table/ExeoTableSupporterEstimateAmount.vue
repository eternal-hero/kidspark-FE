<template>
  <div class="job-money">
    <h3 class="job-money__ttl"><img :src="require('@/assets/supporter/img/common/icon-yen.svg')" alt="予定合計金額" width="17">事前見積もり金額</h3>
    <div class="job-money__list">
      <div class="job-money__list-item">
        <div class="job-money__list-ttl">基本料金</div>
        <div class="job-money__list-desc">{{ basicFee }}円（{{ basicFeeDescription }}）</div>
      </div>
      <div v-for="fee in listFee" class="job-money__list-item">
        <div class="job-money__list-ttl">{{ fee.title }}</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">{{ fee.cost }}円</span></div>
        <div class="job-money__list-note" v-html="fee.description"></div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl"> 手数料 <span>（保険料・消費税込み）</span>
          <div class="statuschips tooltip">
            <span></span>
            <p class="tooltip__txt" v-html="tooltipText"></p>
          </div>
        </div>
        <div class="job-money__list-desc"><span class="c-fw--bd">{{ commission }}円</span></div>
      </div>
      <div class="job-money__list-item job-money__list-item--price">
        <div class="job-money__list-ttl">合計</div>
        <div class="job-money__list-desc">
          <span>{{ total }}</span>円
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterEstimateAmount",
  props: {
    basicFee: {
      type: Number,
      default: 600
    },
    basicFeeDescription: {
      type: String,
      default: '1200円×0.5時間'
    },
    commission: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 600
    },
    listFee: {
      type: Object,
      default: []
    },
    tooltipText: {
      type: String,
      default: '手数料には保険料と消費税が含まれます。<a href=\'https://www.kids-parks.com/faq/commission/42/\' target=\'_blank\'>手数料についてはこちら</a>'
    }
  },
}
</script>
