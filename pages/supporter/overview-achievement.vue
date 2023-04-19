<template>
  <main id="page-P042" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">実績</span>
      </div>
    </div>
    <div class="main-content page-achievement">
      <div class="inner">
        <h1 class="c-ttl__01">実績</h1>
        <supporter-job-menu :route-names="routeNames"></supporter-job-menu>
        <div class="l-content pd-0--sp">
          <div class="l-content__body">
            <ExeoTableSupporterMoneyAmount></ExeoTableSupporterMoneyAmount>
            <div class="request-month">
              <h2 class="c-ttl__02 request-month__ttl">今月の依頼</h2>
              <ExeoTableSupporterRequestMonthDasboard></ExeoTableSupporterRequestMonthDasboard>
            </div>
            <div class="achievement-report">
              <h2 class="c-ttl__02 achievement-report__ttl">レポート</h2>
              <ExeoTableSupporterAchievementReport></ExeoTableSupporterAchievementReport>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import ExeoTableSupporterMoneyAmount from "@/components/table/ExeoTableSupporterMoneyAmount";
import ExeoTableSupporterRequestMonthDasboard from "@/components/table/ExeoTableSupporterRequestMonthDasboard";
import ExeoTableSupporterAchievementReport from "@/components/table/ExeoTableSupporterAchievementReport";

export default {
  layout: 'supporter',
  components: {
    SupporterJobMenu,
    ExeoTableSupporterMoneyAmount,
    ExeoTableSupporterRequestMonthDasboard,
    ExeoTableSupporterAchievementReport
  },
  head() {
    return {
      title: '実績'
    }
  },
  data() {
    return {
      routeNames: [
        {
          name: '概要',
          routeName: 'supporter-overview-achievement'
        },
        {
          name: '評価',
          routeName: 'supporter-evaluation-achievement'
        },
        {
          name: '売上',
          routeName: ''
        },
        {
          name: '入出金履歴',
          routeName: ''
        },
      ]
    }
  }
}
</script>
