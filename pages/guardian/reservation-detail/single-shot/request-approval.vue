<template>
  <main id="page-U031" class="wrapper">
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
            <h2 class="c-ttl__02">レポートの承認・お支払い</h2>
            <hr class="hr mbpc-33">
            <ExeoTableGuardianEstimateFee
              basic-fee="9500"
              basic-fee-description="0000円×5.0時間"
              extension-fee="1500"
              extension-fee-description="45分×20%"
              :list-fee="listFee",
              commission="1500"
              rental-shipping-fee="1500"
              monitoring-fee="1500"
              monitoring-fee-description="全時間見守り（1,600円/1時間当たり）✕2時間分 <br> 12:00~13:00 カメラ接続不良のためチェックできず1時間分料金修正"
              total="14,080"
            ></ExeoTableGuardianEstimateFee>
            <div class="quote-list">
              <h3 class="quote-list__ttl">お支払い方法：クレジットカード決算</h3>
              <hr class="hr mbpc-22">
              <ExeoTableGuardianPaymentMethod number-card="****1456" point="1500"></ExeoTableGuardianPaymentMethod>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">自治体助成・福利厚生のご利用</h3>
                <div class="preparation-box"><p>準備中</p></div>
              </div>
              <ExeoTableGuardianReviewSupporter></ExeoTableGuardianReviewSupporter>
            </div>
            <a href="./P0011-2.html" class="btn_entry mw-335">確認ページへ</a>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="7"></GuardianRightMenu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoTableGuardianPaymentMethod from "@/components/table/ExeoTableGuardianPaymentMethod";
import ExeoTableGuardianReviewSupporter from "@/components/table/ExeoTableGuardianReviewSupporter";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    ExeoTableGuardianEstimateFee,
    QuestionBox,
    ExeoTableGuardianPaymentMethod,
    ExeoTableGuardianReviewSupporter
  },
  data() {
    return {
      listFee: [
        {title: 'オプション料金', cost: '2500', description: '英語学習　+200円/1時間あたり <br> マッサージ　500円/1回あたり'},
        {title: '割引料金', cost: '-500', description: '初回予約割引　-500円/1回あたり'},
        {title: '交通費', cost: '1080', description: '【電車】　〇〇駅⇆〇〇駅　680円（往復） <br> バス】　〇〇⇆〇〇　400円（往復）'},
      ],
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/payment/195/',
          name: '支払い方法について'
        },
        {
          url: 'https://www.kids-parks.com/faq/point-2/172/',
          name: 'ポイントのご利用方法について'
        },
        {
          url: 'https://stg.kids-parks.com/faq/subsidy/280/',
          name: '自治体助成・福利厚生について'
        },
        {
          url: 'https://www.kids-parks.com/faq/trouble-4/205/',
          name: 'サポート中の事故・トラブル'
        }
      ],
    }
  }
}
</script>
