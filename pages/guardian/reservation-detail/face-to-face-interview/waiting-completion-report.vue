<template>
  <main id="page-U028" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">完了レポート待ち</h2>
              <p class="c-txt__01"> サポーターからの完了報告をお待ちください。</p>
            </div>
            <tab :tabs="tabs"></tab>
            <guardian-reservation-info2></guardian-reservation-info2>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="6"></guardian-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
    <m0042></m0042>
  </main>
</template>
<script>

import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from '~/components/block/QuestionBox.vue'
import Tab from '@/components/block/Tab.vue'
import M0042 from '@/components/modal/M004-2.vue'
import GuardianReservationInfo2 from '@/components/block/GuardianReservationInfor2.vue'

export default {
  components: { GuardianReservationInfo2, M0042, Tab, GuardianRightMenu, QuestionBox },
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
          path: '/guardian/reservation-detail/face-to-face-interview/waiting-completion-report'
        },
      ],
      questions: [
        {
          'name': 'キャンセル規定について',
          'url': 'https://www.kids-parks.com/faq/cancel-3/191/',
        },
        {
          'name': 'お仕事開始までの流れ',
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
          'name': '予約確定後に時間を変更したい',
          'url': 'https://www.kids-parks.com/faq/reserve-3/203/',
        }
      ],
    }
  },
}
</script>
