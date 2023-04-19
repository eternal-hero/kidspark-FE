<template>
  <main id="page-P080" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="">マイページ</a><a href="/static">お仕事管理</a><span class="current">お仕事詳細(単発)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(単発)</h1>
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
                  <div class="quote-list__box-ttl">今回の依頼カテゴリー：　家事代行</div>
                  <div class="quote-list__box-ct">
                    <div class="quote-list__box-desc">あなたの家事代行設定料金</div>
                    <div class="quote-list__box-price">
                      <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> 1500<span>円<span>/1時間</span></span></div>
                      <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> 1400<span>円<span>/1時間</span></span></div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 基本料金<span>※</span>
                    </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input type="text" class="form-edit__input" value="1500" placeholder="（例）1800">
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
                          <span class="checkmark"></span>お庭の手入れ　+1000円<small>/1時間あたり</small>
                        </label>
                      </li>
                      <li class="form-check__item">
                        <label class="form-edit__checkbox">
                          <input type="checkbox" class="checks" checked="checked">
                          <span class="checkmark"></span>買い物代行　+1000円<small>/1回あたり</small>
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
                        <input type="text" class="form-edit__input" value="2500" placeholder="（例）300">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 内訳 </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="">お庭の手入れ　+1000円/1回あたり&#10;買い物代行　+1000円/1回あたり</textarea>
                      <div class="quote-list__fee-note">オプションの合計金額は初期のサポート時間で自動計算されています。サポート時間に変更があった場合などは自身で計算し直してオプション料金合計を変更してください。ユーザーから依頼のないオプションは実施しないようご注意ください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">(例)<br>・お庭のお手入れは時間内での草むしり、落ち葉集めのみとなります。<br>・作りおき料理は5品になります。</p>
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
                      <div class="quote-list__fee-note">お仕事終了後の完了レポートにて、実際の交通費に変更可能です。<br> 現時点では、最寄り駅の最安値価格を入力してください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">(例)<br>みなとみらい線横浜駅→日本大通り駅　700円（往復）<br>日本大通り駅よりご自宅までレンタル自転車利用150円（往復）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="./P080-2.html" class="btn_entry mw-335">確認ページへ</a>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="1"></supporter-right-menu>
            <question-box :questions="questions"></question-box>
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

export default {
  layout: 'supporter',
  components: {
    SupporterRightMenu,
    ExeoSelectHour,
    ExeoSelectMinute,
    QuestionBox
  },
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/quotation/45/',
          name: 'お見積りの作成方法'
        },
        {
          url: 'https://www.kids-parks.com/faq/request-ng/48/',
          name: 'お仕事リクエストのお断り方法について'
        },
        {
          url: 'https://www.kids-parks.com/faq/flow/50/',
          name: 'お仕事開始までの流れ'
        }
      ]
    };
  }
}
</script>
