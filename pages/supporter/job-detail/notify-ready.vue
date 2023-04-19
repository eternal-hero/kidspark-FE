<template>
  <main id="page-P015" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">「準備完了」を通知しました。</h2>
              <p class="c-txt__01"> サポート場所には10分前に到着し、インターフォンを押して挨拶をしたら忘れずに<br><a href="./P093.html">身分証明証を提示</a>してください。 </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">ヒヤリング後、サポートを開始してください。</span>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry--disabled">お仕事日前日までお待ちください</a>
              </div>
              <div class="list-btn__item">
                <a href="./P014.html" class="c-btn__04">キャンセルする</a>
              </div>
            </div>
            <ul class="m-subnav job-menu">
              <li class="m-subnav__item"><a href="./P023-2.html">依頼メッセージ</a></li>
              <li class="m-subnav__item is-active"><span>依頼詳細</span></li>
            </ul>
            <supporter-job-money2 label="事前見積もり金額"></supporter-job-money2>
            <supporter-job-infor2></supporter-job-infor2>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="3"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">ヒヤリング後、サポートを開始してください。</span>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry--disabled">お仕事日前日までお待ちください</a>
              </div>
              <div class="list-btn__item">
                <a href="./P014.html" class="c-btn__04">キャンセルする</a>
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
import SupporterJobInfor2 from '~/components/block/SupporterJobInfor2.vue';

export default {
  components: { SupporterRightMenu, SupporterJobMoney2, QuestionBox, SupporterJobInfor2 },
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
          'name': 'お見積り提示後の料金変更方法',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'キャンセル規定について',
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