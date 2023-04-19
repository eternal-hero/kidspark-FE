<template>
  <div class="quote-list__box">
    <div class="quote-list__box-ttl">お支払い方法：　{{ title }}</div>
    <div class="quote-list__box-ct">
      <div class="quote-list__fee-item" v-if="showCreditCard">
        <div class="quote-list__fee-ttl">クレジットカード</div>
        <div class="quote-list__fee-ct">
          <div class="quote-list__credit">
            <p class="quote-list__credit-brand">
              <img
                src="@/assets/guardian/img/common/icon-visa.svg"
                alt="クレジット会社"
                width="35"
              />
            </p>
            <p class="quote-list__credit-card">楽天カード</p>
            <p class="quote-list__credit-no">{{ cardNumber }}</p>
          </div>
        </div>
      </div>
      <div class="quote-list__fee-item" v-if="points > 0">
        <div class="quote-list__fee-ttl">ポイント利用</div>
        <div class="quote-list__fee-ct">{{ points }}ptを利用する</div>
      </div>
      <div class="quote-list__fee-item" v-if="missingPoints > 0">
        <div class="quote-list__fee-ttl">不足分ポイント購入</div>
        <div class="quote-list__fee-ct">{{ missingPoints }}ptを購入する</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableGuardianPreviewPaymentMethod",
  props: {
    title: {
      typeof: String,
      default: "クレジットカード決済",
    },
    showCreditCard:{
      typeof: Boolean,
      default: true,
    },
    cardNumber: {
      typeof: String,
      default: "",
    },
    points: {
      typeof: Number,
      default: 0,
    },
    missingPoints: {
      typeof: Number,
      default: 0,
    },
  },
};
</script>
