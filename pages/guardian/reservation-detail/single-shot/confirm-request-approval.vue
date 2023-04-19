<template>
  <main id="page-U031-2" class="wrapper">
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
            <h2 class="c-ttl__02">レポートの承認・お支払いを内容を確認して、支払いを完了してください。</h2>
            <hr class="hr mbpc-33">
            <ExeoTableGuardianPreviewPaymentMethod card-number="****1456" points="1000"></ExeoTableGuardianPreviewPaymentMethod>
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
            <div class="job-infor mbsp-20">
              <h3 class="job-infor__ttl">パークサポーターへのレビュー</h3>
              <ExeoTableGuardianPreviewReviewSupporter
                :rate="5"
                review-text="本日は初めてのご依頼ありがとうございました。<br>
                             おこさまはとても元気でかわいい女の子で、またお会いできるのを楽しみにしています。">
              </ExeoTableGuardianPreviewReviewSupporter>
            </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="#" class="btn_entry">この内容で支払いを完了する</a>
            </div>
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
import QuestionBox from "@/components/block/QuestionBox";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee";
import ExeoTableGuardianPreviewReviewSupporter from "@/components/table/ExeoTableGuardianPreviewReviewSupporter";
import ExeoTableGuardianPreviewPaymentMethod from "@/components/table/ExeoTableGuardianPreviewPaymentMethod";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    QuestionBox,
    ExeoTableGuardianEstimateFee,
    ExeoTableGuardianPreviewReviewSupporter,
    ExeoTableGuardianPreviewPaymentMethod
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
      ]
    }
  }
}
</script>
