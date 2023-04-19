<template>
  <div class="job-money">
    <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="" width="17">時間変更後見積もり金額</h3>
    <div class="job-money__list">
      <div class="job-money__list-item">
        <div class="job-money__list-ttl">基本料金</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">6000円</span>（1500円×4.0時間）</div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl">オプション料金</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
        <div class="job-money__list-note"> 英語学習　+500円/1時間あたり<br> マッサージ　500円/1回あたり </div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl"> 割引料金 </div>
        <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
        <div class="job-money__list-note"> 初回予約割引　-500円/1回あたり </div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl"> 交通費 </div>
        <div class="job-money__list-desc"><span class="c-fw--bd">1080円</span></div>
        <div class="job-money__list-note"> 【電車】　〇〇駅&#8646;〇〇駅　680円（往復）<br> 【バス】　〇〇&#8646;〇〇　400円（往復） </div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl"> キャンセル料 </div>
        <div class="job-money__list-desc"><span class="c-fw--bd c-fc--rd">750円</span></div>
        <div class="job-money__list-note"> サポート開始まで48時間以内<br> 基本料金　1時間00分の50%のキャンセル料　600円 </div>
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
        <div class="job-money__list-desc"><span class="c-fw--bd">1500円</span></div>
      </div>
      <div class="job-money__list-item job-money__list-item--price">
        <div class="job-money__list-ttl">合計</div>
        <div class="job-money__list-desc">
          <span>11,830</span>円
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterJobAmountEstimateAfterChange",
};
</script>
