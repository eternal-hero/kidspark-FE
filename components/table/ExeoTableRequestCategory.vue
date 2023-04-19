<template>
  <div class="quote-list__item">
    <h3 class="quote-list__ttl">基本料金</h3>
    <p class="c-txt__01">基本料金（時給）を設定してください。割引などある場合はこちらで料金を設定いただけます。</p>
    <div class="quote-list__box">
      <div class="quote-list__box-ttl">今回の依頼カテゴリー：　{{ categoryName }}</div>
      <div class="quote-list__box-ct">
        <div class="quote-list__box-desc">あなたの家事代行設定料金</div>
        <div class="quote-list__box-price">
          <div v-if="hasImage" class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{ houseKeepingFee01 }}<span>円<span>/1時間</span></span></div>
          <div v-if="hasImage" class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{ houseKeepingFee02 }}<span>円<span>/1時間</span></span></div>
          <div v-if="!hasImage" class="quote-list__box-price-item" v-html="customTextFee"></div>
        </div>
      </div>
    </div>
    <div class="quote-list__fee">
      <div class="quote-list__fee-item">
        <div class="quote-list__fee-ttl"> 基本料金<span>※</span>
        </div>
        <div class="quote-list__fee-ct">
          <div class="quote-list__fee-input">
            <input type="text" class="form-edit__input" :value="basicFee" placeholder="（例）1800">
            <span>円／1時間あたり</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableRequestCategory",
  props: {
    categoryName: {
      type: String,
      default: '家事代行'
    },
    houseKeepingFee01: {
      type: Number,
      default: 1500
    },
    houseKeepingFee02: {
      type: Number,
      default: 1400
    },
    basicFee: {
      type: Number,
      default: 1500
    },
    hasImage: {
      type: Boolean,
      default: true
    },
    customTextFee: {
      type: String,
      default: ''
    }
  }
}
</script>
