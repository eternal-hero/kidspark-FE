<template>
  <main id="page-P062" class="wrapper">
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
            <h2 class="c-ttl__02">お見積もりを作成する</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list quote-list--02">
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">サポート時間</h3>
                <p class="c-txt__01">リクエスト時からの変更がある場合は、ユーザーの許可を取った上で変更してください。</p>
                <div class="quote-list__date">
                  <div class="quote-list__date-ttl">開始</div>
                  <div class="quote-list__date-list">
                    <div class="quote-list__date-item">
                      <label class="form_part_date">
                        <input type="date" class="form-edit__input">
                      </label>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-hour value="12時"></exeo-select-hour>
                      </div>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-minute value="00" :options="$MINUTES_SELECT_OPTION_FULL"></exeo-select-minute>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__date">
                  <div class="quote-list__date-ttl">終了</div>
                  <div class="quote-list__date-list">
                    <div class="quote-list__date-item">
                      <label class="form_part_date">
                        <input type="date" class="form-edit__input">
                      </label>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-hour value="15時"></exeo-select-hour>
                      </div>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-minute value="00" :options="$MINUTES_SELECT_OPTION_FULL"></exeo-select-minute>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ExeoTableSupporterBasicCharge></ExeoTableSupporterBasicCharge>
            </div>
            <a href="./P011-2.html" class="btn_entry mw-335">確認ページへ</a>
          </div>
          <SupporterRightMenu :step-active="stepActive"></SupporterRightMenu>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import ExeoSelectMinute from "@/components/action/ExeoSelectMinute";
import ExeoSelectHour from "@/components/action/ExeoSelectHour";
import ExeoTableSupporterBasicCharge from "~/components/table/ExeoTableSupporterBasicCharge.Vue";

export default {
  layout: 'supporter',
  components: {
    SupporterRightMenu,
    ExeoSelectHour,
    ExeoSelectMinute,
    ExeoTableSupporterBasicCharge
  },
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
  data() {
    return {
      stepActive: 1
    }
  }
}
</script>
