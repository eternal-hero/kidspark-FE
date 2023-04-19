<template>
  <main id="page-P063" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">Web事前面談が確定しました。</h2>
              <p class="c-txt__01"> Web事前面談で使用するURLは、当日までにパークサポーターで作成し、メッセージにてユーザーへ共有してください。詳しい<a href="https://www.kids-parks.com/faq/zoom/147/" target="_blank">Zoomの設定方法</a>はこちら </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">Web面談前にチェックしてください。</span>
              </div>
              <ul class="form-check form-check--02">
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks">
                    <span class="checkmark"></span>Web面談のURLを共有しました </label>
                </li>
              </ul>
              <div class="list-btn__item">
                <a href="#" class="btn_entry">準備完了を通知する</a>
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
                <span class="c-btn__02 mbsp-21">Web面談前にチェックしてください。</span>
              </div>
              <ul class="form-check form-check--02">
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks">
                    <span class="checkmark"></span>Web面談のURLを共有しました </label>
                </li>
              </ul>
              <div class="list-btn__item">
                <a href="#" class="btn_entry">準備完了を通知する</a>
              </div>
            </div>
            <question-box :questions="questions"></question-box>
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
  data() {
    return {
      questions: [
        {
          'url': '#',
          'name': 'お見積り提示後の料金変更方法',
        },
        {
          'url': '#',
          'name': 'キャンセル規定について',
        },
        {
          'url': '#',
          'name': 'お仕事開始までの流れ',
        },
      ],
    }
  }
}
</script>

<style>

</style>
