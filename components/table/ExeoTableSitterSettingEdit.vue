<template>
  <table
    class="table_style_02 table_style_02--style5 table_style_02--no-striped form-edit__table form-edit__table--styles02 looksort_table--small table-add-option"
  >
    <thead>
      <tr :class="{ show: value.is_supporter }">
        <th>シッター設定</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr :class="{ show: value.is_supporter }">
        <td class="looksort_table--small_info">
          シッターをする <span class="form-edit__label">管理者</span>
        </td>
        <td colspan="2" :class="{ 'is-active': value.is_supporter }">
          <exeo-toggle v-model="value.is_supporter" :toggleTexts="sitterToggleOption"></exeo-toggle>
        </td>
      </tr>
      <tr :class="{ show: value.is_supporter }">
        <td class="looksort_table--small_info">単発予約料金</td>
        <td colspan="2">
          <div class="flex flex--center">
            <div class="form_part_unit">
              <label>
                <exeo-form
                  type="text"
                  v-model.number="value.single_fee"
                  placeholder="（例）1800"
                />
              </label>
              <span class="form_part_unit_label">円／1時間あたり</span>
            </div>
            <div
              class="statuschips js-tooltip"
              data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"
            >
              <span>時給設定のコツを編集</span>
            </div>
          </div>
        </td>
      </tr>
      <tr :class="{ show: value.is_supporter }">
        <td class="looksort_table--small_info">定期予約料金</td>
        <td colspan="2">
          <div class="flex flex--center">
            <div class="form_part_unit">
              <label>
                <exeo-form
                  type="text"
                  v-model.number="value.regular_fee"
                  placeholder="（例）1800"
                />
              </label>
              <span class="form_part_unit_label">円／1時間あたり</span>
            </div>
            <div
              class="statuschips js-tooltip"
              data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"
            >
              <span>定期予約と単発予約とはを編集</span>
            </div>
          </div>
        </td>
      </tr>
      <tr class="form-edit__status form-edit__auto-height has-card show" :class="{ show: value.is_supporter }">
        <td class="looksort_table--small_info">特典設定</td>
        <td>
          <exeo-textarea
            v-model="value.special"
            rows="2"
            cols="40"
            class="form_part_txt form-edit__textarea form-edit__textarea--styles03"
            placeholder="(例)初回のみ1000円割引いたします。"
          ></exeo-textarea>
        </td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02"><span>入力例</span></div>
        </td>
      </tr>
      <tr :class="{ show: value.is_supporter }">
        <td></td>
        <td colspan="2">
          <div class="form-edit__card">
            <button class="form-edit__card-close js-close-tooltip"></button>
            (例)<br>
            初めてご利用される保護者の方には、初回特典として利用料金の割引をさせていただきます。また、初回サポート完了後48時間以内に次のご予約をいただいた場合、次回ご利用時間ごとの料金を割り引かせていただきます。<br><br> 
            (例)<br>
            お子様の誕生月にご予約頂いた場合、ご利用時間ごとに料金を割引させていただきます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。<br> 
            また、初めてサポートに入らせていただくスタッフの場合、事前面談料（1000円/1時間＋交通費）を無料とさせていただきます。 
          </div>
        </td>
      </tr>
      <tr
        class="form-edit__status form-edit__auto-height has-card"
        :class="{ show: value.is_supporter }"
      >
        <td class="looksort_table--small_info">サービス説明</td>
        <td>
          <exeo-textarea
            v-model="value.service"
            name="memo"
            rows="2"
            cols="40"
            class="form_part_txt form-edit__textarea form-edit__textarea--styles03"
            placeholder="サービス内容の詳細を入力してください。入力の内容が不明ば場合は入力例を参考にしてください。"
          ></exeo-textarea>
        </td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02"><span>入力例</span></div>
        </td>
      </tr>
      <tr :class="{ show: value.is_supporter }">
        <td></td>
        <td colspan="2">
          <div class="form-edit__card">
            <button class="form-edit__card-close js-close-tooltip"></button>
            (例)<br>
            安心して依頼していただけるよう、サポートは安全を最優先して対応しています。<br>
            子どもの自主性を大切にしたサポートを心がけています。<br>
            とにかく子供が大好きです。一緒にいる時間をいつも楽しく笑顔でサポートしてまいります。<br>
            　●ご自宅での遊び<br>
            　●オムツ替え、トイレ介助<br>
            　●入浴介助<br>
            　●おさんぽ　など<br><br>
            (例)<br>
            保護者の方のリフレッシュのためにベビーシッターをご利用されるのはいかがでしょうか。保育施設のお迎えやお食事、入浴、遊び相手などをご依頼いただければ帰宅後のバタバタから開放されます。<br> 
            <br>
            ・お家での遊び相手<br> 
            ・おさんぽ <br>
            ・お食事介助 <br>
            ・沐浴、入浴補助 <br>
            ・保育施設の送迎　など 
          </div>
        </td>
      </tr>
      <tr :class="{ show: value.is_supporter }">
        <td class="looksort_table--small_info">受入可能人数</td>
        <td colspan="2">
          <div class="form_part_unit form_part_unit--styles02">
            <exeo-form
              type="text"
              v-model.number="value.potential_entrant"
              placeholder="（例）1"
            />
            <span class="form_part_unit_label">人</span>
          </div>
        </td>
      </tr>
      <tr :class="{ show: value.is_supporter }">
        <td class="looksort_table--small_info">
          保育可能年齢 <span class="form-edit__label">管理者</span>
        </td>
        <td colspan="2">
          <div class="form-edit__group">
            <div class="form-edit__select-group flex flex--center">
              <div class="flex">
                <div class="tableform_select form-edit__select--shorter">
                  <exeo-select
                    v-model="minimum_age_limit_year"
                    :options="$AGE_OPTIONS"
                  ></exeo-select>
                </div>
                <div class="tableform_select form-edit__select--longer">
                  <exeo-select v-model="minimum_age_limit_month" :options="$MONTH_OPTIONS"></exeo-select>
                </div>
              </div>
              <span class="form-edit__icn-between">〜</span>
              <div class="flex">
                <div class="tableform_select form-edit__select--shorter">
                  <exeo-select
                    v-model="maximum_age_limit_year"
                    :options="$AGE_OPTIONS"
                  ></exeo-select>
                </div>
                <div class="tableform_select form-edit__select--longer">
                  <exeo-select v-model="maximum_age_limit_month" :options="$MONTH_OPTIONS"></exeo-select>
                </div>
              </div>
            </div>
            <p class="form_part_com">
              ※保育可能年齢はシッターの経験・資格に応じて管理者が設定<br />※0歳〜7歳までを保育する場合は認可外保育施設設置届の提出が必須
            </p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ExeoToggle from "~/components/action/ExeoToggle.vue";
