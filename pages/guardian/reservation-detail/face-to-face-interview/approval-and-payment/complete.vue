<template>
  <main id="page-U053-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（対面事前面談）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（対面事前面談）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">完了レポートが届きました！</h2>
              <p class="c-txt__01">最終支払金額、完了レポートを確認してお支払いに進んでください。内容に疑問などありましたら、サポーターにメッセージでご連絡ください。</p>
            </div>
            <tab :tabs="tabs"></tab>
            <div class="job-infor">
              <h3 class="job-infor__ttl">サポート時間</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 15:00</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="" width="13">本日のご報告</h3>
              <div class="job-infor__list02">
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">面談内容確認</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw"> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">連絡事項</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw"> 特になし </div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="8"></guardian-right-menu>
            <div class="list-btn__item">
              <span class="c-btn__02 mbsp-21"><img src="@/assets/guardian/img/common/icon-time.svg" alt="icon" width="15">残り48時間</span>
            </div>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./U055.html" class="btn_entry">レポートを承認してお支払いへ進む</a>
              </div>
              <div class="list-btn__item">
                <a href="./U004.html" class="c-btn__04">差し戻し</a>
              </div>
            </div>
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
          path: '/guardian/reservation-detail/face-to-face-interview/message'
        },
        {
          name: '依頼詳細',
          path: '/guardian/reservation-detail/face-to-face-interview/approval-and-payment/detail'
        },
        {
          name: '完了レポート',
          path: '/guardian/reservation-detail/face-to-face-interview/approval-and-payment/complete'
        },
      ],
      questions: [
        {
          'name': ' 完了レポートの差し戻しについて',
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
