<template>
  <main id="page-P066" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">Web事前面談が終了しました。</h2>
              <p class="c-txt__01"> 面談終了後<span class="em">24時間</span>以内に完了レポートを提出してください。 </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り24時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P018.html" class="btn_entry">完了レポートを作成する</a>
              </div>
            </div>
            <tab :tabs="tabs"></tab>
            <supporter-job-infor3></supporter-job-infor3>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="5"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り24時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P018.html" class="btn_entry">完了レポートを作成する</a>
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
import SupporterJobInfor3 from '~/components/block/SupporterJobInfor3.vue';
import Tab from '~/components/block/Tab.vue';

export default {
  components: { SupporterRightMenu, QuestionBox, SupporterJobInfor3, Tab },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
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
          path: '/supporter/job-detail/web-interview/completed'
        },
      ],
      questions: [
        {
          'name': '完了レポートの書き方',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'サポート中の事故・トラブル',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
      ],
    }
  },
}
</script>