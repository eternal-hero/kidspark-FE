<template>
  <main id="page-U025" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">時間変更を依頼する</h2>
            <hr class="hr mbpc-33">

            <div class="quote-list">

              <div class="quote-list__item">
                <p class="c-txt__01">予約時間の変更はサポーターに事前にご相談の上、申請してください。<br>開始予定時間まで48時間を切っていて、依頼時間が短くなる場合は部分キャンセル料が発生済ますのでご注意ください。</p>
                <question-box :questions="questions"></question-box>
              </div>
              <div class="quote-list__item">
                <div class="quote-list__date quote-list__date--02 quote-list__date--start">
                  <div class="quote-list__date-ttl">時間変更<small class="required">※</small></div>
                  <div class="quote-list__fee-ct">
                    <div class="quote-list__date-list quote-list__date-list--time">
                      <div class="quote-list__date-item">開始時間</div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <exeo-select-hour value="12時"></exeo-select-hour>
                        </div>
                      </div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <exeo-select-minute value="00"></exeo-select-minute>
                        </div>
                      </div>
                    </div>
                    <div class="quote-list__date-list quote-list__date-list--time">
                      <div class="quote-list__date-item">終了時間</div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <exeo-select-hour value="12時"></exeo-select-hour>
                        </div>
                      </div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <exeo-select-minute value="00"></exeo-select-minute>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="hr mbpc-15 mbsp-12">
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="#" class="btn_entry">確認ページへ</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="4"></guardian-right-menu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import ExeoSelectHour from "@/components/action/ExeoSelectHour";
import exeoSelectMinute from "@/components/action/ExeoSelectMinute";
import QuestionBox from "@/components/block/QuestionBox";

export default {
  components: {
    GuardianRightMenu,
    ExeoSelectHour,
    exeoSelectMinute,
    QuestionBox
  },
  layout: 'guardian',

  data() {
    return {
      questions: [
        {
          'name': '予約確定後に時間を変更したい',
          'url': 'https://www.kids-parks.com/faq/reserve-3/203/',
        }
      ],
    }
  }
}
</script>
