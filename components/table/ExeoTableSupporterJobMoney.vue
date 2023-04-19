<template>
  <div class="job-money">
    <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="最終受取金額" width="17">最終受取金額</h3>
    <div class="job-money__list">
      <div class="job-money__list-item">
        <div class="job-money__list-ttl">基本料金</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">4500円</span>（1500円×3.0時間）</div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl">延長料金</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">1500円</span>（45分×20%）</div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl">オプション料金</div>
        <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
        <div class="job-money__list-note"> 2人お預かり　+700円/1時間あたり<br> マッサージ　500円/1回あたり </div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl"> 割引料金 </div>
        <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
        <div class="job-money__list-note"> 初回予約割引　-500円/1回あたり </div>
      </div>
      <div class="job-money__list-item">
        <div class="job-money__list-ttl"> 交通費 </div>
        <div class="job-money__list-desc"><span class="c-fw--bd">1280円</span></div>
        <div class="job-money__list-note"> 【電車】　〇〇駅&#8646;〇〇駅　680円（往復）<br> 【バス】　〇〇&#8646;〇〇　400円（往復） </div>
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
        <div class="job-money__list-desc"><span class="c-fw--bd">-1500円</span></div>
      </div>
      <div class="job-money__list-item job-money__list-item--price">
        <div class="job-money__list-ttl">合計</div>
        <div class="job-money__list-desc">
          <span>7,700</span>円
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterJobMoney",
};
</script>

<style scoped></style>
