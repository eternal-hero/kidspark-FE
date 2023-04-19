<template>
  <main id="page-U044-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(対面事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(対面事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">レポートの承認・お支払いを内容を確認して、支払いを完了してください。</h2>
            <hr class="hr mbpc-33">

            <div class="quote-list__box">
              <div class="quote-list__box-ttl">お支払い方法：　クレジットカード決済</div>
              <div class="quote-list__box-ct">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> クレジットカード </div>
                  <div class="quote-list__fee-ct">
                    <div class="quote-list__credit">
                      <p class="quote-list__credit-brand"><img src="@/assets/guardian/img/common/icon-visa.svg" alt="クレジット会社" width="35"></p>
                      <p class="quote-list__credit-card">楽天カード</p>
                      <p class="quote-list__credit-no">****1456</p>
                    </div>
                  </div>
                </div>
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> ポイント利用 </div>
                  <div class="quote-list__fee-ct">1000ptを利用する</div>
                </div>
              </div>
            </div>

            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="最終支払金額" width="17">最終支払金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">900円（1200円×0.75時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 手数料 <span>（保険料・消費税込み）</span>
                    <div class="statuschips tooltip">
                      <span></span>
                      <p class="tooltip__txt">
                        手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission-2/187/' target='_blank'>手数料についてはこちら</a>
                      </p>
                    </div>
                  </div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">0円</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">ポイント利用</div>
                  <div class="job-money__list-desc job-money__list-desc--red"><span class="c-fw--bd">-500円</span></div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>400</span>円
                  </div>
                </div>
              </div>
            </div>

            <div class="c-control--submit">
              <NuxtLink to="payment" class="btn_back w100">もどる</NuxtLink>
              <a href="./U045.html" class="btn_entry">この内容で支払いを完了する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="7" :steps="$STEP_PRE_INTERVIEW_GUARDIAN"></guardian-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from '@/components/block/QuestionBox.vue';
export default {
  components: { GuardianRightMenu, QuestionBox },
  layout: 'guardian',
  data() {
    return {
      questions: [
        {
          'name': '支払い方法について',
          'url': 'https://www.kids-parks.com/faq/payment/195/',
        },
        {
          'name': 'ポイントのご利用方法について',
          'url': 'https://www.kids-parks.com/faq/point-2/172/',
        },
        {
          'name': '自治体助成・福利厚生について',
          'url': 'https://stg.kids-parks.com/faq/subsidy/280/',
        },
        {
          'name': 'サポート中の事故・トラブル',
          'url': 'https://www.kids-parks.com/faq/trouble-4/205/',
        },
      ],
    }
  }
}
</script>
