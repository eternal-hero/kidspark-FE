<template>
  <table class="table_style_02 table_style_02--style5 form-edit__table">
    <thead>
      <tr>
        <th colspan="3">新型コロナウイルスワクチン接種状況</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="looksort_table_info">公開</td>
        <td colspan="2">
          <exeo-radio
            name="publish"
            :options="publishOptions"
            v-model="value.is_publish"
          ></exeo-radio>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">接種回数</td>
        <td colspan="2">
          <div class="form_part_unit form_part_unit--styles03">
            <exeo-form
              type="number"
              v-model.number="value.inoculation_times"
              placeholder="（例）3"
            />
            <span class="form_part_unit_label">回</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最新接種日付</td>
        <td colspan="2">
          <label class="form_part_date form-edit__input-date">
            <exeo-form
              type="date"
              v-model="value.inoculation_on"
              placeholder="日付を選択してください"
              class="form_part_date_input.focus"
            />
          </label>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ExeoRadio from "@/components/action/ExeoRadio.vue";
import ExeoForm from "~/components/form/ExeoForm.vue";

export default {
  name: "ExeoTableInoculationEdit",
  components: {
    ExeoForm,
    ExeoRadio,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inoculationStatus: {},
      publishOptions: [
        { label: "公開する", value: 1 },
        { label: "公開しない", value: 0 },
      ],
    };
  },
  created() {
    this.inoculationStatus = this.value;
  },
};
</script>

<style scoped></style>
<!--InoculationStatusService.getInoculationStatus(this,id)-->
