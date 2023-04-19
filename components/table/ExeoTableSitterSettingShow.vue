<template>
  <table
    class="table_style_02 table_style_02--style5 table_style_02--no-striped support-management looksort_table--small">
    <thead>
    <tr>
      <th>シッター設定</th>
      <th></th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="looksort_table_info">シッターをする</td>
      <td colspan="2">
        <div class="flex flex--center">
          <ExeoToggle :isShow="true" v-model="value.is_supporter" :toggleTexts="sitterToggleOption"/>
          <div class="form_part_com">
            ※パークサポーターのマイページに入力フォームが表示されます。公開するには上部のシッターステータスを公開中に変更する必要があります。
          </div>
        </div>
      </td>
    </tr>
    <tr v-show="value.is_supporter">
      <td class="looksort_table_info">単発予約料金</td>
      <td colspan="2">
        <div class="flex flex--center">
          <span>{{ value.single_fee }}円/時給</span>
          <div class="statuschips js-tooltip support-management__status"
               data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
            <span>時給設定のコツを編集</span></div>
        </div>
      </td>
    </tr>
    <tr v-show="value.is_supporter">
      <td class="looksort_table_info">定期予約料金</td>
      <td colspan="2">
        <div class="flex flex--center">
          <span>{{ value.regular_fee }}円/時給</span>
          <div class="statuschips js-tooltip support-management__status"
               data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
            <span>定期予約と単発予約とは</span></div>
        </div>
      </td>
    </tr>
    <tr class="has-card" v-show="value.is_supporter">
      <td class="looksort_table_info">特典設定</td>
      <td v-html="value.special">
      </td>
      <td class="looksort_table_note">
        <div class="statuschips js-tooltip-02" @click="showingSpecialTooltip = true"><span>入力例</span></div>
      </td>
    </tr>
    <tr v-show="value.is_supporter">
      <td></td>
      <td colspan="2">
        <div class="form-edit__card" :style="{ display: (showingSpecialTooltip? 'block': 'none')}">
          <button class="form-edit__card-close js-close-tooltip" @click="showingSpecialTooltip = false"></button>
            ・お子様の誕生月にご予約頂いた方は時給100円引きさせて頂きます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。<br> ・サポート完了後から48時間以内に次のご予約をして頂いた方は時給100円引きさせて頂きます。 
        </div>
      </td>
    </tr>
    <tr class="has-card" v-show="value.is_supporter">
      <td class="looksort_table_info">サービス説明</td>
      <td v-html="value.service">
      </td>
      <td class="looksort_table_note">
        <div class="statuschips js-tooltip-02" @click="showingServiceTooltip = true"><span>入力例</span></div>
      </td>
    </tr>
    <tr v-show="value.is_supporter">
      <td></td>
      <td colspan="2">
        <div class="form-edit__card" :style="{ display: (showingServiceTooltip? 'block': 'none')}">
          <button class="form-edit__card-close js-close-tooltip" @click="showingServiceTooltip = false"></button>
            <p> 【提供可能なサービス】<br> ・新生児〜15歳までの保育<br> ・沐浴、入浴補助<br> ・定期サポート<br> ・家庭教師<br> など、ご希望に応じて柔軟に対応いたします。<br> 時間帯も相談に応じます。<br> 泊まり保育も相談に応じます。<br><br>
            </p>
            <p> 【保育のときに心がけていること】<br> 安心して依頼していただけるよう、サポートは安全を最優先することはもちろんですが、こどもと親御さんの気持ちに寄り添う保育をモットーに保育しています。<br> お子様を尊重し、自己肯定感を高め<br> 自主性を大切にしたサポートを心がけています。<br> お子様が大好きですので、いつも楽しく笑顔にサポートしてまいります。すぐに仲良くなれます。 </p>
        </div>
      </td>
    </tr>
    <tr v-show="value.is_supporter">
      <td class="looksort_table_info">受入可能人数</td>
      <td colspan="2">{{ value.potential_entrant }}人</td>
    </tr>
    <tr v-show="value.is_supporter">
      <td class="looksort_table_info">保育可能年齢</td>
      <td colspan="2">
        <div class="flex flex--center">
          <span>{{ age_text }}</span>
          <span class="statusicn statusicn_completion support-management__statusicn">申請受理済み</span>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>

import ExeoToggle from "@/components/action/ExeoToggle.vue";

export default {
  name: "ExeoTableSittervalueShow",
  components: {ExeoToggle},
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  created() {
    this.age_text = Math.floor(this.value.minimum_age_limit / 12) + '歳' +
                (this.value.minimum_age_limit % 12) + 'ヶ月〜' +
                Math.floor(this.value.maximum_age_limit / 12) + '歳' +
                (this.value.maximum_age_limit % 12) + 'ヶ月'
  },
  data() {
    return {
      age_text : '',
      showingServiceTooltip: false,
      showingSpecialTooltip: false,
      sitterToggleOption: ['シッターをする', 'シッターをしない'],
    }
  },
  watch: {
    value() {
      this.age_text = Math.floor(this.value.minimum_age_limit / 12) + '歳' +
                (this.value.minimum_age_limit % 12) + 'ヶ月〜' +
                Math.floor(this.value.maximum_age_limit / 12) + '歳' +
                (this.value.maximum_age_limit % 12) + 'ヶ月'
    }
  }
}
</script>

<style scoped>

</style>
