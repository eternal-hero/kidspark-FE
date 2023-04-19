<template>
  <div class="job-money">
    <h3 class="job-money__ttl" :class="isShow ? 'js-show-acc' : ''"><img :src="require('@/assets/supporter/img/common/icon-yen.svg')" alt="予定合計金額" width="17">{{ title }}</h3>
    <div class="job-money__list" :class="isShow ? 'js-ct-acc' : ''">
      <div class="job-money__list-item" v-if="basicFee != 0">
        <div class="job-money__list-ttl">基本料金</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">{{ basicFee }}円（{{ basicFeeDescription }}）</span></div>
      </div>
      <div class="job-money__list-item" v-if="extensionFee > 0">
        <div class="job-money__list-ttl">延長料金</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">{{ extensionFee }}円（{{ extensionFeeDescription }})</span></div>
      </div>
      <div v-for="fee in listFee" class="job-money__list-item">
        <div class="job-money__list-ttl">{{ fee.title }}</div>
        <div class="job-money__list-desc"><span :class="{'c-fw--bd':fee.cost!==0, [fee.class]: true}">{{ fee.cost }}円</span></div>
        <div class="job-money__list-note" v-if="fee.description" v-html="fee.description"></div>
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
      <div class="job-money__list-item" v-if="rentalShippingFee > 0">
        <div class="job-money__list-ttl"> レンタル往復送料 </div>
        <div class="job-money__list-desc"><span class="c-fw--bd">{{ rentalShippingFee }}円</span></div>
      </div>
      <div class="job-money__list-item" v-if="monitoringFee > 0">
        <div class="job-money__list-ttl"> 見守り依頼料 </div>
        <div class="job-money__list-desc"><span class="c-fw--bd">{{ monitoringFee }}円</span></div>
        <div class="job-money__list-note" v-html="monitoringFeeDescription"></div>
      </div>
      <div class="job-money__list-item" v-if="usePoint != 0">
        <div class="job-money__list-ttl">ポイント利用</div>
        <div class="job-money__list-desc job-money__list-desc--red"><span class="c-fw--bd">{{ usePoint }} 円</span></div>
      </div>
      <div class="job-money__list-item job-money__list-item--price">
        <div class="job-money__list-ttl">合計</div>
        <div class="job-money__list-desc">
          <span>{{ total }}</span>円
        </div>
      </div>
      <div class="job-money__list-note" v-if="pointNote != ''">
        <div class="job-money__list-item">
          <div> ポイント支払い </div>
          <div class="job-money__list-desc">{{ pointNote }}pt</div>
        </div>
        <div v-if="shortagePoints !== ''" class="job-money__list-item c-fc--rd c-fw--sbd">
          <div>不足ポイント</div>
          <div class="job-money__list-des c-fw--sbdc">
            {{ shortagePoints }}pt
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableGuardianEstimateFee",
  props: {
    title: {
      type: String,
      default: '最終支払金額'
    },
    basicFee: {
      type: Number,
      default: 600
    },
    extensionFee: {
      type: Number
    },
    basicFeeDescription: {
      type: String,
      default: '1200円×0.5時間'
    },
    extensionFeeDescription: {
      type: String,
      default: ''
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
      type: Array,
      default: []
    },
    tooltipText: {
      type: String,
      default: '手数料には保険料と消費税が含まれます。<a href=\'https://www.kids-parks.com/faq/commission/42/\' target=\'_blank\'>手数料についてはこちら</a>'
    },
    rentalShippingFee: {
      Type: Number,
    },
    monitoringFee: {
      Type: Number,
    },
    monitoringFeeDescription: {
      Type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    pointNote: {
      type: String,
      default: ''
    },
    usePoint: {
      type: Number,
      default: 0,
    },
    shortagePoints: {
      type: String,
      default: '',
    },
  },
}
</script>
