<template>
  <main id="page-P085-4" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(単発)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(単発)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">完了レポートを送信しました。</h2>
              <p class="c-txt__01"> ユーザーからの完了レポートへの承認とお支払いをお待ちください。 </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="~/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り24時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P018.html" class="btn_entry">完了レポートを修正する</a>
              </div>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="./P061-2.html">依頼メッセージ</a></li>
              <li class="m-subnav__item"><a href="#">依頼詳細</a></li>
              <li class="m-subnav__item is-active"><span>完了レポート</span></li>
            </ul>
            <exeo-table-supporter-job-hour-support />
            <exeo-table-supporter-job-money />
            <report-today />
            <user-reviews />
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="6" />
            <div class="list-btn">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="~/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り24時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P018.html" class="btn_entry">完了レポートを修正する</a>
              </div>
            </div>
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/report-2/75/" target="_blank">完了レポート送信後に内容を変更したい</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/reward/69/" target="_blank">報酬のお支払いについて</a></li>
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
import ExeoTableSupporterJobHourSupport from "@/components/table/ExeoTableSupporterJobHourSupport";
import ReportToday from "@/components/block/job-details/ReportToday.vue";
import UserReviews from "@/components/block/job-details/UserReviews.vue";
import ExeoTableSupporterJobMoney from "@/components/table/ExeoTableSupporterJobMoney";

export default {
  components: {
    ExeoTableSupporterJobMoney,
    UserReviews,
    ReportToday,
    SupporterRightMenu,
    ExeoTableSupporterJobHourSupport
  },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
}
</script>

<style>

</style>
