<template>
  <main id="page-U051" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">予約詳細(対面事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(対面事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">対面事前面談を開始しました。</h2>
              <p class="c-txt__01"> 事前にご要望やお伝えしておく点などありましたら、サポーターにメッセージでご連絡ください。</p>
            </div>
            <tab :tabs="tabs"></tab>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">9500円（0000円×5.0時間）</span></div>
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
                        手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission-2/187/' target='_blank'>手数料についてはこちら</a>
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
            <guardian-reservation-info></guardian-reservation-info>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="5"></guardian-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from '~/components/block/QuestionBox.vue';
import GuardianReservationInfo from '@/components/block/GuardianReservationInfor.vue'
import Tab from '@/components/block/Tab.vue'

export default {
  components: { Tab, GuardianReservationInfo, GuardianRightMenu, QuestionBox },
  layout: 'guardian',
  data() {
    return {
      tabs: [
        {
          name: '依頼メッセージ',
          path: '#'
        },
        {
          name: '依頼詳細',
          path: '/guardian/reservation-detail/face-to-face-interview/started'
        },
      ],
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
