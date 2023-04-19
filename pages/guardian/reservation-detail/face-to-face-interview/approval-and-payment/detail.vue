<template>
  <main id="page-U053" class="wrapper">
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
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">完了レポートが届きました！</h2>
              <p class="c-txt__01"> 最終支払金額、完了レポートを確認してお支払いに進んでください。内容に疑問などありましたら、サポーターにメッセージでご連絡ください。</p>
            </div>
            <tab :tabs="tabs"></tab>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">1200円（1200円×1時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 交通費 </div>
                  <div class="job-money__list-desc">300円</div>
                  <div class="job-money__list-note"> 【電車】　〇〇駅⇆〇〇駅　300円（往復）</div>
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
                  <div class="job-money__list-desc"><span class="c-fw--bd">0円</span></div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>1,500</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="最終支払金額" width="17">最終支払金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">1200円（1200円×1時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 交通費 </div>
                  <div class="job-money__list-desc">300円</div>
                  <div class="job-money__list-note"> 【電車】　〇〇駅⇆〇〇駅　300円（往復）</div>
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
                  <div class="job-money__list-desc"><span class="c-fw--bd">0円</span></div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>1,500</span>円
                  </div>
                </div>
              </div>
            </div>
            <guardian-reservation-info></guardian-reservation-info>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="7"></guardian-right-menu>
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
  },
  mounted () {
    $('.js-show-acc').click(function () {
      $(this).toggleClass('on');
      $(".js-ct-acc").slideToggle();
    }); //check btn page P046
  },
}
</script>
