<template>
  <div class="quote-list__fee">
    <div class="quote-list__fee-item">
      <div class="quote-list__fee-ttl"> {{ feeTitle }} </div>
      <div class="quote-list__fee-ct">
        <div class="quote-list__fee-input">
          <input type="text" class="form-edit__input" :value="totalOptionFee" :placeholder="totalOptionFeePlaceholder">
          <span>円</span>
        </div>
      </div>
    </div>
    <div class="quote-list__fee-item quote-list__fee-item--start">
      <div class="quote-list__fee-ttl"> 内訳 </div>
      <div class="quote-list__fee-ct">
        <textarea name="" cols="30" rows="10" class="form-edit__textarea" :placeholder="breakdownPlaceholder" v-model="breakdown"></textarea>
        <div class="quote-list__fee-note" v-html="feeNote"></div>
        <div class="request-form__ct-right">
          <div class="c-example__button js-btn-acc"><span>入力例</span></div>
          <div class="c-example__cont js-acc-cont">
            <span class="c-example__close js-acc-close">×</span>
            <p class="c-txt__01" v-html="textExample"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableFeeBox",
  props: {
    feeTitle: {
      type: String,
      default: 'オプション料金合計'
    },
    totalOptionFee: {
      type: Number,
      default: 2500
    },
    totalOptionFeePlaceholder: {
      type: String,
      default: '例）300'
    },
    breakdown: {
      type: String,
      default: 'お庭の手入れ　+1000円/1回あたり <br> 買い物代行　+1000円/1回あたり'
    },
    breakdownPlaceholder: {
      type: String,
      default: ''
    },
    textExample: {
      type: String,
      default: '(例)<br>・お庭のお手入れは時間内での草むしり、落ち葉集めのみとなります。<br>・作りおき料理は5品になります。'
    },
    feeNote: {
      type: String,
      default: ''
    }
  }
}
</script>
