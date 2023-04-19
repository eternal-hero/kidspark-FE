<template>
  <div class="l-content">
    <div class="l-content__body">
      <h2 class="c-ttl__02 mbpc-33 mbsp-25">家事代行設定</h2>
      <hr class="hr mbpc-19 mbsp-13" />
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
                ></textarea>
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
                      (例)<br />初めてご利用されるご依頼者には、初回特典として利用料金の割引をさせていただきます。また、初回サポート完了後48時間以内に次のご予約をいただいた場合、次回ご利用時間ごとの料金を割り引かせていただきます。<br />(例)<br />初回より定期利用をご希望の場合、
                      初回ご利用料金をキャッシュバックさせていただきます。ベビーシッターと併用の定期利用の場合は、シッターが撮影した写真で作成したフォトブックをプレゼント。フォトシステムでオンライン上でも確認できます。
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
                      (例)<br />お忙しい依頼者さまに代わって、家事を行います。水回りを主とする年末の大掃除のサポートといった単発のご依頼から、毎週の家中のお掃除、1週間分の料理の作り置きなど定期利用も可能です。定期的に利用して頂くことでご自宅を居心地の良い空間に保つことができます。<br />・キッチン、お風呂、トイレなど家の掃除<br />・パーティー料理から普段の夕食の作り置き調理<br />・離乳食、幼児食、授乳のサポート<br />・洗濯、洗濯物干し、たたみ、アイロンがけ　など<br />(例)<br />家事や子育ての負担から開放されたい、リフレッシュしたいというご依頼者さまのリクエストに応えます。小さなお子さまがいらっしゃる場合、保育施設へのお迎え、夕食作り、お部屋の掃除などをサポートすることで、親子のふれあいの時間を提供します。<br />・定期的な保育施設の送迎<br />・離乳食、幼児食、夕食の調理<br />・キッチン、お風呂、トイレなど水回りの掃除<br />・洗濯物たたみ、アイロンがけ、寝具交換　など
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="c-ttl__02 mbpc-31">オプション設定</h2>
      <hr class="hr mbpc-15 mbsp-13"/>
      <div class="quote-list quote-list--02 quote-list--03">
        <div class="quote-list__item">
          <div class="quote-list__fee">
            <div class="quote-list__fee-item quote-list__fee-item--start">
              <div class="quote-list__fee-ttl">家事代行オプション</div>
              <div class="quote-list__fee-ct quote-list__fee-ct03">
                <div class="form-add" @click="option.show = true">オプションを追加する</div>
                <div class="quote-list__fee-add" v-show="option.show">
                  <div class="quote-list__fee-form">
                    <div class="quote-list__fee-inputxt">
                      <input type="text" class="form-edit__input desc-form" placeholder="オプションを入れてください" v-model="option.content"/>
                    </div>
                    <div class="quote-list__fee-input">
                      <input type="number" class="form-edit__input day-form" placeholder="（例）1800" v-model="option.fee"/>
                      <span>円</span>
                    </div>
                    <div class="form_part_select form_part_select--02">
                      <select class="hour-form" v-model="option.unit">
                        <option :value="0">1時間あたり</option>
                        <option :value="1">一回あたり</option>
                      </select>
                    </div>
                    <button @click="addOption()" class="c-btn__07">保存</button>
                  </div>
                </div>
                <div class="quote-list__fee-add" v-for="(option_data,index) in option_form" :key="index">
                  <div class="quote-list__fee-remove" style="display:flex;">
                    <p class="result-txt">
                      <span id="option">{{option_data.option_content}}</span>　+<span id="price">{{option_data.additional_fee}}</span>円/{{option_data.unit==0 ? '1時間あたり' : '1回あたり'}}
                    </p>
                    <ul class="btn-list">
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--gray" @click="editOption(index)">編集</button>
                      </li>
                      <li class="btn-list__item">
                        <button type="button" class="c-btn__07 c-btn__07--red" @click="option_form.splice(index,1)">削除</button>
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
          </div>
        </div>
      </div>
      <h2 class="c-ttl__02 mbpc-31">対応可能設定</h2>
      <hr class="hr mbpc-15"/>
      <div class="quote-list quote-list--02 quote-list--03 mbpc-18 mbsp-18">
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
                  v-model="support_form.acceptance_condition"
                ></textarea>
                <div class="request-form__ct-right">
                  <div class="c-example__button js-btn-acc">
                    <span>入力例</span>
                  </div>
                  <div class="c-example__cont js-acc-cont">
                    <span class="c-example__close js-acc-close">×</span>
                    <p class="c-txt__01">
                      (例)<br/>子育てのご家庭をサポートをさせて頂いておりますので、お子さまのいらっしゃらないご家庭の家事代行はお断りしております。ご了承ください。<br/>また、男性ユーザー様からのご依頼もお断りさせて頂いております。<br/><br/>(例)<br/>家事代行は3時間からお受けしております。<br/>(例)<br/>当方自宅より片道1時間以内の方のみとさせて頂いております。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quote-list__fee-item quote-list__fee-item--start">
          <div class="quote-list__fee-ttl">対応可能サービス</div>
          <div class="quote-list__fee-ct">
            <label class="support-ct__table-title">料理</label>
            <ul class="form-check form-check--02 form-check--05">
              <li class="form-check__item" v-for="cooking in cookingOptions" :key="cooking.value">
                <label class="form-edit__checkbox">
                  <input type="checkbox" class="checks" v-model="checkedService" :value="cooking.value"/>
                  <span class="checkmark"></span>{{cooking.label}}
                </label>
              </li>
            </ul>
            <label class="support-ct__table-title">掃除・洗濯</label>
            <ul class="form-check form-check--02 form-check--05">
              <li class="form-check__item" v-for="clean in cleaningOptions" :key="clean.value">
                <label class="form-edit__checkbox">
                  <input type="checkbox" class="checks" v-model="checkedService" :value="clean.value"/>
                  <span class="checkmark"></span>{{clean.label}}
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="hr mbpc-30 mbsp-30"/>
      <button type="submit" class="btn_entry mw-335" @click.prevent="submit">
        保存する
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseKeepingSettingEditForm",
  props: {
    setting: {
      type: Object,
      required: true,
    },
    options: {},
    supports: {}
  },
  data() {
    return {
      form: {},
      option_form: {},
      support_form: {},
      option: {
        content: null,
        fee: null,
        unit: 0,
        show: false
      },
      checkedService: [],
      showingTooltip: [false, false, false],
      cookingOptions: [
        {value: 0, label: "作り置き"},
        {value: 1, label: "パーティー料理"},
        {value: 2, label: "お買い物"},
      ],
      cleaningOptions: [
        {value: 3, label: "リビング"},
        {value: 4, label: "寝室"},
        {value: 5, label: "子供部屋"},
        {value: 6, label: "廊下"},
        {value: 7, label: "クローゼット"},
        {value: 8, label: "風呂場"},
        {value: 9, label: "トイレ"},
        {value: 10, label: "洗面所"},
        {value: 11, label: "キッチン"},
        {value: 12, label: "庭"},
        {value: 13, label: "洗濯"},
        {value: 14, label: "アイロンがけ"},
        {value: 15, label: "収納アドバイス"},
      ]
    };
  },
  methods: {
    toggleTT(ithTooltip) {
      this.$set(
        this.showingTooltip,
        ithTooltip,
        !this.showingTooltip[ithTooltip]
      );
    },
    submit() {
      if (this.checkedService.length > 0) {
        this.support_form['supported_service'] = this.checkedService.join(',')
      }
      this.$emit("submit", {setting:this.form,options:this.option_form,supports:this.support_form});
    },
    addOption() {
      if(this.option.content == null || this.option.fee == null) return;
      var data = {
        settings_id: 4,
        subject_type: 0,
        option_content: this.option.content,
        additional_fee: this.option.fee,
        unit: this.option.unit,
      };
      this.option.show = false
      this.option_form.push(data)
    },
    editOption(index) {
      this.option.show = true
      this.option.content = this.option_form[index].option_content
      this.option.fee = this.option_form[index].additional_fee
      this.option.unit = this.option_form[index].unit
      this.option_form.splice(index,1)
    },
  },
  created() {
    this.form = this.setting;
    this.option_form = this.options;
    this.support_form = this.supports;
    this.checkedService = this.supports.supported_service == "" ? [] : this.supports.supported_service.split(',')
  },
};
</script>

<style scoped></style>
