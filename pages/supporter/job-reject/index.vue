<template>
  <main id="page-P010" class="wrapper">
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
            <div class="request-box">
              <h2 class="c-ttl__02">お仕事リクエストをお断りする</h2>
              <hr class="hr">
              <p class="c-txt__01"> 正確なお断りの理由をご記入ください。<br>お断りの理由<br>理由詳細のみユーザーに開示されます。 </p>
            </div>
            <question-box :questions="questions"></question-box>
            <form action="method">
              <div class="request-form">
                <div class="request-form__item">
                  <div class="request-form__ttl"> お断り理由<span>※</span>
                    <span class="disclosure --off">ユーザーに非公開</span>
                  </div>
                  <div class="request-form__ct">
                    <div class="form_part_select">
                      <exeo-select :options="options" v-model="selectedOption"></exeo-select>
                    </div>
                  </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">ユーザーに開示<br class="pc">されます</span>
                  </div>
                  <div class="request-form__ct">
                    <textarea class="form-edit__textarea" name="request" cols="30" rows="10" placeholder="詳細をご記入ください。"></textarea>
                    <div class="request-form__ct-right">
                      <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                      <div class="c-example__cont js-acc-cont">
                        <span class="c-example__close js-acc-close">×</span>
                        <p class="c-txt__01">
                          (例)昨夜から高熱が続き、今朝も改善が見られません。お子さまにうつしてしまう危険性もあるため、ご予約日は2日後ですが今回の案件はキャンセルさせて頂きたいと思います。ご迷惑おかけいたしますが、よろしくお願いいたします。<br><br>
                          ※キャンセルをされる前に、メッセージにてユーザーにご連絡しましょう
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-control--submit">
                <a href="#" class="btn_back w100">もどる</a>
                <NuxtLink to="/supporter/job-reject/confirmation" class="btn_entry">確認ページへ</NuxtLink>
              </div>
            </form>
          </div>
          <supporter-right-menu step-active="1"></supporter-right-menu>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from '~/components/block/QuestionBox.vue';
import ExeoSelect from "@/components/action/ExeoSelect.vue";

export default {
  components: { SupporterRightMenu, QuestionBox, ExeoSelect },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      selectedOption: '選択してください',
      questions: [
        {
          'name': 'お仕事リクエストのお断り方法について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        }
      ],
      options: [
        {
          'label': '選択してください',
          'value': '選択してください'
        },
        {
          'label': '他のユーザーと調整中のため',
          'value': '他のユーザーと調整中のため'
        },
        {
          'label': 'スケジュール未設定',
          'value': 'スケジュール未設定'
        },
        {
          'label': '前後に他の依頼があり間に合わないため',
          'value': '前後に他の依頼があり間に合わないため'
        },
        {
          'label': '私用のため',
          'value': '私用のため'
        },
        {
          'label': '引き受けたくないユーザー',
          'value': '引き受けたくないユーザー'
        },
        {
          'label': 'ユーザーの要望に応えられない内容があるため',
          'value': 'ユーザーの要望に応えられない内容があるため'
        },
        {
          'label': 'ユーザーからの連絡不通',
          'value': 'ユーザーからの連絡不通'
        },
      ],
    }
  },
}
</script>