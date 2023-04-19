<template>
  <main id="page-P043" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">実績</span>
      </div>
    </div>
    <section class="sec-achievement">
      <div class="inner">
        <h1 class="c-ttl__01">実績</h1>
        <supporter-job-menu :route-names="routeNames"></supporter-job-menu>
        <div class="l-content">
          <div class="l-content__body">
            <ExeoTableSupporterAchievementRate></ExeoTableSupporterAchievementRate>
            <ExeoTableSupporterAchievementReview></ExeoTableSupporterAchievementReview>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import ExeoTableSupporterAchievementRate from "@/components/table/ExeoTableSupporterAchievementRate";
import ExeoTableSupporterAchievementReview from "@/components/table/ExeoTableSupporterAchievementReview";

export default {
  layout: 'supporter',
  components: {
    SupporterJobMenu,
    ExeoTableSupporterAchievementRate,
    ExeoTableSupporterAchievementReview
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

<style scoped>

</style>
