<template>
  <table
    class="table_style_02 table_style_02--style5 table_style_02--no-striped support-management looksort_table--small">
    <thead>
    <tr>
      <th>産前産後設定</th>
      <th></th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="looksort_table_info">産前産後をする</td>
      <td colspan="2">
        <div class="flex flex--center">
          <exeo-toggle :toggle-texts="toggleTexts" v-model="supporterSetting.is_childbirth_care" :isShow="true"></exeo-toggle>
          <a href="#" class="support-management__link">申請フォーム</a>
        </div>
      </td>
    </tr>
    <tr v-show="supporterSetting.is_childbirth_care">
      <td class="looksort_table_info">単発予約料金</td>
      <td colspan="2"> {{supporterSetting.single_fee }}円/時給</td>
    </tr>
    <tr v-show="supporterSetting.is_childbirth_care">
      <td class="looksort_table_info">定期予約料金</td>
      <td colspan="2">{{ supporterSetting.regular_fee }}円/時給</td>
    </tr>
    <tr class="has-card" v-show="supporterSetting.is_childbirth_care">
      <td class="looksort_table_info">特典設定</td>
      <td v-html="supporterSetting.special">
      </td>
      <td class="looksort_table_note">
        <div class="statuschips js-tooltip-02" @click="showingSpecialTooltip = true"><span>入力例</span></div>
      </td>
    </tr>
    <tr v-show="supporterSetting.is_childbirth_care">
      <td></td>
      <td colspan="2">
        <div class="form-edit__card" :style="{ display: (showingSpecialTooltip? 'block': 'none')}">
          <button class="form-edit__card-close js-close-tooltip" @click="showingSpecialTooltip = false"></button>
          入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
        </div>
      </td>
    </tr>
    <tr class="has-card" v-show="supporterSetting.is_childbirth_care">
      <td class="looksort_table_info">サービス説明</td>
      <td v-html="supporterSetting.service">
      </td>
      <td class="looksort_table_note">
        <div class="statuschips js-tooltip-02" @click="showingServiceTooltip = true"><span>入力例</span></div>
      </td>
    </tr>
    <tr v-show="supporterSetting.is_childbirth_care">
      <td></td>
      <td colspan="2">
        <div class="form-edit__card" :style="{ display: (showingServiceTooltip? 'block': 'none')}">
          <button class="form-edit__card-close js-close-tooltip" @click="showingServiceTooltip = false"></button>
          入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import ExeoToggle from "@/components/action/ExeoToggle.vue";

export default {
  name: "ExeoTableChildbirthShow",
  components: {ExeoToggle},
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      supporterSetting: {},
      showingSpecialTooltip: false,
      showingServiceTooltip: false,
      toggleTexts: ['産前産後をする', '産前産後をしない']
    }
  },
  created() {
    this.supporterSetting = this.value;
  }
}
</script>

<style scoped>

</style>
