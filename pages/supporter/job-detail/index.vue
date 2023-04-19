<template>
  <main id="page-P009" class="wrapper">
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
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">お仕事リクエストが届きました！</h2>
              <p class="c-txt__01">依頼詳細をご確認いただき、お見積もりを提示してください。</p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <a href="" class="c-btn__02"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15"> 残り48時間</a>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry">お見積もりを提示する</a>
              </div>
              <div class="list-btn__item">
                <a href="./P010.html" class="c-btn__04">お断りする</a>
              </div>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="./P022.html">依頼メッセージ</a></li>
              <li class="m-subnav__item is-active"><a href="">依頼詳細</a></li>
            </ul>
            <supporter-job-money label="予定合計金額"></supporter-job-money>
            <supporter-job-infor></supporter-job-infor>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="7"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り48時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry">お見積もりを提示する</a>
              </div>
              <div class="list-btn__item">
                <NuxtLink to="/supporter/job-reject" class="c-btn__04">お断りする</NuxtLink>
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

import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import SupporterJobMoney from "@/components/block/SupporterJobMoney";
import QuestionBox from '~/components/block/QuestionBox.vue';
import SupporterJobInfor from '~/components/block/SupporterJobInfor.vue'

export default {
  components: { SupporterRightMenu, SupporterJobMenu, SupporterJobMoney, QuestionBox, SupporterJobInfor },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      questions: [
        {
          'url': 'https://www.kids-parks.com/faq/quotation/45/',
          'name': 'お見積りの作成方法',
        },
        {
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
          'name': 'お仕事リクエストのお断り方法について',
        },
        {
          'url': 'https://www.kids-parks.com/faq/flow/50/',
          'name': 'お仕事開始までの流れ',
        },
      ],
    }
  },
}
</script>