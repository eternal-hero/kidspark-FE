<template>
  <main id="page-P085" class="wrapper">
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
            <h2 class="c-ttl__02">完了レポートを作成する</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list">
              <div class="quote-list__item">
                <h3 class="quote-list__ttl mbpc-27">サポート時間</h3>
                <div class="quote-list__date quote-list__date--02 pc">
                  <div class="quote-list__date-ttl">
                    <span>開始予約時刻</span>
                  </div>
                  <div class="quote-list__date-list">
                    <p class="quote-list__date-day">2022年07月20日(水) 12:00</p>
                  </div>
                </div>
                <div class="quote-list__date quote-list__date--02 mbpc-30">
                  <div class="quote-list__date-ttl">開始<small>※</small></div>
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
                <div class="quote-list__date quote-list__date--02 pc mbpc-18">
                  <div class="quote-list__date-ttl">
                    <span>開始予約時刻</span>
                  </div>
                  <div class="quote-list__date-list">
                    <p class="quote-list__date-day">2022年07月20日(水) 15:00</p>
                  </div>
                </div>
                <div class="quote-list__date quote-list__date--02 quote-list__date--start">
                  <div class="quote-list__date-ttl">終了<small>※</small></div>
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
                        <exeo-select-minute value="00" :options="$MINUTES_SELECT_OPTION_FULL"></exeo-select-minute>
                      </div>
                    </div>
                    <div class="quote-list__date-note">
                      <p class="c-txt__04">サポート時間は、サポーターの遅刻またはユーザーの延長があった場合のみ変更可能です。ユーザーの帰宅が早まった場合でも、予定していたサポート時間は短縮できません。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">基本料金</h3>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 基本料金 </div>
                    <div class="quote-list__fee-ct">
                      <p class="quote-list__fee-result"> 1500円<span>/<span>1時間あたり</span></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">オプション料金</h3>
                <p class="c-txt__01">オプションに変更があった場合は変更してください。内訳は詳細にご記入ください。</p>
                <div class="quote-list__box">
                  <div class="quote-list__box-ttl">今回の依頼オプション</div>
                  <div class="quote-list__box-ct">
                    <ul class="form-check">
                      <li class="form-check__item">
                        <label class="form-edit__checkbox">
                          <input type="checkbox" class="checks" checked="checked">
                          <span class="checkmark"></span>お庭の手入れ　+1000円<small>/1回あたり</small>
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
                        <input type="text" class="form-edit__input" value="2500">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 内訳 </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea h178">お庭の手入れ　+1000円/1回あたり&#10;買い物代行　+1000円/1回あたり</textarea>
                      <div class="quote-list__fee-note">オプションの合計金額は見積もり時の料金が表示されています。サポート時間や内容に変更があった場合などは自身で計算し直してオプション料金合計を変更してください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例)<br>
                            ・お庭のお手入れは時間内での草むしり、落ち葉集めのみとなります。<br>
                            ・作りおき料理は5品になります。<br>
                            ※作り置き料理は最終的にに6品になりました。追加料金はいただいておりません。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">割引料金</h3>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 割引額 </div>
                    <div class="quote-list__fee-ct">
                      <p class="quote-list__fee-result"> 初回予約割引　-500円/1回あたり </p>
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
                        <input type="text" class="form-edit__input" value="1080">
                        <span>円</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 内訳 </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea">【電車】　〇〇駅&#8646;〇〇駅　680円（往復）&#10;【バス】　〇〇&#8646;〇〇　400円（往復）</textarea>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例)<br>
                            みなとみらい線横浜駅→日本大通り駅　700円（往復）<br>
                            ※雨が降ったため、レンタル自転車は利用しませんでしたので−150円に修正しています。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">本日のご報告</h3>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> タイムテーブル<span>※</span>
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="（例）&#10;10:00　サポートスタート&#10;10:00〜10:20　浴室清掃（壁、バスタブ、ドア、床）&#10;10:20〜10:30　洗面室清掃（洗面台、洗濯機、収納棚、床）&#10;10:30〜10:40　トイレ清掃（便器、壁、床、ドアノブ、ペーパーホルダー）&#10;10:40〜11:00　キッチン清掃（食器洗い、家電、ガスレンジ、壁、シンク、床）&#10;1100〜11:20　リビング清掃（小物、テーブル、食器棚、ソファ、家電、ピアノ、カーペット、床、窓、柵、エアコン室外機）"></textarea>
                      <div class="quote-list__fee-note">本日のサポート内容を、時系列でできるだけ詳しく記入してください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例)<br>
                            10：00　サポートスタート <br>
                            10：00〜10：20　浴室清掃（壁、バスタブ、ドア、床）<br>
                            10：20〜10：30　洗面室清掃（洗面台、洗濯機、収納棚、床）<br>
                            10：30〜10：40　トイレ清掃（便器、壁、床、ドアノブ、ペーパーホルダー）<br>
                            10：40〜11：00　キッチン清掃（食器洗い、家電、ガスレンジ、壁、シンク、床）<br>
                            11：00〜11：20　リビング清掃（小物、テーブル、食器棚、ソファ、家電、ピアノ、カーペット、床、窓、柵、エアコン室外機）<br>
                            11：20〜11：30　和室清掃（小物、照明、ふすま、障子、畳）<br>
                            11：30〜11：40　寝室清掃（ドレッサー、本棚、ベッド、床、廊下）<br>
                            11：40〜11：50　玄関清掃（ドア、マット、たたき、廊下）<br>
                            11：50〜12：00　最終チェック、報告（消耗品の不足状況確認、ゴミ捨て）
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> サポート内容<br>・報告<span>※</span>
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="（例）今週もご利用ありがとうございました。&#10;本日は水回りとお部屋のお掃除のご依頼ということで、水回りとお部屋全体のホコリをとり、赤ちゃんに配慮した重曹やクエン酸、塩などのエコな洗剤を使用させております。&#10;浴室はスポンジとブラシと歯ブラシを使って排水口まで外せるだけ外してぬめりや汚れを除去しました。ワイパーと雑巾で水気をとり、小物は取りやすいように並べております。&#10;洗面室も浴室同様に洗面台を掃除させていただき、床はホコリが溜まりやすいので掃除機をかけたあと拭き掃除しています。&#10;トイレも便器と便座の裏の細かい箇所まで掃除をし、ハタキでホコリを落としてタンクやスリッパ、コンセント周りまで拭いています。&#10;キッチンもいつもどおり掃除させていただき、調味料は所定の位置に戻させていただきました。"></textarea>
                      <div class="quote-list__fee-note">家事の様子を詳しく記入してください。どんなところを掃除したのか、どんな料理を何品作ったのかなど、作業報告書を入力してください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例)<br>
                            今週もご利用ありがとうございました。<br>
                            本日は水回りとお部屋のお掃除のご依頼ということで、水回りとお部屋全体のホコリをとり、赤ちゃんに配慮した重曹やクエン酸、塩などのエコな洗剤を使用させております<br>。
                            浴室はスポンジとブラシと歯ブラシを使って排水口まで外せるだけ外してぬめりや汚れを除去しました。ワイパーと雑巾で水気をとり、小物は取りやすいように並べております。<br>
                            洗面室も浴室同様に洗面台を掃除させていただき、床はホコリが溜まりやすいので掃除機をかけたあと拭き掃除しています。<br>
                            トイレも便器と便座の裏の細かい箇所まで掃除をし、ハタキでホコリを落としてタンクやスリッパ、コンセント周りまで拭いています。<br>
                            キッチンもいつもどおり掃除させていただき、調味料は所定の位置に戻させていただきました。<br>
                            各お部屋も小物を別の位置にうつしてからハタキでホコリをとり、掃除機をかけてから拭き掃除して移動したものをもとに戻しております。<br>
                            今回目立つ汚れや消耗品の不足はありませんでした。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 写真添付 </div>
                    <div class="quote-list__fee-ct">
                      <div class="form-file">
                        <label class="pc" for="upload-photo">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</label>
                        <label class="sp" for="upload-photo"><span>ファイル選択</span>で写真を添付できます。</label>
                        <input type="file" name="photo" id="upload-photo">
                      </div>
                      <div class="quote-list__fee-note">※アップロードいただけるファイル　jpg / jpeg / gif / png</div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 連絡事項 </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="連絡事項がない場合は「特になし」と記入してください。"></textarea>
                      <div class="quote-list__fee-note">ユーザーに連絡すべき事項があればご記入ください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">(例)<br>トイレットペーパーの在庫が残り1個になっていました。<br>醤油が残り少なくなっていましたので補充をお願いします。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">ユーザーへのレビュー</h3>
                <p class="c-txt__01 mbpc-24 mbsp-24"> 匿名のレビューの記入にご協力ください。<br>レビューに関する注意点などは<a href="">レビューについて</a>をご確認ください。 </p>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> アイコン </div>
                    <div class="quote-list__fee-ct">
                      <exeo-select-icon name="icon"></exeo-select-icon>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 満足度 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-start">
                        <exeo-rating name="review">
                        </exeo-rating>
                      </div>
                      <div class="quote-list__fee-note">依頼内容の正確さ、やりとりの丁寧さ、時間の正確さ、プロフィールの正確さ などを総合的に評価して、星をクリックしてください。</div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> レビュー本文<span>※</span>
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea h178" placeholder="レビューを記入してください。"></textarea>
                      <div class="quote-list__fee-note"> 今回のお仕事において、ユーザーに対して満足した点や、改善して欲しい点をコメントに記載いただけます。お子様のお名前など、個人情報の記載にご注意ください。レビューの内容は、ユーザーには表示されません。他のサポーターが、仕事依頼を受けた際に参考としてレビューを見ることができます。<br>※運営に対するご意見、改善点などはお問い合わせよりご記入ください。 </div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">(例)<br>普段からきれいなお宅です。水回りを特に気にされておりますので、丁寧にさせて頂きました。<br>途中ご帰宅されて、一緒に料理もいたしました。またご依頼ありましたお受けしたいと思います。</p>
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
            <supporter-right-menu step-active="5"></supporter-right-menu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import ExeoTableSupporterJobMoney from "@/components/table/ExeoTableSupporterJobMoney";
