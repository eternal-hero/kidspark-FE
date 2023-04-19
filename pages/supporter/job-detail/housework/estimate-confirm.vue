<template>
  <main id="page-P088-3" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">お見積もりをユーザーに提示しました。</h2>
              <p class="c-txt__01">提示したお見積りへの承認があるまでお待ちください。</p>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="./P061-2.html">依頼メッセージ</a></li>
              <li class="m-subnav__item is-active"><span>依頼詳細</span></li>
            </ul>
            <supporter-job-money2 label="事前見積もり金額"></supporter-job-money2>
            <supporter-job-infor></supporter-job-infor>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="2"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./P012.html" class="c-btn__04">お見積もりを変更する</a>
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
import QuestionBox from '~/components/block/QuestionBox.vue';
import SupporterJobInfor from '~/components/block/SupporterJobInfor.vue';
import SupporterJobMoney2 from '~/components/block/SupporterJobMoney2.vue';

export default {
  components: { SupporterJobInfor, SupporterRightMenu, SupporterJobMoney2, QuestionBox },
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
          'name': 'お見積りの作成方法',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'お仕事リクエストのお断り方法について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'お仕事開始までの流れ',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        }
      ],
    }
  },
}
</script>