<template>
  <main id="page-U033-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a
        ><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">レポートの承認・お支払い</h2>
            <hr class="hr mbpc-33" />
            <ExeoTableGuardianPreviewPaymentMethod
              title="ポイント支払い"
              :showCreditCard="isShow"
              points="14080"
              missingPoints="1700"
            />
            <ExeoTableGuardianEstimateFee
              title="最終支払金額"
              :basicFee="9500"
              :extensionFee="1500"
              extensionFeeDescription="45分×20%"
              :listFee="listFee"
              :commission="1500"
              :rentalShippingFee="1500"
              :monitoringFee="1080"
              :monitoringFeeDescription="monitoringFeeDescription"
              total="14,080"
              pointNote="1500"
              shortagePoints="14,280"
            />
            <div class="job-infor mbsp-20">
              <span class="c-btn__02 mbsp-21"
                >48時間以内にお振り込みが必要ですのでご注意ください。</span
              >
              <p class="c-txt__01">
                お支払いは仮決済完了後、2日以内にお振り込みください。お振込が完了し、ポイントがキッズパークより付与された時点でご予約が確定となります。<br /><br />
                ①下記口座へのお振込をおねがいします。<br />
                ②約詳細ページから「ポイント購入を通知」してください。<br />
                ③お支払いを確認後、付与されたポイント分から不足分を差し引いてお支払いを完了いたします。
              </p>
              <p class="job-infor__bank">
                【お振込先】<br />
                銀行名：三菱UFJ銀行<br />
                支店名：なつぐも支店<br />
                預金種別：普通<br />
                口座番号：1695904<br />
                口座名義人：株式会社　エクシオジャパン
              </p>
              <p class="c-txt__01">
                お支払い先情報はご登録メールアドレスへも送信されます。
              </p>
            </div>
            <div class="job-infor mbsp-20">
              <h3 class="job-infor__ttl">パークサポーターへのレビュー</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item job-infor__list-item--start">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">
                    アイコン
                  </div>
                  <div
                    class="job-infor__list-desc job-infor__list-desc--smallw"
                  >
                    <ul class="use-list">
                      <li class="use-list__item mbpc-0 mbsp-0">
                        <img
                          src="@/assets/guardian/img/U033/use-01.png"
                          alt="use"
                          width="40"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--start">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">
                    満足度
                  </div>
                  <div
                    class="job-infor__list-desc job-infor__list-desc--imgsp job-infor__list-desc--smallw"
                  >
                    <div class="user-status__star">
                      <span class="user-status__star-icn" data-rate="5"></span>
                    </div>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">
                    レビュー本文
                  </div>
                  <div
                    class="job-infor__list-desc job-infor__list-desc--smallw"
                  >
                    本日は初めてのご依頼ありがとうございました。<br />
                    おこさまはとても元気でかわいい女の子で、またお会いできるのを楽しみにしています。
                  </div>
                </div>
              </div>
            </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="#" class="btn_entry">この内容で支払いを完了する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="7" />
            <QuestionBox :questions="questions" />
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ExeoTableGuardianPreviewPaymentMethod from "@/components/table/ExeoTableGuardianPreviewPaymentMethod.vue";
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee.vue";
import QuestionBox from "@/components/block/QuestionBox.vue";

export default {
  layout: "guardian",
  components: {
    ExeoTableGuardianPreviewPaymentMethod,
    GuardianRightMenu,
    ExeoTableGuardianEstimateFee,
    QuestionBox,
  },
  data() {
    return {
      isShow: false,
      listFee: [
        {
          title: "オプション料金",
          cost: 2500,
          description:
            "<p>英語学習　+500円/1時間あたり<p/><p>マッサージ　500円/1回あたり<p/>",
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
      questions: [
        {
          name: "明細書・領収書の発行方法",
          url: "https://www.kids-parks.com/faq/detail/167/",
        },
      ],
      monitoringFeeDescription:
        "<p>全時間見守り（1,600円/1時間当たり）✕2時間分<p/><p>12:00~13:00 カメラ接続不良のためチェックできず1時間分料金修正<p/>",
    };
  },
};
</script>
