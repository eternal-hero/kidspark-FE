<template>
  <div class="col2_block_main">
    <form action="" class="form-edit">
      <table
        class="table_style_02 table_style_02--style5 table_style_02--no-striped form-edit__table looksort_table--small"
      >
        <thead>
          <tr>
            <th>事前面談設定</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="form-edit__status form-edit__auto-height has-card">
            <td class="looksort_table_info">初回面談について</td>
            <td>
              <exeo-textarea
                name="memo"
                rows="2"
                cols="40"
                v-model="preInterviewSetting.initial_meeting_comment"
                class="form_part_txt form-edit__textarea form-edit__textarea--styles02"
                placeholder="火曜日朝、平日夜、土日祝日（終日）zoomにて、顔合わせ可能です。Web面談は最低30分〜とさせていただきます。まずは、メッセージからお願いします。"
              ></exeo-textarea>
            </td>
            <td class="looksort_table_note">
              <div
                class="statuschips js-tooltip-02"
                @click="showingTooltip = true"
              >
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
            <td colspan="2">
              <div class="form_part_unit">
                <label>
                  <exeo-form
                    type="number"
                    name="web_meeting_fee"
                    v-model.number="preInterviewSetting.web_meeting_fee"
                    placeholder="（例）1800"
                  />
                </label>
                <span class="form_part_unit_label">円／1時間あたり</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">対面事前面談料金</td>
            <td colspan="2">
              <div class="form_part_unit">
                <label>
                  <exeo-form
                    type="number"
                    name="facetoface_meeting_fee"
                    v-model.number="preInterviewSetting.facetoface_meeting_fee"
                    placeholder="（例）1800"
                  />
                </label>
                <span class="form_part_unit_label">円／1時間あたり</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="form-edit__control">
        <button class="btn_style_04" @click.prevent="submit">保存する</button>
      </div>
    </form>
  </div>
</template>

<script>
import ExeoForm from "@/components/form/ExeoForm.vue";
import ExeoTextarea from "@/components/form/ExeoTextarea.vue";

export default {
  name: "ExeoTablePreInterviewEdit",
  components: { ExeoTextarea, ExeoForm },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      preInterviewSetting: {},
      showingTooltip: false,
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.preInterviewSetting);
    },
  },
  created() {
    this.preInterviewSetting = this.value;
  },
};
</script>

<style scoped></style>
