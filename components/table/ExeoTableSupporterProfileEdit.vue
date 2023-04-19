<template>
  <table class="table_style_02 table_style_02--style5 table_style_02--no-striped form-edit__table">
    <thead>
      <tr>
        <th>共通プロフィール</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="form-edit__status has-card">
        <td class="looksort_table_info">タイトル</td>
        <td>
          <exeo-form maxLength="35" type="text" v-model="value.title" class="form-edit__input form-edit__input--full"
            placeholder="(例)笑顔で明るく！それぞれのご家庭に寄り添った楽しい保育を。" />
        </td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02"><span>入力例</span></div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">
          <div class="form-edit__card">
            <button class="form-edit__card-close js-close-tooltip"></button>
            入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
          </div>
        </td>
      </tr>
      <tr class="form-edit__status form-edit__auto-height has-card">
        <td class="looksort_table_info">自己紹介文</td>
        <td>
          <exeo-textarea maxLength="1000" name="memo" v-model="value.self_introduction" rows="2" cols="40"
            class="form_part_txt form-edit__textarea"
            placeholder="(例)２００５年からは子育てをしながら、ベビーサイン講師として活動をしていました。　アロマセラピストとしても、赤ちゃんや幼児、小学生へのタッチケアを行なっています。　ベビーサインやタッチケアも発達障害を持つお子様にもそうでないお子様にも、とても大切なことだということが近年の研究結果で分かりつつある今、どんな子供にも一人一人対応出来るように学びは続いています。"></exeo-textarea>
        </td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02"><span>入力例</span></div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">
          <div class="form-edit__card">
            <button class="form-edit__card-close js-close-tooltip"></button>
            入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅</td>
        <td colspan="2">
          <div class="form-edit__group">
            <div class="form_part_unit">
              <exeo-form type="text" v-model="value.near_line" name="" value="" placeholder="（例）埼京" />
              <span class="form_part_unit_label">線</span>
            </div>
            <div class="form_part_unit">
              <exeo-form type="text" v-model="value.near_station" name="" value="" placeholder="（例）渋谷" />
              <span class="form_part_unit_label">駅</span>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅までの交通手段</td>
        <td colspan="2">
          <exeo-radio name="means" :options="$TRANSPORTATION" v-model="value.means"></exeo-radio>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅までの所要時間</td>
        <td colspan="2">
          <div class="form_part_unit form_part_unit--styles02">
            <exeo-form type="text" v-model.number="value.travel_times" name="" value="" placeholder="（例）10" />
            <span class="form_part_unit_label">分</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅の公開</td>
        <td colspan="2">
          <exeo-radio name="disclosure" v-model="value.is_publish" :options="publishOptions"></exeo-radio>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">予約前後の空き時間</td>
        <td colspan="2">
          <div class="form_part_unit form_part_unit--styles04">
            <exeo-form type="text" v-model.number="value.time_between_appointment" placeholder="（例）1" />
            <span class="form_part_unit_label">時間以上</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最低依頼時間目安</td>
        <td colspan="2">
          <div class="form_part_unit form_part_unit--styles04">
            <exeo-form type="text" v-model.number="value.minimum_request_time" placeholder="（例）2" />
            <span class="form_part_unit_label">時間以上</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">返答までの時間</td>
        <td colspan="2">
          <div class="form_part_unit form_part_unit--styles03">
            <exeo-form type="text" v-model.number="value.reply_time" placeholder="（例）3" />
            <span class="form_part_unit_label">時間</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">外国語対応</td>
        <td colspan="2">
          <exeo-radio name="language" v-model="value.is_foreign_language"
            :options="foreignLanguageOptions"></exeo-radio>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ExeoRadio from "@/components/action/ExeoRadio.vue";
import ExeoForm from "@/components/form/ExeoForm.vue";
import ExeoTextarea from "@/components/form/ExeoTextarea.vue";

export default {
  name: "ExeoTableSupporterProfileEdit",
  components: {
    ExeoTextarea,
    ExeoForm,
    ExeoRadio,
  },
  data() {
    return {
      supporterProfile: {},
      meanOptions: [
        { label: "徒歩", value: 0 },
        { label: "バス", value: 1 },
        { label: "自転車", value: 2 },
        { label: "自動車", value: 3 },
        { label: "その他", value: 4 },
      ],
      publishOptions: [
        { label: "公開する", value: 1 },
        { label: "公開しない", value: 0 },
      ],
      foreignLanguageOptions: [
        { label: "対応する", value: 1 },
        { label: "対応しない", value: 0 },
      ],
    };
  },
  props: {
    value: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    this.supporterProfile = this.value;
    this.meanOptions;
  },

  watch: {
    val() {
      this.$emit("input", this.val);
    },
  },

};
</script>

<style scoped>

</style>
<!--SupporterProfileService.getSupporterProfile(this,id)-->
