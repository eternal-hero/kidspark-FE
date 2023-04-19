<template>
  <main id="page-U018-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">予約リクエストを確認してください。</h2>
            </div>
            <div class="use-request_01">
              <div class="use-box">
                <div class="use-box__avatar">
                  <img src="@/assets/guardian/img/U018/img_use.png" alt="">
                </div>
                <div class="use-box__ct">
                  <div class="use-box__ttl">
                    <div class="use-box__address">
                      <span>30代女性　</span>
                      <img src="@/assets/guardian/img/common/icn_gps.svg" alt="" width="11">
                      <div class="use-box__address-desc">東京都中央区</div>
                    </div>
                  </div>
                  <div class="user-status">
                    <div class="user-status__medal">
                      <span class="user-status__medal--regular"></span>
                    </div>
                    <div class="use-box__star">
                      <span class="use-box__star-icn" data-rate="3.5"></span>
                    </div>
                    <a href="./U058.html" class="user-status__num">(15)</a>
                  </div>
                  <span class="icn_coupon">内閣府割引券対象</span>
                </div>
              </div>
              <ul class="sidebar-tags">
                <li class="sidebar-tags__item active"><span>ベビーシッター</span></li>
                <li class="sidebar-tags__item active"><span>家事代行</span></li>
              </ul>
              <dl class="possible_list">
                <dt>保育可能年齢</dt>
                <dd>0歳6ヶ月以上</dd>
                <dt>保育可能人数</dt>
                <dd>〜3人</dd>
                <dt>最低依頼時間</dt>
                <dd>1時間</dd>
              </dl>
            </div>
            <ExeoTableGuardianEstimateFee
              basic-fee="9,500"~
              basic-fee-description="1,900円×5.0時間"
              total="11,560"
              :list-fee="listFee"
              commission="1,500"
              title="予定合計金額"
            ></ExeoTableGuardianEstimateFee>
            <div class="c-txt__04">上記は予想金額となります。予約リクエスト送信後、ユーザーからお見積もりが届きますので、そちらの価格を確認してください。</div>
            <div class="request-note">
              <h3 class="c-ttl__02 mbpc-10">登録内容の公開範囲について</h3>
              <p class="c-txt__01">基本情報の内容は一般公開はされません。登録内容の公開範囲は予約確定前と後などでパークサポーターへ公開される内容が異なります。<a href="https://www.kids-parks.com/faq/profile-2/164/" class="txt-link" target="_blank">詳しくはこちら</a>をご覧ください。<br>
              </p>
            </div>
            <div class="c-control--submit mw-500">
              <a href="./U018.html" class="btn_back w155 w100-sp">もどる</a>
              <NuxtLink to="/guardian/reservation-management/booking-detail/waiting-for-quote" class="btn_entry">
                リクエストを送信する
              </NuxtLink>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu :use-user-info="false" step-active="1"></GuardianRightMenu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import UserAvatarBox from "@/components/block/UserAvatarBox";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    UserAvatarBox,
    QuestionBox,
    ExeoTableGuardianEstimateFee
  },
  data() {
    return {
      questions: [
        {
          name: "予約リクエストの作成方法",
          url: "https://www.kids-parks.com/faq/request/177/",
        },
        {
          name: "予約リクエストの内容変更、依頼取り消しについて",
          url: "https://www.kids-parks.com/faq/request-2/180/",
        },
        {
          name: "見守り依頼とは",
          url: "https://www.kids-parks.com/faq/flow-2/183/",
        },
        {
          name: "見守り依頼で使用できるカメラ",
          url: "https://www.kids-parks.com/faq/camera-3/218/",
        },
        {
          name: "見守りカメラをレンタル・購入したい",
          url: "https://www.kids-parks.com/faq/camera-4/220/",
        }
      ],
      listFee: [
        {title: 'オプション料金', cost: '0', description: ''},
        {title: '交通費', cost: '0', description: ''},
      ]
    }
  }
}
</script>

<style scoped>

</style>
