<template>
  <main id="page-U045-2" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">ご利用ありがとうございました！</h2>
              <p class="c-txt__01">またのご利用をお待ちしております！</p>
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
            <guardian-right-menu step-active="8" :steps="$STEP_PRE_INTERVIEW_GUARDIAN"></guardian-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./U007-4.html" class="c-btn__04">明細書ダウンロード</a>
              </div>
            </div>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
    <div class="modal-main" id="M004">
      <div class="modal-block">
        <span class="modal-block__close"></span>
        <h2 class="modal-block__ttl">差し戻し</h2>
        <div class="modal-ct">
          <div class="c-txt__01 modal-ct__desc"> 差し戻しの際は事前にメッセージにて<br>差し戻し理由の共有をお願いいたします。 </div>
          <div class="modal-ct__control">
            <button class="btn_entry">差し戻す</button>
          </div>
        </div>
      </div>
    </div>
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
          path: '/guardian/reservation-detail/web-pre-interview/message'
        },
        {
          name: '依頼詳細',
          path: '/guardian/reservation-detail/web-pre-interview/thank-for-using/detail'
        },
        {
          name: '完了レポート',
          path: '/guardian/reservation-detail/web-pre-interview/thank-for-using/complete'
        },
      ],
      questions: [
        {
          'name': '明細書・領収書の発行方法',
          'url': 'https://www.kids-parks.com/faq/detail/167/',
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
