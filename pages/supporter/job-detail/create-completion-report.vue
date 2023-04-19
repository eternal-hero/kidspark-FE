<template>
  <main id="page-P018" class="wrapper">
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
                      <p class="c-txt__04"> サポート時間は、サポーターの遅刻またはユーザーの延長があった場合のみ変更可能です。ユーザーの帰宅が早まった場合でも、予定していたサポート時間は短縮できません。<br> 詳しくは<a href="https://www.kids-parks.com/faq/trouble/71/" target="_blank">保護者が予定時間より早く帰ってきた場合</a>をご確認ください。<br> 終了予定時刻をオーバーして延長場合、延長した時間分基本料金の20%が上乗せされます。 </p>
                    </div>
                  </div>
                </div>
                <div class="quote-list__date quote-list__date--02 quote-list__date--start sp">
                  <div class="quote-list__date-ttl">保護者様帰宅時間</div>
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
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea h178">2人お預かり　+700円/1時間あたり&#10;マッサージ　500円/1回あたり</textarea>
                      <div class="quote-list__fee-note">オプションの合計金額は見積もり時の料金が表示されています。サポート時間や内容に変更があった場合などは自身で計算し直してオプション料金合計を変更してください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例)<br>
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
                            (例) <br>
                            みなとみらい線横浜駅→日本大通り駅　700円（往復）<br>
                            日本大通り駅よりご自宅までレンタル自転車利用150円（往復）
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
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="（例）&#10;10:00　サポートスタート&#10;10:00~12:00　遊び（お絵かき、おままごと）&#10;12:00~12:30　お食事（白米、生姜焼き、ミニトマト全て完食）&#10;12:30~13:00　お遊び（おままごと）&#10;13:00　排泄&#10;13:00~14:00　お昼寝&#10;14:00~15:00　お遊び（お絵かき、折り紙）&#10;15:00　お母さまご帰宅、引き渡し"></textarea>
                      <div class="quote-list__fee-note">本日のサポート内容を、時系列でできるだけ詳しく記入してください。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例) <br>
                            8:50 到着/はなこちゃんお預かり<br>
                            9:00-10:00 折り紙遊び<br>
                            11:00 -12:20 リカちゃん遊び<br>
                            12:20-12:50 お昼ご飯<br>
                            12:50-13:00 バレー　お母様へはなこちゃん引き継ぎ<br><br>

                            (例)<br>
                            10:00　サポートスタート<br>
                            10:00~12:00　遊び（お絵かき、おままごと）　<br>
                            12:00~12:30　お食事（白米、ハンバーグ、サラダ全て完食）<br>
                            12:30~13:00　お遊び（おままごと）<br>
                            13:00　排泄<br>
                            13:00~14:00　お昼寝<br>
                            14:00~15:00　お遊び（お絵かき、折り紙）<br>
                            15:00　お母さまご帰宅、引き渡し
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> お子様の様子<span>※</span>
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="（例）お母さまがお出かけした後寂しさから泣いていましたが、5分くらいたって落ち着いてきた時に「何して遊ぶ？」と声をかけると「お絵かき！」と元気よくお返事してくれました。お絵描きはとても集中しながら書いていて、「これがお母さんで、これがお父さん」と、書いているものをひとつひとつ一生懸命に説明してくれました。&#10;おままごとでは、リカちゃんハウスを最近買ってもらったと、とても嬉しそうに教えてくれて、とても楽しそうにお人形を喋らせて過ごしていました。&#10;お食事の時間では、白米と生姜焼きが大好きな様子ですぐに完食できましたが、ミニトマトが少し苦手な様子でした。時間はかかりましたが頑張って3つ食べようとしている様子が見られて、完食した時は2人でハイタッチして喜びました。&#10;お食事の後少し遊び、1時間ほど睡眠をとった後はお絵かきと折り紙をして過ごしました。手先が器用で折り紙をとても上手に折っていてすごく驚きました。"></textarea>
                      <div class="quote-list__fee-note">サポート中のお子様の様子を詳しく記入してください。どんなことをして過ごしたのか、遊びを通しての成長、関心ごとや、体調面の変化など。</div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            (例)<br>
                            お母さまがお出かけした後寂しさから泣いていましたが、5分くらいたって落ち着いてきた時に「何して遊ぶ？」と声をかけると「お絵かき！」と元気よくお返事してくれました。お絵描きはとても集中しながら書いていて、「これがお母さんで、これがお父さん」と、書いているものをひとつひとつ一生懸命に説明してくれました。<br>
                            おままごとでは、リカちゃんハウスを最近買ってもらったと、とても嬉しそうに教えてくれて、とても楽しそうにお人形を喋らせて過ごしていました。<br>
                            お食事の時間では、白米と生姜焼きが大好きな様子ですぐに完食できましたが、ミニトマトが少し苦手な様子でした。時間はかかりましたが頑張って3つ食べようとしている様子が見られて、完食した時は2人でハイタッチして喜びました。<br>
                            お食事の後少し遊び、1時間ほど睡眠をとった後はお絵かきと折り紙をして過ごしました。手先が器用で折り紙をとても上手に折っていてすごく驚きました。<br><br>
                            (例)<br>
                            こんにちは、本日はご依頼いただきありがとうございました。<br>
                            引き継ぎ後すぐにピアノをひきはじめました。楽譜を持ってきてくれたので、そこにトトロの曲を一緒に練習しました。<br>
                            とても上手でびっくりしました。ピアノは30分ほど練習しました。<br>
                            続いてリカちゃん人形出を使ってままごとをしましたが、お家やサーティワン、自動販売機などのおもちゃの使い方を一通り教えてくれたりしてとても楽しかったです。リカちゃん総動員でパーティとお泊まり会をして過ごしておりました。<br>
                            夢中でリカちゃん人形をしていたら12時を過ぎていてはなこちゃんが「ご飯食べる？」とお昼の時間を教えてくれたので助かりました> <<br>
                            お昼は冷蔵庫の中に入っていたお弁当をレンジで温めたものと、ご用意していただいた水筒のお茶を飲みました。<br>
                            食べている最中に肘がコップに当たってしまって飲み物が少し床に溢れてしまいました。◯◯ちゃんに教えてもらった雑巾で拭き掃除を致しました。雑巾は洗って、元の場所にもどしてあります。<br>
                            ご飯の最中に習い事のお話で盛り上がったので、お昼の後は◯◯ちゃんの得意なダンスを見せてもらっていました。<br><br>
                            また機会があれば よろしくお願いいたします。
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
                      <div class="quote-list__fee-note">※ユーザーからお子様の写真撮影を事前に断られた場合は撮影しないようにしてください。<br> ※アップロードいただけるファイル　jpg / jpeg / gif / png</div>
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
                          <p class="c-txt__01">
                            (例)<br>
                            食事中にコップを落としてしまい、床が濡れました。洗面所にありました雑巾で拭いています。雑巾は洗ってもとの場所にもどしてあります。<br><br>
                            (例)<br>
                            テレビを見ないお約束でしたが、お昼寝から起きたあと、どうしてもアンパンマンがみたいとグズったため、20分ほど一緒にみています。
                          </p>
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
                          <p class="c-txt__01">
                            (例)<br>
                            事前の連絡や当日の引き継ぎもスムーズで、お子様もしっかりとコミュニケーションを取ってくださり、安心してサポートにあたる事ができました。<br>
                            当日も遅れることなく、時間通りにご帰宅頂きました。とても信頼できる保護者様だと思います。<br><br>
                            (例)<br>
                            自宅までの行き方がわかりづらく、事前にもう少し詳しく伺っておけばよかったと思いました。<br>
                            お子さんは少しシャイなので、打ち解けるために少し時間がかかりましたが、とても素直で良いお子さんでした。
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
          url: 'https://www.kids-parks.com/faq/report/65/',
          name: '完了レポートの書き方'
        },
        {
          url: 'https://www.kids-parks.com/faq/reward/69/',
          name: '報酬のお支払いについて'
        },
        {
          url: 'https://www.kids-parks.com/faq/trouble/71/',
          name: '保護者が予定時間より早く帰ってきた場合'
        },
        {
          url: 'https://www.kids-parks.com/faq/review/73/',
          name: 'ユーザーへのレビューについて'
        }
      ],
    }
  }
}
</script>
