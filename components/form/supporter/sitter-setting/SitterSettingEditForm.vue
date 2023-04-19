<template>
  <div class="l-content">
    <div class="l-content__body">
      <h2 class="c-ttl__02 mbpc-33 mbsp-25">シッター設定</h2>
      <hr class="hr mbpc-19 mbsp-13"/>
      <div class="quote-list quote-list--02 quote-list--03">
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">単発予約料金</div>
              <div class="quote-list__fee-ct">
                <div class="quote-list__fee-row">
                  <div class="quote-list__fee-input">
                    <input
                      type="text"
                      v-model="form.single_fee"
                      class="form-edit__input"
                      placeholder="（例）1800"
                    />
                    <span>円／1時間あたり</span>
                  </div>
                  <a
                    class="c-example__button c-example__button--mgl"
                    href="https://stg.kids-parks.com/faq/price/85/"
                    target="_blank"
                  ><span>時給設定のコツ</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">定期予約料金</div>
              <div class="quote-list__fee-ct">
                <div class="quote-list__fee-row">
                  <div class="quote-list__fee-input">
                    <input
                      type="text"
                      v-model="form.regular_fee"
                      class="form-edit__input"
                      placeholder="（例）1800"
                    />
                    <span>円／1時間あたり</span>
                  </div>
                  <a
                    class="c-example__button c-example__button--mgl"
                    href="https://stg.kids-parks.com/faq/about/88/"
                    target="_blank"
                  ><span>定期予約と単発予約とは</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">特典設定</div>
              <div class="quote-list__fee-ct">
                <textarea
                  name=""
                  v-model="form.special"
                  cols="30"
                  rows="10"
                  class="form-edit__textarea"
                  placeholder="（例）初回のみ1000円割引いたします。"
                ></textarea>
                <div class="request-form__ct-right">
                  <div class="c-example__button js-btn-acc">
                    <span>入力例</span>
                  </div>
                  <div class="c-example__cont js-acc-cont">
                    <span class="c-example__close js-acc-close">×</span>
                    <p class="c-txt__01">
                      (例)<br/>初めてご利用される保護者の方には、初回特典として利用料金の割引をさせていただきます。また、初回サポート完了後48時間以内に次のご予約をいただいた場合、次回ご利用時間ごとの料金を割り引かせていただきます。<br/>(例)<br/>お子様の誕生月にご予約頂いた場合、ご利用時間ごとに料金を割引させていただきます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。
                      <br/>また、初めてサポートに入らせていただくスタッフの場合、事前面談料（1000円/1時間＋交通費）を無料とさせていただきます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">サービス説明</div>
              <div class="quote-list__fee-ct">
                <textarea
                  name=""
                  v-model="setting.service"
                  cols="30"
                  rows="10"
                  class="form-edit__textarea"
                  placeholder="サービス内容の詳細を入力してください。入力の内容が不明ば場合は入力例を参考にしてください。"
                ></textarea>
                <div class="request-form__ct-right">
                  <div class="c-example__button js-btn-acc">
                    <span>入力例</span>
                  </div>
                  <div class="c-example__cont js-acc-cont">
                    <span class="c-example__close js-acc-close">×</span>
                    <p class="c-txt__01">
                      (例)<br/>安心して依頼していただけるよう、サポートは安全を最優先して対応しています。<br/>子どもの自主性を大切にしたサポートを心がけています。<br/>とにかく子供が大好きです。一緒にいる時間をいつも楽しく笑顔でサポートしてまいります。<br/>　●ご自宅での遊び<br/>　●オムツ替え、トイレ介助<br/>　●入浴介助<br/>　●おさんぽ　など<br/><br/>(例)<br/>保護者の方のリフレッシュのためにベビーシッターをご利用されるのはいかがでしょうか。保育施設のお迎えやお食事、入浴、遊び相手などをご依頼いただければ帰宅後のバタバタから開放されます。<br/>・お家での遊び相手<br/>・おさんぽ<br/>・お食事介助<br/>・沐浴、入浴補助<br/>・保育施設の送迎　など
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">受入可能人数</div>
              <div class="quote-list__fee-ct">
                <div class="quote-list__fee-input">
                  <input
                    type="text"
                    v-model="form.potential_entrant"
                    class="form-edit__input"
                    placeholder="（例）1"
                  />
                  <span>人</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">保育可能年齢</div>
              <div class="quote-list__fee-ct">
                <div
                  class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0"
                >
                  <span>{{ ageText }}</span>
                  保育可能年齢はサポーター自身の今までの職歴や実績を加味して本部が設定いたします。
                  <!-- 保育可能年齢はサポーター自身の今までの職歴や実績を加味して本部が設定いたします。<br/>保育可能年齢を変更したい方は下記より申請してください。<br/> -->
                  <a
                    href="https://stg.kids-parks.com/faq/shinsei/91/"
                    target="_blank"
                  >保育可能年齢を変更するには？</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="c-ttl__02 mbpc-31">オプション設定</h2>
      <hr class="hr mbpc-15 mbsp-13" />
      <div class="quote-list quote-list--02 quote-list--03">
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl mbsp-4">保育人数</div>
              <div class="quote-list__fee-ct quote-list__fee-ct01">
                <div class="form-add" @click="option.number.show = true">オプションを追加する</div>
                <div class="quote-list__fee-add" v-show="option.number.show">
                  <div class="quote-list__fee-form">
                    <div class="quote-list__fee-keep">
                      <div class="quote-list__fee-input">
                        <input type="number" min="0" class="form-edit__input option" name="option" placeholder="（例）2" v-model="option.number.content"/>
                        <span>人</span>
                      </div>
                      <p>預かる場合</p>
                    </div>
                    <div class="quote-list__fee-input">
                      <input type="number" class="form-edit__input price" name="price" placeholder="（例）500" v-model="option.number.fee"/>
                      <span>円／1時間あたり</span>
                    </div>
                    <button @click="addOption(0)" class="c-btn__07">
                      保存
                    </button>
                  </div>
                </div>
                <div class="quote-list__fee-add" v-for="(number,index) in number_of_persons" :key="index">
                  <div class="quote-list__fee-remove" style="display:flex;">
                    <p class="result-txt">
                      <span id="option">{{number.option_content}}</span>人預かる場合　+<span id="price">{{number.additional_fee}}</span>円/1時間あたり
                    </p>
                    <ul class="btn-list">
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--gray" @click="editOption(index, 0)">編集</button>
                      </li>
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--red" @click="deleteOption(index, 0)">削除</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0">
                  保育人数のオプション設定は任意です。受け入れ可能人数を3人に設定している場合、2人預かる場合と3人預かる場合それぞれに料金を設定できます。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">保育時間帯</div>
              <div class="quote-list__fee-ct quote-list__fee-ct02">
                <div class="form-add" @click="option.time.show = true">オプションを追加する</div>
                <div class="quote-list__fee-add" v-show="option.time.show">
                  <div class="quote-list__fee-form">
                    <div class="quote-list__fee-select">
                      <div class="form_part_select">
                        <select class="time-first" v-model="option.time.content_start">
                          <option v-for="time in time_options" :key="time.value" :value="time.value">{{time.label}}</option>
                        </select>
                      </div>
                      <span>〜</span>
                      <div class="form_part_select">
                        <select class="time-last" v-model="option.time.content_end">
                          <option v-for="time in time_options" :key="time.value" :value="time.value">{{time.label}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="quote-list__fee-input">
                      <input type="number" class="form-edit__input time-day" placeholder="（例）200" v-model="option.time.fee"/>
                      <span>円／1時間あたり</span>
                    </div>
                    <button type="button" class="c-btn__07" @click="addOption(2)">保存</button>
                  </div>
                </div>
                <div class="quote-list__fee-add" v-for="(option_time, index) in sitting_time" :key="index">
                  <div class="quote-list__fee-remove" style="display: flex">
                    <p class="result-txt">
                      <span id="time-first">{{option_time.option_content.split(',')[0]}}時</span>〜
                      <span id="time-last">{{option_time.option_content.split(',')[1]}}時</span>は+<span id="time-day">{{option_time.additional_fee}}</span>円/1時間あたり
                    </p>
                    <ul class="btn-list">
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--gray" @click="editOption(index, 2)">編集</button>
                      </li>
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--red" @click="deleteOption(index, 2)">削除</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0">
                  保育時間帯のオプション設定は任意です。早朝や夜間の受け入れを行う場合など、時間帯別に料金を設定できます。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">その他の設定</div>
              <div class="quote-list__fee-ct quote-list__fee-ct03">
                <div class="form-add" @click="option.other.show = true">オプションを追加する</div>
                <div class="quote-list__fee-add" v-show="option.other.show">
                  <div class="quote-list__fee-form">
                    <div class="quote-list__fee-inputxt">
                      <input type="text" class="form-edit__input desc-form" placeholder="オプションを入れてください" v-model="option.other.content"/>
                    </div>
                    <div class="quote-list__fee-input">
                      <input type="number" class="form-edit__input day-form" placeholder="（例）1800" v-model="option.other.fee"/>
                      <span>円</span>
                    </div>
                    <div class="form_part_select form_part_select--02">
                      <select class="hour-form" v-model="option.other.unit">
                        <option :value="0">1時間あたり</option>
                        <option :value="1">一回あたり</option>
                      </select>
                    </div>
                    <button @click="addOption(3)" class="c-btn__07">保存</button>
                  </div>
                </div>
                <div class="quote-list__fee-add" v-for="(option_other,index) in other" :key="index">
                  <div class="quote-list__fee-remove" style="display:flex;">
                    <p class="result-txt">
                      <span id="option">{{option_other.option_content}}</span>　+<span id="price">{{option_other.additional_fee}}</span>円/{{option_other.unit==0 ? '1時間あたり' : '1回あたり'}}
                    </p>
                    <ul class="btn-list">
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--gray" @click="editOption(index, 3)">編集</button>
                      </li>
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--red" @click="deleteOption(index, 3)">削除</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0">
                  その他のオプション設定は任意です。<br />
                  （例）祝日のご予約 ＋500円/1時間あたり<br />
                  　　　英語レッスン 500円/1回あたり<br />
                  　　　当日予約
                  ＋200円/1時間あたり　などご自分で設定いただけます。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="c-ttl__02 mbpc-31">対応可能設定</h2>
      <hr class="hr mbpc-15" />
      <div class="quote-list quote-list--02 quote-list--03">
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">お子様の撮影対応</div>
              <div class="quote-list__fee-ct">
                <div class="c-control__02 mbpc-15 mbsp-15">
                  <label class="form-edit__radio"><input type="radio" name="radio5" v-model="support_form.shooting_support" :value="1"/><span>撮影する</span></label>
                  <label class="form-edit__radio"><input type="radio" name="radio5" v-model="support_form.shooting_support" :value="0"/><span>撮影しない</span></label>
                </div>
                <div class="quote-list__fee-note mbpc-0 mbsp-0">
                  撮影するに設定していたとしても、ユーザーから依頼があった場合以外の撮影は禁止されておりますのでご注意ください。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">受け入れ条件</div>
              <div class="quote-list__fee-ct">
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  class="form-edit__textarea h153"
                  placeholder="受け入れ条件"
                  v-model="support_form.acceptance_condition"
                ></textarea>
                <div class="request-form__ct-right">
                  <div class="c-example__button js-btn-acc">
                    <span>入力例</span>
                  </div>
                  <div class="c-example__cont js-acc-cont">
                    <span class="c-example__close js-acc-close">×</span>
                    <p class="c-txt__01">
                      (例)<br />短時間から長時間まで柔軟に対応します。<br />1歳からのお子さんをサポートいたします。<br />最低時間は1時間からでお願いいたします。<br />当日サポート予約もできる限り対応させて頂きます。<br />アレルギー体質のため、ペットお飼いの場合お申し付けお願いいたします。場合によって引き受けお断りすることございますのでご了承ください。<br /><br />(例)<br />より多くのリクエストにお応えできるよう、サポーター自宅から1時間以内の方を優先でお引き受けしております。<br /><br />（例）<br />0歳6ヶ月から5歳までのお子さんのシッターをお引き受けしております。
                      <br />ご自宅以外でのサポートの場合は事前にご連絡をお願いします。<br />基本は自家用車で、ご利用料金に交通費をプラスして頂戴いたします。<br />駐車場に関して、有料駐車場使用の場合は、利用時間分を頂戴いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">対応可能サービス</div>
              <div class="quote-list__fee-ct">
                <div class="quote-list__option">
                  <p class="quote-list__option-ttl">送迎サポート（送迎のみ）</p>
                  <div class="quote-list__option-ct">
                    <div class="c-control__02">
                      <label class="form-edit__radio"><input type="radio" name="radio1" v-model="support_form.transportation_support" :value="1"/><span>対応する</span></label>
                      <label class="form-edit__radio"><input type="radio" name="radio1" v-model="support_form.transportation_support" :value="0"/><span>対応しない</span></label>
                    </div>
                  </div>
                </div>
                <div class="quote-list__option">
                  <p class="quote-list__option-ttl">早期対応</p>
                  <div class="quote-list__option-ct">
                    <div class="quote-list__fee-select">
                      <div class="form_part_select">
                        <select v-model="support_form.early_response_lower_limit">
                          <option :value="null">– –</option>
                          <option :value="6">6時</option>
                          <option :value="7">7時</option>
                          <option :value="8">8時</option>
                        </select>
                      </div>
                      <span>〜</span>
                      <div class="form_part_select">
                        <select v-model="support_form.early_response_upper_limit">
                          <option :value="null">– –</option>
                          <option :value="7">7時</option>
                          <option :value="8">8時</option>
                          <option :value="9">9時</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__option">
                  <p class="quote-list__option-ttl">夜間対応（20-24時）</p>
                  <div class="quote-list__option-ct">
                    <div class="quote-list__fee-select">
                      <div class="form_part_select">
                        <select v-model="support_form.nighttime_lower_limit">
                          <option :value="null">– –</option>
                          <option :value="20">20時</option>
                          <option :value="21">21時</option>
                          <option :value="22">22時</option>
                          <option :value="23">23時</option>
                        </select>
                      </div>
                      <span>〜</span>
                      <div class="form_part_select">
                        <select v-model="support_form.nighttime_upper_limit">
                          <option :value="null">– –</option>
                          <option :value="21">21時</option>
                          <option :value="22">22時</option>
                          <option :value="23">23時</option>
                          <option :value="24">24時</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__option">
                  <p class="quote-list__option-ttl">お泊り保育（0時以降）</p>
                  <div class="quote-list__option-ct">
                    <div class="quote-list__fee-select">
                      <div class="form_part_select">
                        <select v-model="support_form.overnight_care_lower_limit">
                          <option :value="null">– –</option>
                          <option :value="24">0時</option>
                          <option :value="1">1時</option>
                          <option :value="2">2時</option>
                          <option :value="3">3時</option>
                          <option :value="4">4時</option>
                          <option :value="5">5時</option>
                        </select>
                      </div>
                      <span>〜</span>
                      <div class="form_part_select">
                        <select v-model="support_form.overnight_care_upper_limit">
                          <option :value="null">– –</option>
                          <option :value="1">1時</option>
                          <option :value="2">2時</option>
                          <option :value="3">3時</option>
                          <option :value="4">4時</option>
                          <option :value="5">5時</option>
                          <option :value="6">6時</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quote-list__option">
                  <p class="quote-list__option-ttl">外国籍ユーザー対応可能</p>
                  <div class="quote-list__option-ct">
                    <div class="c-control__02">
                      <label class="form-edit__radio"><input type="radio" name="radio4" v-model="support_form.is_foreign_user_support" :value="1"/><span>対応する</span></label>
                      <label class="form-edit__radio"><input type="radio" name="radio4" v-model="support_form.is_foreign_user_support" :value="0"/><span>対応しない</span></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">障がい児対応</div>
              <div class="quote-list__fee-ct">
                <div
                  class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0"
                >
                  <a href="P055.html" target="_blank">障がい児対応申請をする</a
                  ><br />
                  障がい児対応をご希望の場合は、障がい児対応申請を提出してください。<br />資格の有無や選考内容によっては対応できない場合もございますのでご了承ください。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">レッスン対応</div>
              <div class="quote-list__fee-ct">
                <ul class="form-check form-check--02 form-check--04">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" :checked="support_form.lesson_support_bitflag & LESSON.ENGLISH" :value="LESSON.ENGLISH" @change="support_form.lesson_support_bitflag ^= LESSON.ENGLISH"/>
                      <span class="checkmark"></span>英語レッスン
                    </label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" :checked="support_form.lesson_support_bitflag & LESSON.MUSIC" :value="LESSON.MUSIC" @change="support_form.lesson_support_bitflag ^= LESSON.MUSIC"/>
                      <span class="checkmark"></span>音楽レッスン
                    </label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" :checked="support_form.lesson_support_bitflag & LESSON.SPORTS" :value="LESSON.SPORTS" @change="support_form.lesson_support_bitflag ^= LESSON.SPORTS"/>
                      <span class="checkmark"></span>スポーツレッスン
                    </label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" :checked="support_form.lesson_support_bitflag & LESSON.DRAWING" :value="LESSON.DRAWING" @change="support_form.lesson_support_bitflag ^= LESSON.DRAWING"/>
                      <span class="checkmark"></span>絵・工作レッスン
                    </label>
                  </li>
                </ul>
                <div class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0">
                  レッスンに料金を設定したい場合は同ページのオプション設定にて設定が可能です。
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="quote-list__item naikakufu_waribiki">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">内閣府割引券対象</div>
              <div class="quote-list__fee-ct">
                <div
                  class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0"
                >
                  <span>対象者ではありません</span>
                  内閣府割引券の対象者になるには、資格・実務回数など、いくつかの条件を満たしているか確認後、本部にて設定いたします。<br />
                  内閣府割引券の対象者になりたい方は下記より申請してください。<br />
                  <a href="">内閣府割引券対象者申請をする</a><br />
                  <a
                    href="https://www.kids-parks.com/faq/naikaku/155/"
                    target="_blank"
                    >内閣府割引券対象者になるには？</a
                  ><br />
                  <a
                    href="https://www.kids-parks.com/faq/naikaku-2/160/"
                    target="_blank"
                    >内閣府割引券とは？</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <h2 class="c-ttl__02">経験</h2>
      <hr class="hr" />
      <div class="quote-list quote-list--02 quote-list--03">
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">子育て経験</div>
              <div class="quote-list__fee-ct">
                <div class="c-control__02">
                  <label class="form-edit__radio"><input type="radio" name="radio2" v-model="experience_form.parenting_experience" :value="1"/><span>あり</span></label>
                  <label class="form-edit__radio"><input type="radio" name="radio2" v-model="experience_form.parenting_experience" :value="0"/><span>なし</span></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn_entry mw-335" @click.prevent="submit">保存する</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SitterSettingEditForm",
  props: {
    setting: {
      type: Object,
      required: true,
    },
    options: {
      type: Array,
    },
    supports: {
      type: Object
    },
    experience: {
      type: [Array,Object]
    }
  },
  data() {
    return {
      form: {},
      option_form: {},
      support_form: {},
      number_of_persons: null,
      sitting_time: null,
      other: null,
      option: {
        number: {
          show: false,
          content: null,
          fee: null
        },
        time: {
          show: false,
          content_start: 0,
          content_end: 0,
          fee: null
        },
        other: {
          show: false,
          content: null,
          fee: null,
          unit: 0
        },
      },
      LESSON: {
        ENGLISH: 1<<0,
        MUSIC: 1<<1,
        SPORTS: 1<<2,
        DRAWING: 1<<3,
      },
      experience_form: null,
      ageText:''
    }
  },
  methods: {
    submit() {
      this.option_form = this.number_of_persons.concat(this.sitting_time)
      this.option_form = this.option_form.concat(this.other)
      this.$emit('submit', {settings: this.form, options: this.option_form, supports: this.support_form, experience: this.experience_form});
    },
    addOption(type) {
      var data = {
        settings_id: 1,
        subject_type: type,
      };
      switch(type) {
        case 0: //人数
          if(this.option.number.content == null || this.option.number.fee == null) break;
          data.option_content = this.option.number.content,
          data.additional_fee = this.option.number.fee,
          data.unit = 0
          this.option.number.show = false
          this.number_of_persons.push(data)
          break;
        case 2:
          if(this.option.time.content_start == null || this.option.time.content_end == null || this.option.time.fee == null) break;
          data.option_content = this.option.time.content_start + ',' + this.option.time.content_end,
          data.additional_fee = this.option.time.fee,
          data.unit = 0
          this.option.time.show = false
          this.sitting_time.push(data)
          break;
        case 3:
          if(this.option.other.content == null || this.option.other.fee == null) break;
          data.option_content = this.option.other.content,
          data.additional_fee = this.option.other.fee,
          data.unit = this.option.other.unit
          this.option.other.show = false
          this.other.push(data)
          break;
      }
    },
    editOption(index, type) {
      switch(type) {
        case 0:
          this.option.number.show = true
          this.option.number.content = this.number_of_persons[index].option_content
          this.option.number.fee = this.number_of_persons[index].additional_fee
          this.number_of_persons.splice(index,1)
          break;
        case 2:
          this.option.time.show = true
          this.option.time.content_start = this.sitting_time[index].option_content.split(',')[0]
          this.option.time.content_end = this.sitting_time[index].option_content.split(',')[1]
          this.option.time.fee = this.sitting_time[index].additional_fee
          this.sitting_time.splice(index,1)
          break;
        case 3:
          this.option.other.show = true
          this.option.other.content = this.other[index].option_content
          this.option.other.fee = this.other[index].additional_fee
          this.option.other.unit = this.other[index].unit
          this.other.splice(index,1)
          break;
      }
    },
    deleteOption(index, type) {
      switch(type) {
        case 0:
          this.number_of_persons.splice(index,1)
          break;
        case 2:
          this.sitting_time.splice(index,1)
          break;
        case 3:
          this.other.splice(index,1)
          break;
      }
    },
  },
  created() {
    this.form = this.setting;
    this.option_form = this.options;
    this.number_of_persons = this.option_form.filter(item => item['subject_type'] === 0)
    this.sitting_time = this.option_form.filter(item => item['subject_type'] === 2)
    this.other = this.option_form.filter(item => item['subject_type'] === 3)
    this.support_form = this.supports
    this.experience_form = this.experience
    this.ageText = Math.floor(this.setting.minimum_age_limit / 12) + '歳' +
        (this.setting.minimum_age_limit % 12) + 'ヶ月〜' +
        Math.floor(this.setting.maximum_age_limit / 12) + '歳' +
        (this.setting.maximum_age_limit % 12) + 'ヶ月'
  }
};
</script>

<style scoped></style>
