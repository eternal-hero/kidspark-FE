<template>
  <main id="page-U023-4" class="wrapper">
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
            <h2 class="c-ttl__02">ポイント購入を通知してください。</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list__box">
              <div class="quote-list__box-ttl">不足ポイント：<span class="c-fc--rd">14080pt</span></div>
            </div>
            <div class="quote-list">
              <p class="c-txt__01">ポイント購入後、下記の振込日と振込金額を通知してください。お支払いを確認後、本部より購入分のポイントを付与いたします。ポイント付与には土日祝などの関係で3日ほどかかる場合がございます。振込金額が見積もり金額不足分以上振り込まれている場合は、予約が自動でキャンセルされることはございませんのでご安心ください。</p>
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
              <NuxtLink :to="{name: 'guardian-reservation-detail-single-shot-buy-point-waiting-for-support'}" class="btn_back w100">もどる</NuxtLink>
              <NuxtLink :to="{name: 'guardian-reservation-detail-single-shot-notified-purchase-point'}" class="btn_entry">この内容で通知する</NuxtLink>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="4"></guardian-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from "@/components/block/QuestionBox";

export default {
  components: {
    GuardianRightMenu,
    QuestionBox,
  },
  layout: 'guardian',

  data() {
    return {
      questions: [
        {
          'name': 'お見積り提示後の料金変更方法',
          'url': 'https://www.kids-parks.com/faq/reserve/193/',
        },
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
          'name': '延長をお願いしたい場合',
          'url': 'https://www.kids-parks.com/faq/reserve-2/201/',
        }
      ],
    }
  }
}
</script>
