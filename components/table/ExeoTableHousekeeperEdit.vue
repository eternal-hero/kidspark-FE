<template>
  <table
    class="table_style_02 table_style_02--style5 table_style_02--no-striped form-edit__table form-edit__table--styles02 looksort_table--small table-add-option"
  >
    <thead>
      <tr>
        <th>家事代行設定</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr :class="{ show: value.is_housework }">
        <td class="looksort_table_info">家事代行をする</td>
        <td colspan="2" :class="{ 'is-active': value.is_housework }">
          <ExeoToggle v-model="value.is_housework"></ExeoToggle>
        </td>
      </tr>
      <tr :class="{ show: value.is_housework }">
        <td class="looksort_table_info">単発予約料金</td>
        <td colspan="2">
          <div class="flex flex--center">
            <div class="form_part_unit">
              <label>
                <input
                  type="number"
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
              <span>時給設定のコツを登録</span>
            </div>
          </div>
        </td>
      </tr>
      <tr :class="{ show: value.is_housework }">
        <td class="looksort_table_info">定期予約料金</td>
        <td colspan="2">
          <div class="form_part_unit">
            <label>
              <input
                type="number"
                v-model.number="value.regular_fee"
                placeholder="（例）1800"
              />
            </label>
            <span class="form_part_unit_label">円／1時間あたり</span>
          </div>
        </td>
      </tr>
      <tr
        class="form-edit__status form-edit__auto-height has-card"
        :class="{ show: value.is_housework }"
      >
        <td class="looksort_table_info">特典設定</td>
        <td>
          <textarea
            v-model="value.special"
            rows="2"
            cols="40"
            class="form_part_txt form-edit__textarea form-edit__textarea--styles03"
            placeholder="初回のみ1000円割引いたします。"
          ></textarea>
        </td>
        <td class="looksort_table_note">
          <div
            class="statuschips js-tooltip-02"
            @click="showingSpecialTooltip = true"
          >
            <span>入力例</span>
          </div>
        </td>
      </tr>
      <tr :class="{ show: value.is_housework }">
        <td></td>
        <td colspan="2">
          <div
            class="form-edit__card"
            :style="{ display: showingSpecialTooltip ? 'block' : 'none' }"
          >
            <button
              class="form-edit__card-close js-close-tooltip"
              @click="showingSpecialTooltip = false"
            ></button>
             <!-- ・お子様の誕生月にご予約頂いた方は時給100円引きさせて頂きます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。<br> ・サポート完了後から48時間以内に次のご予約をして頂いた方は時給100円引きさせて頂きます。 -->
             入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
            </div>
        </td>
      </tr>
      <tr
        class="form-edit__status form-edit__auto-height has-card"
        :class="{ show: value.is_housework }"
      >
        <td class="looksort_table_info">サービス説明</td>
        <td>
          <textarea
            name="memo"
            v-model="value.service"
            rows="2"
            cols="40"
            class="form_part_txt form-edit__textarea form-edit__textarea--styles03"
            placeholder="保護者に"
          ></textarea>
          <div class="form-edit__card">
            <button class="form-edit__card-close"></button>
            <!-- ・お子様の誕生月にご予約頂いた方は時給100円引きさせて頂きます。お子様の誕生日を証明できる物（保険証、母子手帳など）のご提示をお願い致します。<br> ・サポート完了後から48時間以内に次のご予約をして頂いた方は時給100円引きさせて頂きます。 -->
            入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
          </div>
        </td>
        <td class="looksort_table_note">
          <div
            class="statuschips js-tooltip-02"
            @click="showingServiceTooltip = true"
          >
            <span>入力例</span>
          </div>
        </td>
      </tr>
      <tr :class="{ show: value.is_housework }">
        <td></td>
        <td colspan="2">
          <div
            class="form-edit__card"
            :style="{ display: showingServiceTooltip ? 'block' : 'none' }"
          >
            <button
              class="form-edit__card-close js-close-tooltip"
              @click="showingServiceTooltip = false"
            ></button>
            <!-- 【提供可能なサービス】<br> ・新生児〜15歳までの保育<br> ・沐浴、入浴補助<br> ・定期サポート<br> ・家庭教師<br> など、ご希望に応じて柔軟に対応いたします。<br> 時間帯も相談に応じます。<br> 泊まり保育も相談に応じます。<br><br>

            【保育のときに心がけていること】<br> 安心して依頼していただけるよう、サポートは安全を最優先することはもちろんですが、こどもと親御さんの気持ちに寄り添う保育をモットーに保育しています。<br><br>

            お子様を尊重し、自己肯定感を高め<br> 自主性を大切にしたサポートを心がけています。<br> お子様が大好きですので、いつも楽しく笑顔にサポートしてまいります。すぐに仲良くなれます。 -->
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
  name: "ExeoTableHousekeeperEdit",
  components: { ExeoToggle },
  props: {
    value: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      showingSpecialTooltip: false,
      showingServiceTooltip: false,
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.$emit('input', newVal)
      },
      deep: true,
      immediate: true
    },
  },
};
</script>
