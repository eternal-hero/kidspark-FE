<template>
  <main id="page-U033-4" class="wrapper">
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
            <h2 class="c-ttl__02">ポイント購入を通知してください。</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list__box">
              <div class="quote-list__box-ttl">不足ポイント：<span class="c-fc--rd">14080pt</span></div>
            </div>

            <div class="quote-list">
              <p class="c-txt__01">ポイント購入後、下記の振込日と振込金額を通知してください。お支払いを確認後、本部より購入分のポイントを付与いたします。ポイント付与には土日祝などの関係で3日ほどかかる場合がございます。お支払いを確認後、付与されたポイント分から不足分を差し引いてお支払いを完了いたします。</p>
              <div class="quote-list__item">
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 振り込み日 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__date-item">
                        <label class="form_part_date">
                          <input type="date" placeholder="日付を選択してください" class="form_part_date_input js_today">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 振り込み金額 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input type="text" class="form-edit__input">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="#" class="btn_entry">この内容で通知する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <div class="use-box">
              <div class="use-box__avatar">
                <img src="@/assets/guardian/img/U058/dammy-user.png" alt="木村　花子" width="60">
              </div>
              <div class="use-box__ct">
                <div class="use-box__ttl">
                  <NuxtLink to="/guardian/reservation-detail/face-to-face-interview/approval-point-payment/buy-point">佐藤　彩</NuxtLink>
                </div>
                <div class="use-box__address"><img src="@/assets/guardian/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
                  <div class="use-box__address-desc">東京都千代田区</div>
                </div>
              </div>
            </div>
            <div class="use-sidebar-main">
              <guardian-right-menu step-active="7"></guardian-right-menu>
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
        }
      ],
    }
  },
}
</script>
