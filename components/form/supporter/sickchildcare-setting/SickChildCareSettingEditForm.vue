<template>
  <div class="l-content">
    <div class="l-content__body">
      <h2 class="c-ttl__02 mbpc-33 mbsp-25">病児保育設定</h2>
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
                      v-model.number="form.single_fee"
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
                      v-model="form.regular_fee"
                      type="text"
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
                <input
                  v-model="form.special"
                  type="text"
                  placeholder="（例）初回のみ1000円割引いたします。"
                  class="form-edit__input mbpc-15 mbsp-15"
                />
                <div class="request-form__ct-right">
                  <div
                    class="c-example__button js-btn-acc"
                    :class="{ 'is-close': showingTooltip[0] }"
                    @click.prevent="toggleTT(0)"
                  >
                    <span>入力例</span>
                  </div>
                  <div
                    class="c-example__cont js-acc-cont"
                    :class="{ 'is-show': showingTooltip[0] }"
                    v-show="showingTooltip[0]"
                  >
                    <span
                      class="c-example__close js-acc-close"
                      @click.prevent="toggleTT(0)"
                    >×</span
                    >
                    <p class="c-txt__01">
                      (例)<br/>初めてご利用される保護者者には、初回特典として利用料金の割引をさせていただきます。また、初回サポート完了後48時間以内に次のご予約をいただいた場合、次回ご利用時間ごとの料金を割り引かせていただきます。<br/>(例)<br/>お子様の誕生月にご予約頂いた場合、ご利用時間ごとに料金を割引させていただきます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。また、初めてサポートに入らせていただくスタッフの場合、事前面談料（1000円/1時間＋交通費）を無料とさせていただきます。
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
                  v-model="form.service"
                  cols="30"
                  rows="10"
                  class="form-edit__textarea h170"
                  placeholder="サービス内容の詳細を入力してください。入力の内容が不明ば場合は入力例を参考にしてください。"
                ></textarea>
                <div class="request-form__ct-right">
                  <div
                    class="c-example__button js-btn-acc"
                    :class="{ 'is-close': showingTooltip[1] }"
                    @click.prevent="toggleTT(1)"
                  >
                    <span>入力例</span>
                  </div>
                  <div
                    class="c-example__cont js-acc-cont"
                    :class="{ 'is-show': showingTooltip[1] }"
                    v-show="showingTooltip[1]"
                  >
                    <span
                      class="c-example__close js-acc-close"
                      @click.prevent="toggleTT(1)"
                    >×</span
                    >
                    <p class="c-txt__01">
                      (例)<br/>大学病院の小児科、NICUに自身の出産時まで勤め、産後は小児科クリニック、保育看護師として看護師経験を積んでいるため、お子さんの急な発熱でお困りの保護者の方のお役に立てます。また、妊娠出産、子育てに関する悩みへのサポートも可能です。<br/>・病児、病後児、ともに可能<br/>・発熱、気道症状、胃腸症状<br/>・感染以外の喘息、皮疹症状<br/>・感染症（インフルエンザ、水ぼうそう等）<br/>・通院前のため未診断の症状　など看護、保育<br/>(例)<br/>産褥シッター、病児保育、企業内託児所、障がい児保育の経験があり、整理収納アドバイザーの資格をはじめ掃除や片付けの資格を取得しているため、病児保育のベビーシッターとともにお子さんの生活環境を整えるための家事のサポートを行えます。<br/>・病児、病後児、ともに相談可<br/>・発熱、気道症状、胃腸症状<br/>・離乳食・幼児食調理、食事介助<br/>・沐浴、入浴介助<br/>・抱っこ、ベビーマッサージ、遊び、オムツ替えなど基本的なお世話<br/>・産前産後の生活に伴うケア
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- TODO: 2月のリリースの後
      <h2 class="c-ttl__02 mbpc-31">オプション設定</h2>
      <hr class="hr mbpc-15 mbsp-13"/>
      <div class="quote-list quote-list--02 quote-list--03">
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">その他の設定</div>
              <div class="quote-list__fee-ct quote-list__fee-ct03">
                <div class="form-add js-add-form03">オプションを追加する</div>
                <div class="quote-list__fee-note mtpc-21 mtsp-21">
                  産前産後のオプション設定は任意です。<br/>
                  （例）沐浴 500円/1回あたり
                </div>
              </div>
              <div class="quote-list__fee-add">
                <div
                  class="quote-list__fee-form quote-list__fee-form--02 quote-list__fee-form03"
                >
                  <div class="quote-list__fee-inputxt">
                    <input
                      type="text"
                      class="form-edit__input desc-form"
                      placeholder="オプションを入れてください"
                    />
                  </div>
                  <div class="quote-list__fee-input">
                    <input
                      type="text"
                      class="form-edit__input day-form"
                      placeholder="（例）1800"
                    />
                    <span>円</span>
                  </div>
                  <div class="form_part_select form_part_select--02">
                    <select class="hour-form">
                      <option value="1時間あたり">1時間あたり</option>
                      <option value="一回あたり">一回あたり</option>
                    </select>
                  </div>
                  <button type="submit" class="c-btn__07 js-send-result03">
                    保存
                  </button>
                </div>
                <div class="quote-list__fee-remove quote-list__fee-remove03">
                  <p class="result-txt">
                    <span id="desc-form"></span>　<span id="day-form"></span
                  >円/<span id="hour-form"></span>
                  </p>
                  <ul class="btn-list">
                    <li class="btn-list__item">
                      <button
                        type="submit"
                        class="c-btn__07 c-btn__07--gray js-edit-result03"
                      >
                        編集
                      </button>
                    </li>
                    <li class="btn-list__item">
                      <button
                        type="submit"
                        class="c-btn__07 c-btn__07--red js-remove-result03"
                      >
                        削除
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="c-ttl__02 mbpc-31">対応可能設定</h2>
      <hr class="hr mbpc-15"/>
      <div class="quote-list quote-list--02 quote-list--03">
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
                  placeholder="サービス内容の詳細を入力してください。入力の内容が不明ば場合は入力例を参考にしてください。"
                ></textarea>
                <div class="request-form__ct-right">
                  <div
                    class="c-example__button js-btn-acc"
                    :class="{ 'is-close': showingTooltip[2] }"
                    @click.prevent="toggleTT(2)"
                  >
                    <span>入力例</span>
                  </div>
                  <div
                    class="c-example__cont js-acc-cont"
                    :class="{ 'is-show': showingTooltip[2] }"
                    v-show="showingTooltip[2]"
                  >
                    <span
                      class="c-example__close js-acc-close"
                      @click.prevent="toggleTT(2)"
                    >×</span
                    >
                    <p class="c-txt__01">
                      (例)<br/>病児、病後児、ともに状況を伺った上で受け入れ可能です。公共交通機関、または車でのお伺いになります。10キロ以内であれば一律500円の交通費をお願いします。ペットの種類によってはアレルギーがありますので事前にお伝えください。<br/>(例)<br/>病児、病後児はすべて通院、診断済みの場合に限ります。
                      インフルエンザや水ぼうそうなど皮膚症状、感染症の場合はお引き受けできません。公共交通機関を使っての移動となるため時間に余裕をもって前後2時間を開けています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
      <button type="submit" class="btn_entry mw-335" @click.prevent="submit">
        保存する
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SickChildCareSettingEditForm",
  props: {
    setting: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {},
      showingTooltip: [false, false, false],
    };
  },
  methods: {
    toggleTT(ithTooltip) {
      this.$set(this.showingTooltip, ithTooltip, !this.showingTooltip[ithTooltip]);
    },
    submit() {
      this.$emit("submit", this.form);
    },
  },
  created() {
    this.form = this.setting;
  },
};
</script>

<style scoped></style>
