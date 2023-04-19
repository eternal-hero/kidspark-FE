<template>
  <div class="col2_block_main no-flex">
  <table
    class="table_style_02 table_style_02--style5 table_style_02--no-striped looksort_table--small"
  >
    <thead>
      <tr>
        <th>事前面談設定</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-card">
        <td class="looksort_table_info">初回面談について</td>
        <td v-html="preInterviewSetting.initial_meeting_comment"></td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02" @click="showingTooltip = true">
            <span>入力例</span>
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">
          <div
            class="form-edit__card"
            :style="{ display: showingTooltip ? 'block' : 'none' }"
          >
            <button
              class="form-edit__card-close js-close-tooltip"
              @click="showingTooltip = false"
            ></button>
            入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">WEB事前面談料金</td>
        <td colspan="2">{{ preInterviewSetting.web_meeting_fee }}円/時給</td>
      </tr>
      <tr>
        <td class="looksort_table_info">対面事前面談料金</td>
        <td colspan="2">
          {{ preInterviewSetting.facetoface_meeting_fee }}円/時給
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: "ExeoTablePreInterviewShow",
  props: {
    preInterviewSetting: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showingTooltip: false,
    };
  },
};
</script>

<style scoped></style>
