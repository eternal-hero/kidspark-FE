<template>
  <table class="table_style_02 table_style_02--style5 looksort_table--small">
    <thead>
      <tr>
        <th colspan="3">新型コロナウイルスワクチン接種状況</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="looksort_table_info">公開</td>
        <td colspan="2">
          {{ inoculationStatus.is_publish ? "あり" : "無し" }}
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">接種回数</td>
        <td colspan="2">{{ inoculationStatus.inoculation_times }}回</td>
      </tr>
      <tr>
        <td class="looksort_table_info">最新接種日付</td>
        <td colspan="2">{{ inoculationStatus.inoculation_on }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ExeoTableInoculationShow",
  props: {
    inoculationStatus: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
<!--InoculationStatusService.getInoculationStatus(this,id)-->
