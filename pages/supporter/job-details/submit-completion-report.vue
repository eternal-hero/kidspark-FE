<template>
  <main id="page-P065" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(Web事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">Web事前面談を開始しました。</h2>
              <p class="c-txt__01"> 実際のサポートに向けてしっかりと相手との相性や疑問点などを確認しましょう。 </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <a href="./P017.html" class="btn_entry">Web面談事終了を通知する</a>
              </div>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="#">依頼メッセージ</a></li>
              <li class="m-subnav__item is-active"><span>依頼詳細</span></li>
            </ul>
            <supporter-job-money3 label="事前見積もり金額" />
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="~/assets/supporter/img/common/icon-note.svg" alt="基本情報" width="17"> 基本情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:30</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">依頼カテゴリー</div>
                  <div class="job-infor__list-desc">ベビーシッター</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">予約内容</div>
                  <div class="job-infor__list-desc">Web事前面談（初回必須）</div>
                </div>
              </div>
            </div>
            <supporter-location label="サポート場所" :image-path="require(`~/assets/supporter/img/p013/img-01.jpg`)" image-alt="お子様のお写真" />
            <user-information label="ユーザー情報" />
            <child-information label="お子様情報" />
            <supporter-memo title="面談で聞きたいことなど" content="いままでの保育のご経験など聞ければ嬉しいです。"/>
            <supporter-memo title="ご家庭のルール" content="昼間はテレビを見ない" />
            <supporter-information label="サポーター情報" />
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="4"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./P017.html" class="btn_entry">Web面談事終了を通知する</a>
              </div>
            </div>
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/report/65/" target="_blank">完了レポートの書き方</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/trouble-2/67/" target="_blank">サポート中の事故・トラブル</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
import SupporterJobMoney3 from "@/components/block/SupporterJobMoney3";
import SupporterLocation from "@/components/block/job-details/SupporterLocation.vue";
import SupporterInformation from "@/components/block/job-details/SupporterInformation.vue";
import SupporterMemo from "@/components/block/job-details/SupporterMemo.vue";
import UserInformation from "@/components/block/job-details/UserInformation.vue";
import ChildInformation from "@/components/block/job-details/ChildInformation.vue";

export default {
  components: {
    ChildInformation,
    UserInformation,
    SupporterMemo,
    SupporterInformation,
    SupporterLocation,
    SupporterRightMenu,
    QuestionBox,
    SupporterJobMoney3
  },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
}
</script>

<style>

</style>
