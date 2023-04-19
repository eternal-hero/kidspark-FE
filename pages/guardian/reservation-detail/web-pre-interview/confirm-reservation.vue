<template>
  <main id="page-U038-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a
        ><span class="current">予約詳細（Web事前面談）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（Web事前面談）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">内容を確認して、予約を確定してください。</h2>
            <hr class="hr mbpc-33" />
            <ExeoTableGuardianPreviewPaymentMethod cardNumber="****1456" />
            <ExeoTableGuardianEstimateFee
              :basicFee="600"
              :commission="0"
              :total="600"
            />
            <div class="quote-list__fee-form">
              <p class="c-ttl__02">仮決済について</p>
              <p class="c-txt__01">
                キッズパークでは予約を確定する前に仮決済が行われます。クレジットカードでの仮払いは与信枠の確保となるため、仮決済をおこなった時点では決済は確定せず請求もおこなわれません。実際の請求はお仕事が完了してのお支払い後となります。
              </p>
            </div>
            <div class="c-control--submit">
              <a href="U038.html" class="btn_back w100">もどる</a>
              <a href="U039.html" class="btn_entry">この内容で予約確定する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="3" />
            <QuestionBox :questions="questions" />
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ExeoTableGuardianPreviewPaymentMethod from "@/components/table/ExeoTableGuardianPreviewPaymentMethod.vue";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee.vue";
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from "@/components/block/QuestionBox.vue";

export default {
  layout: "guardian",
  components: {
    ExeoTableGuardianPreviewPaymentMethod,
    ExeoTableGuardianEstimateFee,
    GuardianRightMenu,
    QuestionBox,
  },
  data() {
    return {
      questions: [
        {
          name: "予約リクエストの内容変更、依頼取り消しについて",
          url: "https://www.kids-parks.com/faq/request-2/180/",
        },
        {
          name: "見積もりの修正をお願いしたい",
          url: "https://www.kids-parks.com/faq/reserve/193/",
        },
        {
          name: "サポート開始までの流れ",
          url: "https://www.kids-parks.com/faq/flow-2/183/",
        },
        {
          name: "支払い方法について",
          url: "https://www.kids-parks.com/faq/payment/195/",
        },
        {
          name: "ポイントのご利用方法について",
          url: "https://www.kids-parks.com/faq/point-2/172/",
        },
      ],
    };
  },
};
</script>

