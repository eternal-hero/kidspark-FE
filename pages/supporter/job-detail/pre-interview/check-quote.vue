<template>
  <main id="page-P062-2" class="wrapper">
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
            <h2 class="c-ttl__02">お見積もりを確認する</h2>
            <hr class="hr">
            <ExeoTableSupporterEstimateAmount basic-fee="600" commission="0" total="600"></ExeoTableSupporterEstimateAmount>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="./P011-3.html" class="btn_entry">送信する</a>
            </div>
          </div>
          <supporter-right-menu :step-active="activeStep"></supporter-right-menu>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import ExeoTableSupporterEstimateAmount from "@/components/table/ExeoTableSupporterEstimateAmount";

export default {
  layout: 'supporter',
  components: {
    SupporterRightMenu,
    ExeoTableSupporterEstimateAmount
  },
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
  data() {
    return {
      activeStep: '1'
    }
  }
}
</script>
