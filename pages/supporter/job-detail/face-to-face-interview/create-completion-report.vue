<template>
  <main id="page-P076" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(対面事前面談)</span>
      </div>
    </div>
    <div class="main-content job-detail">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(対面事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">完了レポートを作成する</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list">
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">対面事前面談</h3>
                <div class="quote-list__schedule">
                  <div class="quote-list__schedule-l">開始予約時刻</div>
                  <div class="quote-list__schedule-r">2022年07月20日(水) 12:00</div>
                </div>
                <div class="quote-list__date quote-list__date--02">
                  <div class="quote-list__date-ttl">開始<small class="required">※</small></div>
                  <div class="quote-list__date-list">
                    <div class="quote-list__date-item">
                      <label class="form_part_date">
                        <input type="date" placeholder="日付を選択してください" class="form_part_date_input">
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
                <div class="quote-list__schedule">
                  <div class="quote-list__schedule-l">終了予約時刻</div>
                  <div class="quote-list__schedule-r">2022年07月20日(水) 15:00</div>
                </div>
                <div class="quote-list__date quote-list__date--02 quote-list__date--start">
                  <div class="quote-list__date-ttl">終了<small class="required">※</small></div>
                  <div class="quote-list__date-list">
                    <div class="quote-list__date-item">
                      <label class="form_part_date">
                        <input type="date" placeholder="日付を選択してください" class="form_part_date_input">
                      </label>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-hour value="14時"></exeo-select-hour>
                      </div>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-minute value="00" :options="$MINUTES_SELECT_OPTION_FULL"></exeo-select-minute>
                      </div>
                    </div>
                    <div class="quote-list__date-note">
                      <p class="c-txt__04">事前面談で時間が伸びた場合は延長料金は発生しません。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">基本料金</h3>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl">基本料金</div>
                    <div class="quote-list__fee-ct">
                      <p class="quote-list__fee-result">1200円<span>/<span>1時間あたり</span></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">交通費</h3>
                <p class="c-txt__01">交通費に変更がある場合に変更してください。内訳は詳細にご記入ください。</p>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 交通費合計 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input type="text" class="form-edit__input" placeholder="" value="300">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 内訳 </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="（例）&#10;【電車】　〇〇線〇〇駅&#8646;〇〇線〇〇駅　680円（往復）&#10;【バス】　〇〇&#8646;〇〇　400円（往復）">【電車】　〇〇駅⇆〇〇駅　300円（往復）</textarea>
                      <div class="quote-list__fee-note">お仕事終了後の完了レポートにて、実際の交通費に変更可能です。<br> 現時点では、最寄り駅の最安値価格を入力してください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">(例)<br>みなとみらい線横浜駅→日本大通り駅　700円（往復）<br>※雨が降ったため、レンタル自転車は利用しませんでしたので−150円に修正しています。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item report-today">
                <h3 class="quote-list__ttl">本日のご報告</h3>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl">面談内容確認<span>※</span></div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="面談で話した内容を入力しておきましょう。&#10;こちらが話した内容がうまく伝わっていないなどの認識の相違によるトラブルを防ぐことができます。"></textarea>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">・来客と電話があっても対応しない<br>・1時間延長するかもしれない<br>・お子さまのアレルギー（ピーナッツ）※重要！<br>・冷蔵庫の中に夕食のお弁当を作っていれてあるので、レンジで温めて18時提供</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl">連絡事項</div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="連絡事項がない場合は「特になし」と記入してください。"></textarea>
                      <p class="quote-list__fee-note">ユーザーに連絡すべき事項があればご記入ください。</p>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">(例)<br>お迎えが18時以降になった場合、追加料金が発生します（1時間あたり500円）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="./P0011-2.html" class="btn_entry mw-335">確認ページへ</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="5" :steps="$STEP_PRE_INTERVIEW_STATUS"></supporter-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>
<script>

import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from '~/components/block/QuestionBox.vue';
import ExeoSelectHour from "@/components/action/ExeoSelectHour";
import ExeoSelectMinute from "@/components/action/ExeoSelectMinute";

export default {
  components: {
    SupporterRightMenu,
    QuestionBox,
    ExeoSelectHour,
    ExeoSelectMinute
  },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(対面事前面談)'
    }
  },
  data() {
    return {
      questions: [
        {
          'name': '完了レポートの書き方',
          'url': 'https://www.kids-parks.com/faq/report/65/',
        },
        {
          'name': '報酬のお支払いについて',
          'url': 'https://www.kids-parks.com/faq/reward/69/',
        },
        {
          'name': '保護者が予定時間より早く帰ってきた場合',
          'url': 'https://www.kids-parks.com/faq/trouble/71/',
        },
        {
          'name': 'ユーザーへのレビューについて',
          'url': 'https://www.kids-parks.com/faq/review/73/',
        },
      ],
    }
  },
}
</script>
