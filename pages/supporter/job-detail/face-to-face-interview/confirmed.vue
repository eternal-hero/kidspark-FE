<template>
  <main id="page-P072" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">対面事前面談が確定しました。</h2>
              <p class="c-txt__01">ユーザーの詳細情報が開示されましたのでご確認をお願いします。<br>質問などありましたら、ユーザーにメッセージでご確認ください。</p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">サポート前にチェックしてください。</span>
              </div>
              <ul class="form-check form-check--02">
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks" checked="checked">
                    <span class="checkmark"></span>自分の体調は万全である </label>
                </li>
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks">
                    <span class="checkmark"></span>お子様の体調を確認した </label>
                </li>
              </ul>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry--disabled">お仕事日前日までお待ちください</a>
              </div>
              <div class="list-btn__item">
                <a href="#" class="c-btn__04">キャンセルする</a>
              </div>
            </div>
            <tab :tabs="tabs"></tab>
            <supporter-job-infor4></supporter-job-infor4>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="3"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">サポート前にチェックしてください。</span>
              </div>
              <ul class="form-check form-check--02">
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks" checked="checked">
                    <span class="checkmark"></span>自分の体調は万全である </label>
                </li>
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks">
                    <span class="checkmark"></span>お子様の体調を確認した </label>
                </li>
              </ul>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry--disabled">お仕事日前日までお待ちください</a>
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
import Tab from '~/components/block/Tab.vue';
import SupporterJobInfor4 from '~/components/block/SupporterJobInfor4.vue';

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
          path: '/supporter/job-detail/face-to-face-interview/confirm'
        },
      ],
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
        },
      ],
    }
  },
}
</script>