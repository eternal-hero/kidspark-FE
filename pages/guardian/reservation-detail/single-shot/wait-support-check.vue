<template>
  <main id="page-U025-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a
        ><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">時間変更の内容を確認してください</h2>
            <hr class="hr mbpc-33" />
            <ExeoTableGuardianEstimateFee
              title="事前見積もり金額"
              :basicFee="9500"
              basicFeeDescription="0000円×5.0時間"
              :listFee="listFee"
              :commission="1500"
              total="14,080"
            />
            <div class="job-infor">
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">
                    時間変更<small class="required">※</small>
                  </div>
                  <div class="job-infor__list-desc">
                    開始時間：12:00 <br />
                    終了時間：16:00
                  </div>
                </div>
              </div>
            </div>
            <div class="quote-list__fee-form">
              <p class="c-txt__01">
                時間変更に伴い、オプションの利用時間が変わる場合は、サポート終了後の完了報告でサポーターに修正を依頼してください。サポーターの完了レポートでオプション料金に間違いがないか必ずご確認ください。             
                  時間変更のリクエストは、送信後の変更、取り消しは出来かねますのでご注意ください。
              </p>
            </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="#" class="btn_entry">時間変更を送信する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="4" />
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee.vue";

export default {
  layout: "guardian",
  components: {
    GuardianRightMenu,
    ExeoTableGuardianEstimateFee,
  },
  data() {
    return {
      listFee: [
        {
          title: "オプション料金",
          cost: 2500,
          description:
            "<p>英語学習　+200円/1時間あたり<p/><p>マッサージ　500円/1回あたり<p/>",
        },
        {
          title: "割引料金",
          cost: -500,
          description: "<p>初回予約割引　-500円/1回あたり<p/>",
        },
        {
          title: "交通費",
          cost: 1080,
          description:
            "<p>【電車】　〇〇駅⇆〇〇駅　680円（往復）<p/><p>【バス】　〇〇⇆〇〇　400円（往復）<p/>",
        },
      ],
    };
  },
};
</script>
