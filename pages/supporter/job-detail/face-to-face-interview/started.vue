<template>
  <main id="page-P074" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(対面事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(対面事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">対面事前面談を開始しました。</h2>
              <p class="c-txt__01"> 実際のサポートに向けてしっかりと相手との相性や疑問点などを確認しましょう。 </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry">対面事前面談事終了を通知する</a>
              </div>
            </div>
            <tab :tabs="tabs"></tab>
            <supporter-job-infor4></supporter-job-infor4>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="4"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./P017.html" class="btn_entry">対面事前面談事終了を通知する</a>
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
import SupporterJobInfor4 from '~/components/block/SupporterJobInfor4.vue';
import Tab from '~/components/block/Tab.vue';

export default {
  components: { SupporterRightMenu, QuestionBox, Tab, SupporterJobInfor4 },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(対面事前面談)'
    }
  },
  data() {
    return {
      tabs: [
        {
          name: '依頼メッセージ',
          path: '#'
        },
        {
          name: '依頼詳細',
          path: '/supporter/job-detail/face-to-face-interview/started'
        },
      ],
      questions: [
        {
          'name': '完了レポートの書き方',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'サポート中の事故',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
      ],
    }
  },
}
</script>