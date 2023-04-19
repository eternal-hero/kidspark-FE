<template>
  <main id="page-P012" class="wrapper">
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
            <h2 class="c-ttl__02">お見積もりを変更する</h2>
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
                        <input type="date" placeholder="日付を選択してください" class="form_part_date_input">
                      </label>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-hour value="15時"></exeo-select-hour>
                      </div>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-minute value="00"></exeo-select-minute>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__date">
                  <div class="quote-list__date-ttl">終了</div>
                  <div class="quote-list__date-list">
                    <div class="quote-list__date-item">
                      <label class="form_part_date">
                        <input type="date" placeholder="日付を選択してください" class="form_part_date_input">
                      </label>
                    </div>
                    <div class="quote-list__date-item">
                      <div class="form_part_select">
                        <exeo-select-hour value="15時"></exeo-select-hour>
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
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">基本料金</h3>
                <p class="c-txt__01">基本料金（時給）を設定してください。割引などある場合はこちらで料金を設定いただけます。</p>
                <div class="quote-list__box">
                  <div class="quote-list__box-ttl">今回の依頼内容：　ベビーシッター</div>
                  <div class="quote-list__box-ct">
                    <div class="quote-list__box-desc">あなたのベビーシッター設定料金</div>
                    <div class="quote-list__box-price">
                      <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> 1500<span>円<span>/1時間</span></span></div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 基本料金<span>※</span>
                    </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input type="text" class="form-edit__input" value="1500">
                        <span>円／1時間あたり</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">オプション料金</h3>
                <p class="c-txt__01">オプション料金を設定してください。内訳は詳細にご記入ください。</p>
                <div class="quote-list__box">
                  <div class="quote-list__box-ttl">今回の依頼オプション</div>
                  <div class="quote-list__box-ct">
                    <ul class="form-check">
                      <li class="form-check__item">
                        <label class="form-edit__checkbox">
                          <input type="checkbox" class="checks" checked="checked">
                          <span class="checkmark"></span>2人の場合　+700円<small>/1時間あたり</small>
                        </label>
                      </li>
                      <li class="form-check__item">
                        <label class="form-edit__checkbox">
                          <input type="checkbox" class="checks" checked="checked">
                          <span class="checkmark"></span>マッサージ　500円<small>/1回あたり</small>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> オプション料金合計 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input type="text" class="form-edit__input" value="2500">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 内訳 </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea">2人お預かり　+700円/1時間あたり&#10;マッサージ　500円/1回あたり</textarea>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例) <br>
                            英語学習　+200円/1時間あたり<br>
                            ピアノレッスン　500円/1回あたり<br>
                            お迎えのみの場合　500円/1回あたり<br>
                            ※ピアノレッスンは30分以内となります。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">割引料金</h3>
                <p class="c-txt__01">初回ご利用時など、割引を適用する場合はご記入ください。</p>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 割引額 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input type="text" class="form-edit__input" placeholder="（例）100">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 内訳 </div>
                    <div class="quote-list__fee-ct">
                      <input type="text" placeholder="内訳を記入してください。" class="form-edit__input">
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">交通費</h3>
                <p class="c-txt__01">交通費を設定してください。内訳は詳細にご記入ください。</p>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 交通費合計 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input type="text" class="form-edit__input" placeholder="（例）1080">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 内訳 </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="（例）&#10;【電車】　〇〇線〇〇駅&#8646;〇〇線〇〇駅　680円（往復）&#10;【バス】　〇〇&#8646;〇〇　400円（往復）"></textarea>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例)<br>
                            みなとみらい線横浜駅→日本大通り駅　700円（往復）<br>
                            日本大通り駅よりご自宅までレンタル自転車利用150円（往復）
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="./P0011-2.html" class="btn_entry mw-335">確認ページへ</a>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="1"></supporter-right-menu>
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="@/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/quotation/45/" target="_blank">お見積りの作成方法</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/request-ng/48/" target="_blank">お仕事リクエストのお断り方法について</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/flow/50/" target="_blank">お仕事開始までの流れ</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoSelectHour from "@/components/action/ExeoSelectHour";
import ExeoSelectMinute from "@/components/action/ExeoSelectMinute";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";

export default {
  name: "quotion-edit",
  components: { ExeoSelectMinute, ExeoSelectHour, ExeoSelect, SupporterRightMenu },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
}
</script>

<style scoped>

</style>