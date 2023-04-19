<template>
  <div class="col2_block_main">
    <form action="" class="form-edit">
      <div class="tableblock_scroll">
        <table
          class="table_style_02 table_style_02--style5 table_style_02--no-striped form-edit__table looksort_table--small">
          <thead>
            <tr>
              <th>共通プロフィール</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="form-edit__status form-edit__auto-height has-card">
              <td class="looksort_table_info">自己紹介文</td>
              <td>
                <ExeoTextarea name="memo" :rows="'9'" :cols="40" class="form-edit__textarea" :placeholder="''"
                  v-model="guardian_profile.self_introduction" />
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
                  ２００５年からは子育てをしながら、ベビーサイン講師として活動をしていました。　アロマセラピストとしても、赤ちゃんや幼児、小学生へのタッチケアを行なっています。　ベビーサインやタッチケアも発達障害を持つお子様にもそうでないお子様にも、とても大切なことだということが近年の研究結果で分かりつつある今、どんな子供にも一人一人対応出来るように学びは続いています。
                </div>
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">最寄り駅</td>
              <td colspan="2">
                <div class="form-edit__group">
                  <ExeoFormUnit v-model="guardian_profile.near_line" :unit="'線'" :placeholder="''" />
                  <ExeoFormUnit v-model="guardian_profile.near_station" :unit="'駅'" :placeholder="''" />
                </div>
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">最寄り駅までの交通手段</td>
              <td colspan="2">
                <ExeoRadio class="radio-group form-edit__radio" :options="$TRANSPORTATION" :name="'transportation'"
                  v-model="guardian_profile.means" />
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">最寄り駅までの所要時間</td>
              <td colspan="2">
                <ExeoFormUnit class='form_part_unit--styles02' v-model="guardian_profile.travel_time"
                  :unit="'分'" :placeholder="''" />
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">最寄り駅の公開</td>
              <td colspan="2">
                <ExeoRadio class="radio-group form-edit__radio" :options="$DISCLOSURE" :name="'disclosure'"
                  v-model="guardian_profile.is_publish" />
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">ご家庭のルール</td>
              <td colspan="2">
                <ExeoForm class="form-edit__input form-edit__input--full"
                  v-model="guardian_profile.rule" />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colspan="3">新型コロナウイルスワクチン接種状況</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="looksort_table_info">公開</td>
              <td colspan="2">
                <ExeoRadio class="radio-group form-edit__radio" :options="$PUBLIC" :name="'public'"
                  v-model="inoculation.is_publish" />
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">接種回数</td>
              <td colspan="2">
                <ExeoFormUnit class='form_part_unit--styles03' v-model.number="inoculation.inoculation_times" :unit="'回'"
                  :placeholder="''" />
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">最新接種日付</td>
              <td colspan="2">
                <label class="form_part_date">
                  <input type="date" v-model="inoculation.inoculation_on" class="form_part_date_input">
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="form-edit__control">
        <button class="btn_style_04" v-on:click.prevent="submit">保存する</button>
      </div>
    </form>
  </div>
</template>

<script>
import ExeoRadio from '../action/ExeoRadio.vue';
import ExeoForm from '../form/ExeoForm.vue';
import ExeoTextarea from '../form/ExeoTextarea.vue';
import ExeoFormUnit from '../form/ExeoFormUnit.vue';

export default {
  components: {
    ExeoRadio,
    ExeoForm,
    ExeoTextarea,
    ExeoFormUnit
  },
  props: {
    guardian_profile: {
      type: Object,
      required: true
    },
    inoculation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      guardianForm: {},
      inoculationForm: {},
    }
  },
  created() {
    this.guardianForm = { ...this.guardian };
    this.inoculationForm = { ...this.inoculation };
  },
  methods: {
    submit() {
      this.$emit('submit', this.guardian_profile, this.inoculation);
    }
  }
}

</script>
