<template>
  <main id="page-U063" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">内容を確認して、予約を確定してください。</h2>
            <hr class="hr mbpc-33">

            <div class="quote-list__box">
              <div class="quote-list__box-ttl">お支払い方法：　クレジットカード決済</div>
              <div class="quote-list__box-ct">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> クレジットカード </div>
                  <div class="quote-list__fee-ct">
                    <div class="quote-list__credit">
                      <p class="quote-list__credit-brand"><img src="~/assets/guardian/img/common/icon-visa.svg" alt="クレジット会社" width="35"></p>
                      <p class="quote-list__credit-card">楽天カード</p>
                      <p class="quote-list__credit-no">****1456</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="~/assets/guardian/img/common/icon-yen.svg" alt="事前見積もり金額" width="17">事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">9500円（0000円×5.0時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">オプション料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
                  <div class="job-money__list-note"> 英語学習　+200円/1時間あたり<br>マッサージ　500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">割引料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
                  <div class="job-money__list-note"> 初回予約割引　-500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 交通費 </div>
                  <div class="job-money__list-desc">1080円</div>
                  <div class="job-money__list-note"> 【電車】　〇〇駅&#8646;〇〇駅　680円（往復）<br>【バス】　〇〇&#8646;〇〇　400円（往復） </div>
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
                    <span>14,080</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="quote-list__fee-form">
              <p class="c-ttl__02">仮決済について</p>
              <p class="c-txt__01">キッズパークでは予約を確定する前に仮決済が行われます。クレジットカードでの仮払いは与信枠の確保となるため、仮決済をおこなった時点では決済は確定せず請求もおこなわれません。実際の請求はお仕事が完了してのお支払い後となります。</p>
            </div>

            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="./U064.html" class="btn_entry">この内容で予約確定する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3" />
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/guardian/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/payment/195/" target="_blank">支払い方法について</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/point-2/172/" target="_blank">ポイントのご利用方法について</a></li>
                <li class="questions-box__list-item"><a href="https://stg.kids-parks.com/faq/subsidy/280/" target="_blank">自治体助成・福利厚生について</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/trouble-4/205/" target="_blank">サポート中の事故・トラブル</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from '~/components/block/QuestionBox.vue'

export default {
  components: { GuardianRightMenu, QuestionBox },
  layout: 'guardian',
}
</script>
