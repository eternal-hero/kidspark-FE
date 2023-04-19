<template>
  <main id="page-U041" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(Web事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">完了レポート待ち</h2>
              <p class="c-txt__01"> サポーターからの完了報告をお待ちください。</p>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="./U046.html">依頼メッセージ</a></li>
              <li class="m-subnav__item is-active"><span>依頼詳細</span></li>
            </ul>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">600円（1200円×0.5時間）</span></div>
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
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>600</span>円
                  </div>
                </div>
              </div>
            </div>
            <guardian-reservation-web-pre-interview-info></guardian-reservation-web-pre-interview-info>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="6" :steps="$STEP_PRE_INTERVIEW_GUARDIAN"></guardian-right-menu>
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
import GuardianReservationWebPreInterviewInfo from "@/components/block/GuardianReservationWebPreInterviewInfo";
export default {
  components: { GuardianReservationWebPreInterviewInfo, GuardianRightMenu, QuestionBox },
  layout: 'guardian',
  data() {
    return {
      questions: [
        {
          'name': 'キャンセル規定について',
          'url': 'https://www.kids-parks.com/faq/cancel-3/191/',
        },
        {
          'name': 'サポート開始までの流れ',
          'url': 'https://www.kids-parks.com/faq/flow-2/183/',
        },
        {
          'name': '開始時間になってもサポーターと連絡が取れない',
          'url': 'https://www.kids-parks.com/faq/trouble-3/197/',
        },
        {
          'name': 'サポート当日に延長をお願いしたい場合',
          'url': 'https://www.kids-parks.com/faq/reserve-2/201/',
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
