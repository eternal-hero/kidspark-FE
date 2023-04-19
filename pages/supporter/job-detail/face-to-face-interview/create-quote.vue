<template>
  <main id="page-P071" class="wrapper">
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
            <h2 class="c-ttl__02">お見積もりを作成する</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list">
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
              <ExeoTableRequestCategory basic-fee="1200" categoryName="ベビーシッター" :has-image="false" custom-text-fee="<b>対面事前面談</b>1200<span>円<span>/1時間</span></span>"></ExeoTableRequestCategory>
              <ExeoTableFeeBox
                fee-title="交通費合計"
                total-option-fee=""
                total-option-fee-placeholder="（例）1080"
                breakdown=""
                breakdown-placeholder="（例）【電車】　〇〇線〇〇駅⇆〇〇線〇〇駅　680円（往復）【バス】　〇〇⇆〇〇　400円（往復）"
                text-example="テキスト入力例が入ります。テキスト入力例が入ります。"
                fee-note="お仕事終了後の完了レポートにて、実際の交通費に変更可能です。<br> 現時点では、最寄り駅の最安値価格を入力してください。"
              ></ExeoTableFeeBox>
            </div>
            <a href="./P0071-2.html" class="btn_entry mw-335">確認ページへ</a>
          </div>
          <aside class="l-content__02-r">
            <SupporterRightMenu step-active="1"></SupporterRightMenu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import ExeoSelectMinute from "@/components/action/ExeoSelectMinute";
import ExeoSelectHour from "@/components/action/ExeoSelectHour";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoTableFeeBox from "@/components/table/ExeoTableFeeBox";
import ExeoTableRequestCategory from "@/components/table/ExeoTableRequestCategory";

export default {
  components: {
    SupporterRightMenu,
    QuestionBox,
    ExeoSelectHour,
    ExeoSelectMinute,
    ExeoTableFeeBox,
    ExeoTableRequestCategory
  },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(対面事前面談)'
    }
  },
  data () {
    return {
      questions: [
        {
          url: '',
          name: 'お見積りの作成方法'
        },
        {
          url: '',
          name: 'お仕事リクエストのお断り方法について'
        },
        {
          url: '',
          name: 'お仕事開始までの流れ'
        }
      ],
    }
  }
}
</script>
