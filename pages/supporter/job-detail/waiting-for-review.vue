<template>
  <main id="page-P087-2" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">お疲れ様でした！</h2>
              <p class="c-txt__01">ユーザーの承認・お支払いが完了しました。この度のお仕事は完了となります。</p>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="./P061-2.html">依頼メッセージ</a></li>
              <li class="m-subnav__item"><a href="">依頼詳細</a></li>
              <li class="m-subnav__item is-active"><span>完了レポート</span></li>
            </ul>
            <div class="job-infor">
              <h3 class="job-infor__ttl">サポート時間</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 15:00</div>
                </div>
              </div>
            </div>
            <report-today />
            <user-reviews />
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="7" />
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/housework-2/149/" target="_blank">家事代行の完了レポートの書き方</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/housework-3/152/" target="_blank">家事代行中の事故・トラブル</a></li>
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
import ReportToday from "@/components/block/job-details/ReportToday.vue";
import UserReviews from "@/components/block/job-details/UserReviews.vue";

export default {
  components: {
    UserReviews,
    ReportToday,
    SupporterRightMenu,
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
