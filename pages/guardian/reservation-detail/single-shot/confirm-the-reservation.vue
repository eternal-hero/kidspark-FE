<template>
  <main id="page-U023-2" class="wrapper">
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
            <h2 class="c-ttl__02">内容を確認して、予約を確定してください。</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list__box">
              <div class="quote-list__box-ttl">お支払い方法：　ポイント支払い</div>
              <div class="quote-list__box-ct">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> ポイント利用 </div>
                  <div class="quote-list__fee-ct">14080ptを利用する</div>
                </div>
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> 不足分ポイント購入 </div>
                  <div class="quote-list__fee-ct c-fc--rd">1700ptを購入する</div>
                </div>
              </div>
            </div>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="事前見積もり金額" width="17">事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">9500円（0000円×5.0時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">オプション料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
                  <div class="job-money__list-note"> 英語学習　+200円/1時間あたり<br>マッサージ　500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">割引料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
                  <div class="job-money__list-note"> 初回予約割引　-500円/1回あたり </div>
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
                        手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission/42/' target='_blank'>手数料についてはこちら</a>
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

            <div class="job-infor mbsp-20">
              <span class="c-btn__02 mbsp-21">48時間以内にお振り込みが必要ですのでご注意ください。</span>
              <p class="c-txt__01">
                お支払いは仮決済完了後、48時間以内にお振り込みください。<br><br>
                ①下記口座へのお振込をおねがいします。<br>
                ②予約詳細ページから「ポイント購入を通知」してください。<br>
                ポイント購入前であってもすでに予約は確定となります。<br>
                48時間が過ぎても通知がない場合は予約リクエストが自動キャンセルされます。<br>
                自動キャンセルとなった場合、キャンセル規定に従いキャンセル料が発生する場合がございます。<br>
                ③お支払いを確認後、本部より購入分のポイントを付与いたします。
              </p>

              <p class="job-infor__bank">
                【お振込先】<br>
                銀行名：三菱UFJ銀行<br>
                支店名：なつぐも支店<br>
                預金種別：普通<br>
                口座番号：1695904<br>
                口座名義人：株式会社　エクシオジャパン
              </p>
              <p class="c-txt__01">お支払い先情報はご登録メールアドレスへも送信されます。</p>
            </div>
            <div class="c-control--submit">
              <NuxtLink :to="{name: 'guardian-reservation-detail-single-shot-point-payment-method'}" class="btn_back w100">もどる</NuxtLink>
              <NuxtLink :to="{name: 'guardian-reservation-detail-single-shot-buy-point-waiting-for-support'}" class="btn_entry">この内容で予約確定する</NuxtLink>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3"></guardian-right-menu>
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
          'name': '予約リクエストの内容変更、依頼取り消しについて',
          'url': 'https://www.kids-parks.com/faq/request-2/180/',
        },
        {
          'name': '見積もりの修正をお願いしたい',
          'url': 'https://www.kids-parks.com/faq/reserve/193/',
        },
        {
          'name': 'サポート開始までの流れ',
          'url': 'https://www.kids-parks.com/faq/flow-2/183/',
        },
        {
          'name': '支払い方法について',
          'url': 'https://www.kids-parks.com/faq/payment/195/',
        },
        {
          'name': 'ポイントのご利用方法について',
          'url': 'https://www.kids-parks.com/faq/point-2/172/',
        }
      ],
    }
  }
}
</script>
