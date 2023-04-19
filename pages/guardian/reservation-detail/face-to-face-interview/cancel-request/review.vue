<template>
  <main id="page-U060-2" class="wrapper">
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
            <div class="request-box">
              <h2 class="c-ttl__02">取り消し内容を確認してください</h2>
            </div>
            <form action="method">
              <div class="request-form request-form--confirm">
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 取り消し理由<span>※</span>
                    <span class="disclosure">サポーターに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 予定が変わった </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">サポーターに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 申し訳ありません、必要なくなりましたのでキャンセルです </div>
                </div>
              </div>
              <div class="request-note"> 予約リクエストの取り消しは、送信後の変更、取り消しは出来かねますのでご注意ください。 </div>
              <div class="c-control--submit">
                <NuxtLink to="/guardian/reservation-detail/face-to-face-interview/cancel-request/reason" class="btn_back w100">もどる</NuxtLink>
                <NuxtLink to="/guardian/reservation-detail/face-to-face-interview/cancel-request/canceled" class="btn_entry">確認ページへ</NuxtLink>
              </div>
            </form>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3" :steps="$STEP_PRE_INTERVIEW_GUARDIAN"></guardian-right-menu>
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
          path: '/guardian/reservation-detail/face-to-face-interview/message'
        },
        {
          name: '依頼詳細',
          path: '/guardian/reservation-detail/face-to-face-interview/remand'
        },
        {
          name: '完了レポート',
          path: '/guardian/reservation-detail/face-to-face-interview/thank-for-using/complete'
        },
      ],
      questions: [
        {
          'name': '完了レポートの差し戻しについて',
          'url': 'https://www.kids-parks.com/faq/report-3/208/',
        },
        {
          'name': '支払い方法について',
          'url': 'https://www.kids-parks.com/faq/payment/195/',
        },
        {
          'name': 'サポート中の事故・トラブル',
          'url': 'https://www.kids-parks.com/faq/trouble-4/205/',
        }
      ],
    }
  }
}
</script>
