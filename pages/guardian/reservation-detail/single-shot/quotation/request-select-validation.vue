<template>
  <main id="page-U020-3" class="wrapper">
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
            <h2 class="c-ttl__02">見守り依頼、カメラレンタルの利用を選択してください</h2>
            <hr class="hr mbpc-33">
            <div class="quote-list">

              <div class="quote-list__item">
                <div class="c-txt__01 c-al--r">
                  <div class="statuschips tooltip">
                    <span>見守り依頼とは</span>
                    <p class="tooltip__txt"><a href="https://www.kids-parks.com/faq/camera-2/212/" target="_blank">見守り依頼についてはこちら</a>
                    </p>
                  </div>
                </div>
                <p class="c-txt__01">見守り依頼、カメラレンタルをご希望の方は下記申請フォームからお手続きをお願いいたします。</p>
                <hr class="hr mbpc-30 mbsp-30">
                <div class="quote-list__fee">
                  <span class="c-btn__02">予約希望日まで10日を切っているため、今回の依頼ではレンタルに対応できません。</span>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 申請内容 <small class="required">※</small></div>
                    <div class="quote-list__fee-ct">
                      <ul class="form_block js-tabcheckbox">
                        <li class="form-check__item">
                          <label class="form-edit__radio_02 js-check">
                            <input type="radio" name="transportation" checked="checked" value="依頼をしない">
                            <span class="checkmark"></span>依頼をしない</label>
                        </li>
                        <li class="form-check__item radio_disabled">
                          <label class="form-edit__radio_02 js-check" data-id="form-edit__02">
                            <input type="radio" name="transportation" disabled value="カメラレンタルを依頼する / 弊社スタッフによる見守りも依頼する">
                            <span class="checkmark"></span>カメラレンタルを依頼する / 弊社スタッフによる見守りも依頼する</label>
                        </li>
                        <li class="form-check__item radio_disabled">
                          <label class="form-edit__radio_02 js-check" data-id="form-edit__03">
                            <input type="radio" name="transportation" disabled value="カメラレンタルを依頼する / 弊社スタッフによる見守りは不要">
                            <span class="checkmark"></span>カメラレンタルを依頼する / 弊社スタッフによる見守りは不要</label>
                        </li>
                        <li class="form-check__item">
                          <label class="form-edit__radio_02 js-check" data-id="form-edit__04">
                            <input type="radio" name="transportation" value="カメラレンタルは不要 / お持ちのカメラで弊社スタッフによる見守りを依頼する">
                            <span class="checkmark"></span>カメラレンタルは不要 / お持ちのカメラで弊社スタッフによる見守りを依頼する</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-ctcheck is-open " id="form-edit__02">
                <div class="quote-list__item">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 弊社スタッフによる<br>見守り内容 <small class="required">※</small></div>
                    <div class="quote-list__fee-ct">
                      <ul class="form_block js-tabcheckbox">
                        <li class="form-check__item">
                          <label class="form-edit__radio_02">
                            <input type="radio" name="staff-watch01" checked="checked" value="依頼をしない">
                            <span class="checkmark"></span>
                            <span class="c-fw--bd">全時間見守り（A円/1時間当たり）</span><br>
                            サポート時間中すべての時間において弊社スタッフにより見守りを行い、報告レポートとしてまとめます。
                          </label>
                        </li>
                        <li class="form-check__item">
                          <label class="form-edit__radio_02">
                            <input type="radio" name="staff-watch01" value="依頼をしない">
                            <span class="checkmark"></span>
                            <span class="c-fw--bd">ランダム見守り<br>（〜3時間までB円／3時間〜6時間までB円／6時間〜9時間　  B円／9時間以降1時間当たりB円）</span><br>
                            弊社スタッフの見守りはサポート時間内において1時間間隔で5分〜10分集中的に見守り、報告レポートとしてまとめます。
                          </label>
                        </li>
                        <li class="form-check__item">
                          <label class="form-edit__radio_02">
                            <input type="radio" name="staff-watch01" value="依頼をしない">
                            <span class="checkmark"></span>
                            <span class="c-fw--bd">時間指定見守り（C円/1時間当たり）</span><br>
                            見守りを依頼する際に、見守りを行ってほしい時間帯を1時間単位で指定いただきます。希望される時間帯を集中的に見守りを行い、報告レポートとしてまとめます。
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 備考
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="4" class="form-edit__textarea h178" placeholder="弊社スタッフによる見守りの際に重点的に見てほしい事項などございましたらご記入ください。"></textarea>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont" style="display: none;">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            （例）<br>
                            サポーターさんと子どもがどのような雰囲気で家の中で過ごしているのかが気になります。何をして遊んでいたか、子どもが楽しんでいる様子が見えたか、レポートに記載をお願いしたいです。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <h3 class="quote-list__ttl">カメラレンタルについて</h3>
                  <h4 class="questions-box__ttl">カメラレンタルについて</h4>
                  <div class="rental-camera">
                    <div class="rental-camera__img"><img src="@/assets/guardian/img/U020-2/img-01.png" alt="レンタルカメラ" width="122"></div>
                    <div class="rental-camera__box">
                      <div class="rental-camera__fee">
                        <p class="rental-camera__ttl">レンタル料無料</p>
                        <p>往復送料のみユーザー負担<br>（約00円</p>
                      </div>
                      <p class="rental-camera__spec">
                        EZVIZ400万画素見守りカメラ C6W <br>
                        動体検知 自動追跡<br>
                        自動ズーム機能搭載<br>
                        アレクサ対応
                      </p>
                    </div>
                  </div>
                  <h4 class="questions-box__ttl">レンタルカメラ発送先</h4>
                  <p class="c-txt__01">
                    ・カメラはご登録のご自宅へ発送いたします。<br>
                    ・カメラはサポート予約日の3日前までの到着を予定しております。<br>
                    ・レンタル料は無料です。<a href="https://www.kids-parks.com/faq/camera-5/265/" target="_blank">往復送料</a>のみユーザー負担となります。
                  </p>
                  <p class="rental-camera__shipping-address"><span>発送先</span>京都〇〇〇〇〇〇〇〇1-101</p>
                  <h5 class="rental-camera__ttl02">レンタルカメラについての注意事項（必読ください）</h5>
                  <div class="rental-camera__note">
                    <h4 class="rental-camera__note-ttl js-show-accs">カメラ・アプリに関して</h4>
                    <p class="c-txt__01 js-ct-accs">
                      ・アカウントは弊社で作成し、ID/パスワードを同封して発送いたします。ID/パスワードは変更せずにご利用ください。<br>
                      ・カメラへのWi-Fiの紐付けはユーザーご自身で行っていただきます。<br>
                      ・見守りカメラはWi-Fiまたは有線を使用します。ご自宅にインターネット回線がない場合ご利用いただけません。※Wi-Fiは2.4GHzのみ対応。Wi-Fi6およびWPA3には対応していません<br>
                      ・ダウンロードしていただくEZVIZアプリは、iOS 6.0以降、Android 4.0以降と互換性があります。これらのバージョン以降のデバイスがない場合ご利用いただけません。<br>
                      ・シニア向けスマートフォンではご利用頂けない場合がございます。
                    </p>
                  </div>
                  <div class="rental-camera__note">
                    <h4 class="rental-camera__note-ttl js-show-accs">返却に関して</h4>
                    <p class="c-txt__01 js-ct-accs">
                      ・返送期日はマイページのダッシュボード、左下に記載され、いつでもご確認いただけます。<br>
                      ・サポート終了日より3日以内に返送をお願いします。<br>
                      　※以降に他の予約が入っている場合、”最後のサポート予約日から3日以内”に返送期限が延長されます。<br>
                      　※予約がキャンセルされ、すでにレンタルカメラが届いている場合は、その日から3日以内に返送してください。<br>
                      　※定期予約が1つでも稼働中の場合は、定期予約の最終日より3日以内に返送をお願いします。<br>
                      ・レンタルカメラと共に返送用の伝票を同封します。届いた時と同じ箱に入れて返送してください。
                    </p>
                  </div>
                </div>
              </div>
              <div class="js-ctcheck is-open " id="form-edit__03">
                <div class="quote-list__item">
                  <h3 class="quote-list__ttl">カメラレンタルについて</h3>
                  <h4 class="questions-box__ttl">カメラレンタルについて</h4>
                  <div class="rental-camera">
                    <div class="rental-camera__img"><img src="@/assets/guardian/img/U020-2/img-01.png" alt="レンタルカメラ" width="122"></div>
                    <div class="rental-camera__box">
                      <div class="rental-camera__fee">
                        <p class="rental-camera__ttl">レンタル料無料</p>
                        <p>往復送料のみユーザー負担<br>（約00円</p>
                      </div>
                      <p class="rental-camera__spec">
                        EZVIZ400万画素見守りカメラ C6W <br>
                        動体検知 自動追跡<br>
                        自動ズーム機能搭載<br>
                        アレクサ対応
                      </p>
                    </div>
                  </div>
                  <h4 class="questions-box__ttl">レンタルカメラ発送先</h4>
                  <p class="c-txt__01">
                    ・カメラはご登録のご自宅へ発送いたします。<br>
                    ・カメラはサポート予約日の3日前までの到着を予定しております。<br>
                    ・レンタル料は無料です。<a href="https://www.kids-parks.com/faq/camera-5/265/" target="_blank">往復送料</a>のみユーザー負担となります。
                  </p>
                  <p class="rental-camera__shipping-address"><span>発送先</span>京都〇〇〇〇〇〇〇〇1-101</p>
                  <h5 class="rental-camera__ttl02">レンタルカメラについての注意事項（必読ください）</h5>
                  <div class="rental-camera__note">
                    <h4 class="rental-camera__note-ttl js-show-accs">カメラ・アプリに関して</h4>
                    <p class="c-txt__01 js-ct-accs">
                      ・アカウントは弊社で作成し、ID/パスワードを同封して発送いたします。ID/パスワードは変更せずにご利用ください。<br>
                      ・カメラへのWi-Fiの紐付けはユーザーご自身で行っていただきます。<br>
                      ・見守りカメラはWi-Fiまたは有線を使用します。ご自宅にインターネット回線がない場合ご利用いただけません。※Wi-Fiは2.4GHzのみ対応。Wi-Fi6およびWPA3には対応していません<br>
                      ・ダウンロードしていただくEZVIZアプリは、iOS 6.0以降、Android 4.0以降と互換性があります。これらのバージョン以降のデバイスがない場合ご利用いただけません。<br>
                      ・シニア向けスマートフォンではご利用頂けない場合がございます。
                    </p>
                  </div>
                  <div class="rental-camera__note">
                    <h4 class="rental-camera__note-ttl js-show-accs">返却に関して</h4>
                    <p class="c-txt__01 js-ct-accs">
                      ・返送期日はマイページのダッシュボード、左下に記載され、いつでもご確認いただけます。<br>
                      ・サポート終了日より3日以内に返送をお願いします。<br>
                      　※以降に他の予約が入っている場合、”最後のサポート予約日から3日以内”に返送期限が延長されます。<br>
                      　※予約がキャンセルされ、すでにレンタルカメラが届いている場合は、その日から3日以内に返送してください。<br>
                      　※定期予約が1つでも稼働中の場合は、定期予約の最終日より3日以内に返送をお願いします。<br>
                      ・レンタルカメラと共に返送用の伝票を同封します。届いた時と同じ箱に入れて返送してください。
                    </p>
                  </div>
                </div>
              </div>
              <div class="js-ctcheck is-open " id="form-edit__04">
                <div class="quote-list__item">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 弊社スタッフによる<br>見守り内容 <small class="required">※</small></div>
                    <div class="quote-list__fee-ct">
                      <ul class="form_block js-tabcheckbox">
                        <li class="form-check__item">
                          <label class="form-edit__radio_02">
                            <input type="radio" name="staff-watch01" checked="checked" value="依頼をしない">
                            <span class="checkmark"></span>
                            <span class="c-fw--bd">全時間見守り（A円/1時間当たり）</span><br>
                            サポート時間中すべての時間において弊社スタッフにより見守りを行い、報告レポートとしてまとめます。
                          </label>
                        </li>
                        <li class="form-check__item">
                          <label class="form-edit__radio_02">
                            <input type="radio" name="staff-watch01" value="依頼をしない">
                            <span class="checkmark"></span>
                            <span class="c-fw--bd">ランダム見守り<br>（〜3時間までB円／3時間〜6時間までB円／6時間〜9時間　  B円／9時間以降1時間当たりB円）</span><br>
                            弊社スタッフの見守りはサポート時間内において1時間間隔で5分〜10分集中的に見守り、報告レポートとしてまとめます。
                          </label>
                        </li>
                        <li class="form-check__item">
                          <label class="form-edit__radio_02">
                            <input type="radio" name="staff-watch01" value="依頼をしない">
                            <span class="checkmark"></span>
                            <span class="c-fw--bd">時間指定見守り（C円/1時間当たり）</span><br>
                            見守りを依頼する際に、見守りを行ってほしい時間帯を1時間単位で指定いただきます。希望される時間帯を集中的に見守りを行い、報告レポートとしてまとめます。
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="quote-list__fee">

                    <div class="quote-list__fee-item quote-list__fee-item--add quote-list__fee-item--start">

                      <div class="quote-list__fee-ct quote-list__fee-ct02">
                        <div class="form-add js-add-form01">時間を追加する</div>
                        <div class="quote-list__fee-add">
                          <div class="quote-list__fee-form quote-list__fee-form01" style="display: flex;">
                            <div class="quote-list__fee-select">
                              <div class="quote-list__date-item">
                                <exeo-select-hour class-name="time-first-last" value="12時"></exeo-select-hour>
                              </div>
                              <div class="quote-list__date-item">
                                <div class="form_part_select">
                                  <exeo-select-minute class-name="time-first-min" value="00"></exeo-select-minute>
                                </div>
                              </div>
                            </div>
                            <span>〜</span>
                            <div class="quote-list__fee-select">
                              <div class="quote-list__date-item">
                                <div class="form_part_select">
                                  <exeo-select-hour class-name="time-last" value="12時"></exeo-select-hour>
                                </div>
                              </div>
                              <div class="quote-list__date-item">
                                <div class="form_part_select">
                                  <exeo-select-minute class-name="time-last-min" value="00"></exeo-select-minute>
                                </div>
                              </div>
                            </div>
                            <button type="submit" class="c-btn__07 js-send-result01">保存</button>
                          </div>
                          <div class="quote-list__fee-remove quote-list__fee-remove01" style="display: none;">
                            <p class="result-txt">
                              <span id="time-first"></span>
                              <span id="time-first-min"></span>
                              〜
                              <span id="time-last"></span>
                              <span id="time-last-min"></span>
                            </p>
                            <ul class="btn-list">
                              <li class="btn-list__item">
                                <button type="submit" class="c-btn__07 c-btn__07--gray js-edit-result01">編集</button>
                              </li>
                              <li class="btn-list__item">
                                <button type="submit" class="c-btn__07 c-btn__07--red js-remove-result01">削除</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 使用カメラ</div>
                    <div class="quote-list__fee-ct">カメラのレンタルのみ申請する</div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 商品名</div>
                    <div class="quote-list__fee-ct">EZVIZ</div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 型番</div>
                    <div class="quote-list__fee-ct">C6W</div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 備考
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="4" class="form-edit__textarea h178" placeholder="弊社スタッフによる見守りの際に重点的に見てほしい事項などございましたらご記入ください。"></textarea>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont" style="display: none;">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            （例）<br>
                            サポーターさんと子どもがどのような雰囲気で家の中で過ごしているのかが気になります。何をして遊んでいたか、子どもが楽しんでいる様子が見えたか、レポートに記載をお願いしたいです。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rental-camera__note">
                    <p class="c-txt__01">
                      ・ID、PWをお客様ご自身で作成している場合は、<span class="c-fw--sbd">user@kids-parks.com</span>へ招待メールをお送りください。その際、ユーザーからの招待と判別できるよう、アカウント名などを備考へご記入ください。<br>
                      ・弊社でご用意したID、PWをお持ちのユーザーはアカウント情報は変更しないでください。
                    </p>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 使用カメラ</div>
                    <div class="quote-list__fee-ct">ご自身でお持ちのカメラで見守ります</div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 商品名</div>
                    <div class="quote-list__fee-ct"><input type="text" placeholder="（例）EZVIZ" class="form-edit__input"></div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 型番</div>
                    <div class="quote-list__fee-ct"><input type="text" placeholder="（例）C6W" class="form-edit__input"></div>
                  </div>
                </div>
                <div class="quote-list__item">
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> 備考
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea name="" cols="30" rows="4" class="form-edit__textarea h178" placeholder="弊社スタッフによる見守りの際に重点的に見てほしい事項などございましたらご記入ください。"></textarea>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                        <div class="c-example__cont js-acc-cont" style="display: none;">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            （例）<br>
                            メールアドレスへ招待メールをお送りしますので、メールに記載されているアプリをダウンロードしていただき、閲覧用のアカウントを作成していただければカメラにアクセスしていただけます。<br><br>
                            （例）<br>
                            サポーターさんと子どもがどのような雰囲気で家の中で過ごしているのかが気になります。何をして遊んでいたか、子どもが楽しんでいる様子が見えたか、レポートに記載をお願いしたいです。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rental-camera__note">
                    <p class="c-txt__01">
                      メールアドレスへ招待を送る場合は、<span class="c-fw--sbd">user@kids-parks.com</span>へ招待メールをお送りください。その際、ユーザーからの招待と判別できるよう、アカウント名などを備考へご記入ください。
                    </p>
                  </div>
                </div>
              </div>
              <a href="./U022.html" class="btn_entry mw-335">次へ進む</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3"></guardian-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from '@/components/block/QuestionBox.vue';
import ExeoSelectMinute from "@/components/action/ExeoSelectMinute";
import ExeoSelectHour from "@/components/action/ExeoSelectHour";
export default {
  components: {ExeoSelectMinute, ExeoSelectHour, GuardianRightMenu, QuestionBox },
  layout: 'guardian',
  data() {
    return {
      questions: [
        {
          'name': '見守りカメラについて',
          'url': '',
        },
        {
          'name': '見守り依頼とは',
          'url': 'https://www.kids-parks.com/faq/camera-2/212/',
        },
        {
          'name': '見守り依頼で使用できるカメラ',
          'url': 'https://www.kids-parks.com/faq/camera-3/218/',
        },
        {
          'name': '見守りカメラをレンタル・購入したい',
          'url': 'https://www.kids-parks.com/faq/camera-4/220/',
        }
      ]
    }
  }
}
</script>
