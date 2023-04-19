<template>
  <main id="page-P061" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">Web事前面談リクエストが届きました！</h2>
              <p class="c-txt__01">依頼詳細をご確認いただき、お見積もりを提示してください。</p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り48時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry">お見積もりを提示する</a>
              </div>
              <div class="list-btn__item">
                <a href="./P010.html" class="c-btn__04">お断りする</a>
              </div>
            </div>
            <tab :tabs="tabs"></tab>
            <supporter-job-infor></supporter-job-infor>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="-1"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り48時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry">お見積もりを提示する</a>
              </div>
              <div class="list-btn__item">
                <a href="./P010.html" class="c-btn__04">お断りする</a>
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
import SupporterJobMoney2 from '~/components/block/SupporterJobMoney2.vue';
import SupporterJobInfor from '~/components/block/SupporterJobInfor.vue';
import Tab from '~/components/block/Tab.vue';

export default {
  components: { SupporterRightMenu, SupporterJobMoney2, QuestionBox, SupporterJobInfor, Tab },
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
          path: '/supporter/job-detail/web-interview/request-message'
        }      ,
        {
          name: '依頼詳細',
          path: '/supporter/job-detail/web-interview',
        }
      ],
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