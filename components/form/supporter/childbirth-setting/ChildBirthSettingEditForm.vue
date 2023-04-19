<template>
  <div class="l-content">
    <div class="l-content__body">
      <h2 class="c-ttl__02 mbpc-33 mbsp-25">産前産後設定</h2>
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
                      type="text"
                      v-model.number="form.regular_fee"
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
                  class="form-edit__textarea h86"
                  placeholder="（例）初回のみ1000円割引いたします。"
                >
                </textarea>
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
                      (例)お子様の誕生月にご予約頂いた方は時給100円引きさせて頂きます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。<br/>(例)<br/>初めてご利用される保護者の方には、初回特典として利用料金の割引をさせていただきます。また、初回サポート完了後48時間以内に次のご予約をいただいた場合、次回ご利用時間ごとの料金を割り引かせていただきます。<br/>(例)<br/>お子様の誕生月にご予約頂いた場合、ご利用時間ごとに料金を割引させていただきます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。<br/>また、初めてサポートに入らせていただくスタッフの場合、事前面談料（1000円/1時間＋交通費）を無料とさせていただきます。
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
                      (例)<br/>産前産後のお母様のケア、新生児のお子様からごきょうだいまでサポートさせていただきます。<br/>安心して依頼いただけるよう、サポートは安全を優先し、お子さんと保護者の方の気持ちに寄り添う保育を提供していきます。<br/>・つわりなどによる体調不良時や切迫早産などの安静時のサポート<br/>・完全母乳、完全ミルク、混合育児などに対するアドバイスやサポート<br/>・沐浴、入浴介助<br/>・抱っこ、ベビーマッサージ、遊び、オムツ替えなど基本的なお世話<br/>(例)<br/>産前産後の急激な体調の変化についていけないまま、新生児のお世話へと負担がかかるお母様とご家族のサポートをさせていただきます。誕生から日々成長を続けるお子さまとしっかりと向き合うためにもお母様にはゆったりとまずは身体を休ませていただきたいものです。悩みや不調に寄り添ってサポートします。<br/>・産前産後の生活に伴うケア<br/>・赤ちゃんのお世話（沐浴、授乳、抱っこ、オムツ替えなど）<br/>・上のお子さんのお世話　など
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
              <div class="quote-list__fee-ttl">産前産後オプション</div>
              <div class="quote-list__fee-ct quote-list__fee-ct03">
                <div class="form-add js-add-form03" @click.prevent="addOption">オプションを追加する</div>
                <div class="quote-list__fee-add" v-for="(option, index) in childBirthOptions">
                  <div
                    class="quote-list__fee-form quote-list__fee-form--02 quote-list__fee-form03"
                    :class="{'on': !childBirthOptions[index].showingForm}"
                    style="display: flex"
                  >
                    <div class="quote-list__fee-inputxt">
                      <input
                        type="text"
                        v-model="childBirthOptions[index].option_content"
                        class="form-edit__input desc-form"
                        placeholder="オプションを入れてください"
                      />
                    </div>
                    <div class="quote-list__fee-input">
                      <input
                        type="text"
                        v-model="childBirthOptions[index].additional_fee"
                        class="form-edit__input day-form"
                        placeholder="（例）1800"
                      />
                      <span>円</span>
                    </div>
                    <div class="form_part_select form_part_select--02">
                      <exeo-select :options="hourFormOptions" v-model="childBirthOptions[index].unit"/>
                    </div>
                    <button type="submit" class="c-btn__07 js-send-result03"
                            @click.prevent="toggleOptionForm(index, false)">
                      保存
                    </button>
                  </div>
                  <div
                    class="quote-list__fee-remove quote-list__fee-remove03"
                    v-show="!childBirthOptions[index].showingForm"
                  >
                    <p class="result-txt" :style="{'display: block;': !childBirthOptions[index].showingForm}">
                      <span id="desc-form">
                        {{ childBirthOptions[index].option_content }}
                      </span>
                      <span id="day-form">
                        {{ childBirthOptions[index].additional_fee }}
                      </span>円/<span id="hour-form">{{
                        hourFormOptions.find(x => parseInt(x.value) === parseInt(childBirthOptions[index].unit)).label
                      }}</span>
                    </p>
                    <ul class="btn-list">
                      <li class="btn-list__item">
                        <button
                          type="submit"
                          class="c-btn__07 c-btn__07--gray js-edit-result03"
                          @click.prevent="toggleOptionForm(index, true)"
                        >
                          編集
                        </button>
                      </li>
                      <li class="btn-list__item">
                        <button
                          type="submit"
                          class="c-btn__07 c-btn__07--red js-remove-result03"
                          @click.prevent="removeOption(index)"
                        >
                          削除
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="quote-list__fee-note mtpc-21 mtsp-21">
                  産前産後のオプション設定は任意です。<br/>
                  （例）沐浴 500円/1回あたり
                </div>
              </div>
            </div>
            <div class="request-form__ct-right">
              <div
                class="c-example__button js-btn-acc"
                :class="{ 'is-close': showingTooltip[0] }"
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
                  (例)<br/>●おっぱいケア　1000円　1回当たり<br/>●骨盤パーソナルケア　1500円　1時間当たり<br/>●ご家族のお食事（1食）　1000円　1回当たり<br/>など
                </p>
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
                    :class="{ 'is-close': showingTooltip[0] }"
                    @click.prevent="toggleTT(3)"
                  >
                    <span>入力例</span>
                  </div>
                  <div
                    class="c-example__cont js-acc-cont"
                    :class="{ 'is-show': showingTooltip[1] }"
                    v-show="showingTooltip[3]"
                  >
                    <span
                      class="c-example__close js-acc-close"
                      @click.prevent="toggleTT(3)"
                    >×</span
                    >
                    <p class="c-txt__01">
                      (例)<br/>新生児から5歳までのお子さんのシッターをお引き受けしております。お掃除やお買い物が必要な場合は事前にご連絡を頂ますようお願いします。本は自家用車で、ご利用料金に交通費をプラスして頂戴いたします。駐車場に関して、有料駐車場使用の場合は、利用時間分を頂戴いたします。<br/>(例)<br/>より多くのリクエストに応えられるよう、シッター自宅より一時感以内の方を優先して対応させていただきます。最低1時間から泊りがけの長時間まで柔軟に対応。当日のご依頼もできる限り対応させていただきます。ご家族のお食事の依頼の場合は事前にアレルギーや食べられないものなどをお伝えいただけると対応いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
      <button type="submit" class="btn_entry mw-335" @click.prevent="submit">保存する</button>
    </div>
  </div>
</template>

<script>
import ExeoSelect from "@/components/action/ExeoSelect.vue";

export default {
  name: "ChildBirthSettingEditForm",
  components: {
    ExeoSelect
  },
  props: {
    setting: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {},
      showingTooltip: [false, false, false, false],
      childBirthOption: {
        option_content: "",
        additional_fee: "",
        unit: 0,
        showingForm: true
      },
      childBirthOptions: [],
      // Constants
      hourFormOptions: [
        {value: 0, label: "1時間あたり"},
        {value: 1, label: "一回あたり"}
      ]
    };
  },
  methods: {
    toggleTT(ithTooltip) {
      this.$set(this.showingTooltip, ithTooltip, !this.showingTooltip[ithTooltip]);
    },
    submit() {
      this.$emit('submit', this.form);
    },
    addOption() {
      this.childBirthOptions.push({...this.childBirthOption});
    },
    toggleOptionForm(index, value) {
      let option = this.childBirthOptions[index];
      option.showingForm = value;
      this.$set(this.childBirthOptions, index, option);
    },
    removeOption(index) {
      this.childBirthOptions.splice(index, 1);
    }
  },
  created() {
    this.form = this.setting;
  },
};
</script>

<style scoped></style>
