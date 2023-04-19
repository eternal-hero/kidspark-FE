<template>
  <main id="page-P090" class="wrapper">
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
            <div class="request-box">
              <h2 class="c-ttl__02">事前面談リクエストをお断りする</h2>
              <hr class="hr">
              <p class="c-txt__01"> 正確なお断りの理由をご記入ください。<br>理由詳細のみユーザーに開示されます。 </p>
            </div>
            <question-box :questions="questions"></question-box>
            <form action="method" id="id-form">
              <div class="request-form">
                <div class="request-form__item">
                  <div class="request-form__ttl"> お断り理由<span>※</span>
                    <span class="disclosure --off">ユーザーに非公開</span>
                  </div>
                  <div class="request-form__ct">
                    <div class="form_part_select">
                      <exeo-select :options="$INTERVIEW_REASON_CANCEL_OPTIONS"></exeo-select>
                    </div>
                  </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">ユーザーに開示<br class="pc">されます</span>
                  </div>
                  <div class="request-form__ct">
                    <textarea class="form-edit__textarea" name="request" cols="30" rows="10" placeholder="詳細をご記入ください。" required></textarea>
                    <div class="request-form__ct-right">
                      <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                      <div class="c-example__cont js-acc-cont">
                        <span class="c-example__close js-acc-close">×</span>
                        <p class="c-txt__01">
                        </p>
                        <p><strong>例1）</strong><br>他のユーザーから同じ時間にリクエストが来ていて現在調整中のため、今回は辞退させていただきます。 </p><br>
                        <p>
                          <strong>例2）</strong><br> 1つ前のお仕事が少し遠方で、リクエストいただいたお時間に間に合わないため、今回は辞退させていただきます。
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-control--submit">
                <a href="./P070.html" class="btn_back w100">もどる</a>
                <a href="./P090-2.html" class="btn_entry" id="button" disabled="disabled">確認ページへ</a>
              </div>
            </form>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="1" :steps="$STEP_PRE_INTERVIEW_STATUS"></supporter-right-menu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
import exeoSelect from "@/components/action/ExeoSelect";
export default {
  layout: 'supporter',
  components: {
    SupporterRightMenu,
    QuestionBox,
    exeoSelect
  },
  head() {
    return {
      title: 'お仕事詳細(対面事前面談)'
    }
  },
  data() {
    return {
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/request-ng/48/',
          name: 'お仕事リクエストのお断り方法について'
        }
      ],
    };
  }
}
</script>
