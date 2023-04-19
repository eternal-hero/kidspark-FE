<template>
  <table
    class="
      table_style_02 table_style_02--style5 table_style_02--no-striped
      form-edit__table form-edit__table--styles02
      looksort_table--small
      table-add-option
    "
  >
    <thead>
      <tr>
        <th>産前産後設定</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr :class="{ show: value.is_childbirth_care }">
        <td class="looksort_table_info">
          産前産後をする <span class="form-edit__label">管理者</span>
        </td>
        <td colspan="2" :class="{ 'is-active': value.is_childbirth_care }">
          <div class="flex flex--center">
            <exeo-toggle
              v-model="value.is_childbirth_care"
              :toggle-texts="toggleTexts"
            ></exeo-toggle>
            <a href="#" class="form-edit__link">申請フォーム</a>
          </div>
        </td>
      </tr>
      <tr :class="{ show: value.is_childbirth_care }">
        <td class="looksort_table_info">単発予約料金</td>
        <td colspan="2">
          <div class="flex flex--center">
            <div class="form_part_unit">
              <label>
                <input
                  type="text"
                  placeholder="（例）1800"
                  v-model.number="value.single_fee"
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
      <tr :class="{ show: value.is_childbirth_care }">
        <td class="looksort_table_info">定期予約料金</td>
        <td colspan="2">
          <div class="flex flex--center">
            <div class="form_part_unit">
              <label>
                <input
                  type="text"
                  name=""
                  value=""
                  placeholder="（例）1800"
                  v-model.number="value.regular_fee"
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
      <tr
        :class="{ show: value.is_childbirth_care }"
        class="form-edit__status form-edit__auto-height"
      >
        <td class="looksort_table_info">特典設定</td>
        <td>
          <textarea
            name="memo"
            rows="2"
            cols="40"
            class="
              form_part_txt
              form-edit__textarea form-edit__textarea--styles03
            "
            placeholder="特典設定を入力してください"
            v-model="value.special"
          ></textarea>
        </td>
        <td>
          <div
            class="statuschips js-tooltip"
            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"
          >
            <span>入力例</span>
          </div>
        </td>
      </tr>
      <tr
        :class="{ show: value.is_childbirth_care }"
        class="form-edit__status form-edit__auto-height"
      >
        <td class="looksort_table_info">サービス説明</td>
        <td>
          <textarea
            name="memo"
            rows="2"
            cols="40"
            class="
              form_part_txt
              form-edit__textarea form-edit__textarea--styles03
            "
            placeholder="サービス説明を入力してください"
            v-model="value.service"
          ></textarea>
        </td>
        <td>
          <div
            class="statuschips js-tooltip"
            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"
          >
            <span>入力例</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ExeoToggle from "@/components/action/ExeoToggle.vue";

export default {
  name: "ExeoTableChildbirthEdit",
  components: {
    ExeoToggle,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showingSpecialTooltip: false,
      showingServiceTooltip: false,
      toggleTexts: ["産前産後をする", "産前産後をしない"],
    };
  },
  created() {
    this.value = this.value;
  },
  watch: {
    value: {
      handler(val) {
        this.$emit('input', val)
      },
      deep: true
    },
  },
};
</script>