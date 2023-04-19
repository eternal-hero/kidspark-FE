<template>
  <main id="page-P064" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">「準備完了」を通知しました。</h2>
              <p class="c-txt__01"> 面談開始10分前にはZoomを開始し、準備をするようにお願いいたします。<br>Zoomを開始できたらお仕事開始を通知するボタンを押してください。<br>詳しい<a href="https://www.kids-parks.com/faq/zoom/147/" class="c-fw--md" target="_blank">Zoomの設定方法</a>はこちら </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">Web面談を開始してください。</span>
              </div>
              <div class="list-btn__item">
                <a href="#" class="btn_entry--disabled">Web面談開始までお待ちください</a>
              </div>
              <div class="list-btn__item">
                <a href="./P014.html" class="c-btn__04">キャンセルする</a>
              </div>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="#">依頼メッセージ</a></li>
              <li class="m-subnav__item is-active"><span>依頼詳細</span></li>
            </ul>
            <supporter-job-money3 label="事前見積もり金額" />
            <supporter-location label="サポート場所" :image-path="require(`~/assets/supporter/img/p013/img-01.jpg`)" image-alt="お子様のお写真" />
            <user-information label="ユーザー情報" />
            <child-information label="お子様情報" />
            <supporter-memo title="面談で聞きたいことなど" content="いままでの保育のご経験など聞ければ嬉しいです。"/>
            <supporter-memo title="ご家庭のルール" content="昼間はテレビを見ない" />
            <supporter-information label="サポーター情報" />
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="3"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">Web面談を開始してください。</span>
              </div>
              <div class="list-btn__item">
                <a href="#" class="btn_entry--disabled">Web面談開始までお待ちください</a>
              </div>
              <div class="list-btn__item">
                <a href="./P014.html" class="c-btn__04">キャンセルする</a>
              </div>
            </div>
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/commission2/53/" target="_blank">お見積り提示後の料金変更方法</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/cancel/55/" target="_blank">キャンセル規定について</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/flow/50/" target="_blank">お仕事開始までの流れ</a></li>
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
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
  layout: 'supporter'
}
</script>

<style>

</style>
