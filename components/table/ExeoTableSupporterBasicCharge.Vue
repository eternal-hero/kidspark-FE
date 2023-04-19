<template>
  <div class="quote-list__item">
    <h3 class="quote-list__ttl">基本料金</h3>
    <p class="c-txt__01">基本料金（時給）を設定してください。割引などある場合はこちらで料金を設定いただけます。</p>
    <div class="quote-list__box">
      <div class="quote-list__box-ttl">今回の依頼カテゴリー：　{{ basicCharge.category }}</div>
      <div class="quote-list__box-ct">
        <div class="quote-list__box-desc">{{ basicCharge.description }}</div>
        <div class="quote-list__box-price">
          <div class="quote-list__box-price-item">
            <b>Web事前面談</b> {{ basicCharge.preInterviewOnlineFee }}<span>円<span>/1時間</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="quote-list__fee">
      <div class="quote-list__fee-item">
        <div class="quote-list__fee-ttl"> 基本料金<span>※</span>
        </div>
        <div class="quote-list__fee-ct">
          <div class="quote-list__fee-input">
            <input type="text" class="form-edit__input" :value="basicCharge.basicFee" placeholder="（例）1800">
            <span>円／1時間あたり</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

  <script>
  export default {
    name: "ExeoTableSupporterBasicCharge",
    props: {
      basicCharge: {
        type: Object,
        default: {
          category: 'ベビーシッター',
          description: 'あなたのシッター設定料金',
          preInterviewOnlineFee: '1200',
          basicFee: '1200'
        }
      }
    }
  };
  </script>
