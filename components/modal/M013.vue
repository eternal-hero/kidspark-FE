<template>
  <div>
    <button class="btn_style_05" @click="isShowing = true">絞り込む</button>
    <div class="popup-main" :class="{ open: isShowing }">
      <div class="popup-block">
        <span class="popup-block__close" @click="isShowing = false"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input" action="#" method="get">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <div class="form-narrow__txt">ユーザー</div>
                <input
                  type="text"
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                  v-model="modalData.username"
                />
                <span class="form-narrow__name">利用実績</span>
                <exeo-radio name="usage"  
                  v-model="modalData.usageRecord"
                  :options="$USAGE_RECORD"
                ></exeo-radio>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">都道府県</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    name="pref_name"
                    v-model="modalData.prefecture"
                    :options="$PREFECTURES"
                  ></exeo-select>
                </div>
                <span class="form-narrow__name">カメラ設置</span>
                <exeo-radio name="is_camera" v-model="modalData.is_camera" :options="$IS_CAMERA"></exeo-radio>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">緊急連絡先</div>
                <label class="form-narrow__input">
                  <input
                    type="text"
                    v-model="modalData.emergencyContactPhoneNumber"
                    placeholder="番号を入力"
                    class="form-narrow__input"
                  />
                </label>
              </div>
              <div class="form-narrow__item form-narrow__item--style2">
                <div class="form-narrow__txt">お子様の年齢</div>
                <exeo-checkbox
                  v-model="modalData.yearMonthRange"
                  :options="$YEAR_MONTH_RANGE">

                </exeo-checkbox>
              </div>
            </div>
            <div class="popup-ct__btn tc">
              <button class="btn_style_04" @click.prevent="submit">絞り込む</button>
              <input
                type="reset"
                @click.prevent="resetModal"
                value="すべてリセットする"
                class="btn_style_02"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoCheckbox from "@/components/action/ExeoCheckbox.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoRadio from "../action/ExeoRadio.vue";


export default {
  name: "M013",
  components: {ExeoSelect, ExeoCheckbox, ExeoRadio},
  data() {
    return {
      isShowing: false,
      modalData: {
        username: '', // ユーザー
        usageRecord: '', // 利用実績
        prefecture: '', // 都道府県
        is_camera: '', // カメラ設置
        emergencyContactPhoneNumber: '', // 緊急連絡先
        yearMonthRange: [] // お子様の年齢
      },
    };
  },
  methods: {
    resetModal() {
      this.modalData.username = '';
      this.modalData.usageRecord = '';
      this.modalData.prefecture = '';
      this.modalData.is_camera = '';
      this.modalData.emergencyContactPhoneNumber = '';
      this.modalData.yearMonthRange.splice(0);
    },
    submit() {
      this.isShowing = false;
      this.$emit('submit', this.modalData);
    }
  },
};
</script>

<style scoped></style>
