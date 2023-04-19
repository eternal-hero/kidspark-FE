<template>
  <table
    class="
      table_style_02 table_style_02--style5 table_style_02--no-striped
      support-management
      looksort_table--small
    "
  >
    <thead>
      <tr>
        <th>病児保育設定</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="looksort_table_info">病児保育設定</td>
        <td colspan="2">
          <div class="flex flex--center">
            <div v-if="value.is_sick_child_care" class="form_part_works no-hover">
              <span>病児保育をする</span>
            </div>
            <div v-else class="form_part_close no-hover">
              <span>病児保育をしない</span>
            </div>
          </div>
        </td>
      </tr>
      <tr v-if="value.is_sick_child_care">
        <td class="looksort_table_info">単発予約料金</td>
        <td colspan="2">{{ value.single_fee }}円/時給</td>
      </tr>
      <tr v-if="value.is_sick_child_care">
        <td class="looksort_table_info">定期予約料金</td>
        <td colspan="2">{{ value.regular_fee }}円/時給</td>
      </tr>

      <tr class="has-card" v-if="value.is_sick_child_care">
        <td class="looksort_table_info">特典設定</td>
        <td>
          <div class="looksort_table_txt"> {{value.special}} </div>
        </td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02" @click="showingSpecialTooltip = true"><span>入力例</span></div>
        </td>
      </tr>
      <tr v-if="value.is_sick_child_care">
        <td></td>
        <td colspan="2">
          <div class="form-edit__card" :style="{ display: showingSpecialTooltip ? 'block' : 'none' }">
            <button class="form-edit__card-close js-close-tooltip" @click="showingSpecialTooltip = false"></button>
            ・お子様の誕生月にご予約頂いた方は時給100円引きさせて頂きます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。<br>
            ・サポート完了後から48時間以内に次のご予約をして頂いた方は時給100円引きさせて頂きます。
          </div>
        </td>
      </tr>

      <tr class="has-card" v-if="value.is_sick_child_care">
        <td class="looksort_table_info">サービス説明</td>
        <td>
          <div class="looksort_table_txt"> {{ value.service }} </div>
        </td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02" @click="showingServiceTooltip = true"><span>入力例</span></div>
        </td>
      </tr>
      <tr v-if="value.is_sick_child_care">
        <td></td>
        <td colspan="2">
          <div class="form-edit__card" :style="{ display: showingServiceTooltip ? 'block' : 'none' }">
            <button class="form-edit__card-close js-close-tooltip" @click="showingServiceTooltip = false"></button>
            <p> 【提供可能なサービス】<br> ・新生児〜15歳までの保育<br> ・沐浴、入浴補助<br> ・定期サポート<br> ・家庭教師<br> など、ご希望に応じて柔軟に対応いたします。<br> 時間帯も相談に応じます。<br> 泊まり保育も相談に応じます。<br><br>
            </p>
            <p> 【保育のときに心がけていること】<br> 安心して依頼していただけるよう、サポートは安全を最優先することはもちろんですが、こどもと親御さんの気持ちに寄り添う保育をモットーに保育しています。<br><br>
            </p>
            <p> お子様を尊重し、自己肯定感を高め<br> 自主性を大切にしたサポートを心がけています。<br> お子様が大好きですので、いつも楽しく笑顔にサポートしてまいります。すぐに仲良くなれます。 </p>
          </div>
        </td>
      </tr>
    </tbody>
    <!-- <thead v-if="value.is_sick_child_care && options">
      <tr>
        <th>オプション設定</th>
        <th></th>
        <th></th>
      </tr>
    </thead> -->
    <tbody>
      <tr v-for="option in options" :key="option">
        <td class="looksort_table_info border-0">{{ $SETTING_OPTIONS_SUBJECT_TYPE_SHOW[option.subject_type] }}</td>
        <td colspan="2" class="border-0"> {{ option.option_content }} {{ option.additional_fee }}円/{{ $SETTING_OPTIONS_UNIT_SHOW[option.unit] }} </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ExeoToggle from "@/components/action/ExeoToggle.vue";

export default {
  name: "ExeoTableSickChildenCareShow",
  components: { ExeoToggle },
  props: {
    value: {
      type: Object,
      required: true,
    },
    options: {
      type: [Object, Array]
    }
  },
  data() {
    return {
      showingSpecialTooltip: false,
      showingServiceTooltip: false,
    };
  },
  created() {
  },
};
</script>

<style scoped>
</style>