import ExeoForm from "~/components/form/ExeoForm.vue";
import ExeoTextarea from "~/components/form/ExeoTextarea.vue";
import ExeoSelect from "~/components/action/ExeoSelect.vue";

export default {
  name: "ExeoTableSitterSettingEdit",
  components: {
    ExeoSelect,
    ExeoTextarea,
    ExeoForm,
    ExeoToggle
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      minimum_age_limit_year: 0,
      minimum_age_limit_month: 0,
      maximum_age_limit_year: 0,
      maximum_age_limit_month: 0,
      sitterToggleOption: ['シッターをする', 'シッターをしない'],
    };
  },
  methods: {
    combineAgeLimit(isMax = false) {
      if(isMax) {
        return parseInt(this.maximum_age_limit_year) * 12 + parseInt(this.maximum_age_limit_month)
      }

      return parseInt(this.minimum_age_limit_year) * 12 + parseInt(this.minimum_age_limit_month)
    }
  },
  fetch() {
    this.minimum_age_limit_year = Math.floor(this.value.minimum_age_limit / 12);
    this.minimum_age_limit_month = this.value.minimum_age_limit % 12
    this.maximum_age_limit_year = Math.floor(this.value.maximum_age_limit / 12);
    this.maximum_age_limit_month = this.value.maximum_age_limit % 12
  },
  watch: {
    value: {
      handler() {
        this.$emit('input', this.value)
      },

      deep: true
    },
    'value.minimum_age_limit'() {
      this.minimum_age_limit_year = Math.floor(this.value.minimum_age_limit / 12);
      this.minimum_age_limit_month = this.value.minimum_age_limit % 12
    },
    'value.maximum_age_limit'() {
      this.maximum_age_limit_year = Math.floor(this.value.maximum_age_limit / 12);
      this.maximum_age_limit_month = this.value.maximum_age_limit % 12
    },
    minimum_age_limit_year() {
      this.value.minimum_age_limit = this.combineAgeLimit()
    },
    minimum_age_limit_month() {
      this.value.minimum_age_limit = this.combineAgeLimit()
    },
    maximum_age_limit_year() {
      this.value.maximum_age_limit = this.combineAgeLimit(true)
    },
    maximum_age_limit_month() {
      this.value.maximum_age_limit = this.combineAgeLimit(true)
    },
  },
};
</script>

<style scoped></style>
