<template>
  <div>
    <div class="quote-list__item quote-list__item--pay-credit">
      <div class="quote-list__fee">
        <div class="quote-list__fee-item">
          <div class="quote-list__fee-ttl"> 登録クレジットカード </div>
          <div class="quote-list__fee-ct">
            <div class="quote-list__credit">
              <p class="quote-list__credit-brand"><img src="@/assets/guardian/img/common/icon-visa.svg" alt="クレジット会社" width="35"></p>
              <p class="quote-list__credit-card">楽天カード</p>
              <p class="quote-list__credit-no">{{ numberCard }}</p>
              <p class="c-txt__04"><a href="javascript:void(0);" class="c-fw--md js-modal" data-modal="M003">変更する</a></p>
            </div>
          </div>
        </div>
        <div class="quote-list__fee-item quote-list__fee-item--start">
          <div class="quote-list__fee-ttl"> ポイント利用 </div>
          <div class="quote-list__fee-ct">
            <div class="quote-list__fee-pt">
              <p class="quote-list__fee-pt-Possess">保有ポイント：<span>{{ point }}pt</span></p>
              <ul class="form-check form-check--radio form-check--full">
                <li v-for="usePoint in listUsePoint" class="form-check__item">
                  <label class="form-edit__radio_02 js-check" data-id="form-edit__checkbox01">
                    <input type="radio" name="point" class="checks" checked="checked" :value="usePoint.value" required="">
                    <span class="checkmark"></span>{{ usePoint.name }}</label>
                </li>
              </ul>
              <div class="quote-list__fee-pt-use">
                <div class="quote-list__fee-input">
                  <input type="text" class="form-edit__input" value="0">
                  <span>pt</span>
                </div>
                <p>を利用する</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ExeoTableGuardianModalPaymentMethod></ExeoTableGuardianModalPaymentMethod>
  </div>
</template>

<script>
import ExeoTableGuardianModalPaymentMethod from "@/components/table/ExeoTableGuardianModalPaymentMethod";

export default {
  name: "ExeoTableGuardianPaymentMethod",
  components: {
    ExeoTableGuardianModalPaymentMethod
  },
  props: {
    numberCard: {
      type: String
    },
    point: {
      type: Number
    },
    listUsePoint: {
      type: Object,
      default: [
        {name: 'ポイントを利用しない', value: 'ポイントを利用しない'},
        {name: 'すべてのポイントを利用する', value: 'すべてのポイントを利用する'},
        {name: '一部のポイントを利用する ', value: '一部のポイントを利用する '},
      ]
    }
  }
}
</script>