import ExeoTableSupporterJobInforReport from "@/components/table/ExeoTableSupporterJobInforReport";
import ExeoTableSupporterJobHourSupport from "@/components/table/ExeoTableSupporterJobHourSupport";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoSelectMinute from "@/components/action/ExeoSelectMinute";
import ExeoSelectHour from "@/components/action/ExeoSelectHour";
import ExeoRating from "@/components/action/ExeoRating";
import ExeoSelectIcon from "@/components/action/ExeoSelectIcon";
export default {
  layout: 'supporter',
  components: {
    SupporterJobMenu,
    SupporterRightMenu,
    ExeoTableSupporterJobMoney,
    ExeoTableSupporterJobInforReport,
    ExeoTableSupporterJobHourSupport,
    QuestionBox,
    ExeoSelectMinute,
    ExeoSelectHour,
    ExeoRating,
    ExeoSelectIcon
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
          url: 'https://www.kids-parks.com/faq/housework-2/149/',
          name: '家事代行の完了レポートの書き方'
        },
        {
          url: 'https://www.kids-parks.com/faq/housework-3/152/',
          name: '家事代行中の事故・トラブル'
        },
        {
          url: 'https://www.kids-parks.com/faq/review/73/',
          name: 'ユーザーへのレビューについて'
        },
      ],
    }
  }
}
</script>
