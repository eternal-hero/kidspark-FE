<template>
  <main id="page-P020" class="wrapper">
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
              <p class="c-txt__01"> ユーザーの承認・お支払いが完了しました。この度のお仕事は完了となります。 </p>
            </div>
            <supporter-job-menu></supporter-job-menu>
            <exeo-table-supporter-job-hour-support></exeo-table-supporter-job-hour-support>
            <exeo-table-supporter-job-money-estimate></exeo-table-supporter-job-money-estimate>
            <exeo-table-supporter-job-money></exeo-table-supporter-job-money>
            <exeo-table-supporter-job-infor-detail></exeo-table-supporter-job-infor-detail>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="7"></supporter-right-menu>
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="@/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
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
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import ExeoTableSupporterJobMoney from "@/components/table/ExeoTableSupporterJobMoney";
import ExeoTableSupporterJobInforDetail from "@/components/table/ExeoTableSupporterJobInforDetail";
import ExeoTableSupporterJobMoneyEstimate from "@/components/table/ExeoTableSupporterJobMoneyEstimate";
import ExeoTableSupporterJobHourSupport from "@/components/table/ExeoTableSupporterJobHourSupport";
export default {
  layout: 'supporter',
  components: {
    ExeoTableSupporterJobHourSupport,
    ExeoTableSupporterJobInforDetail,
    ExeoTableSupporterJobMoney,
    ExeoTableSupporterJobMoneyEstimate,
    SupporterJobMenu,
    SupporterRightMenu
  },
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
}
</script>
