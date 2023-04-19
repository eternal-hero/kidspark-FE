<template>
  <div>
    <button class="btn_style_05" @click="isShowing = true">絞り込む</button>
    <div class="popup-main" :class="{ open: isShowing }">
      <div class="popup-block">
        <span class="popup-block__close" @click="isShowing = false"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <div class="form-narrow__txt">日程</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.dateRangeStart"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>〜</small>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.dateRangeEnd"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">公開応募ID</div>
                <exeo-form
                  type="text"
                  v-model="modalData.publicApplicationId"
                  placeholder="入力してください"
                  class="form-narrow__input"
                ></exeo-form>
                <span class="form-narrow__name">ステータス</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="$APPLY_STATUSES"
                    v-model="modalData.status"
                  ></exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">内容の種類</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="contentTypes"
                    v-model="modalData.contentType"
                  ></exeo-select>
                </div>
                <span class="form-narrow__name">定/単</span>
                <exeo-radio
                  :options="$PAYMENT_TYPES"
                  v-model="modalData.paymentType"
                  name="payment-type"
                ></exeo-radio>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">応募数</div>
                <exeo-radio
                  name="apply-status"
                  v-model="modalData.applyStatus"
                  :options="$HAS_APPLICATIONS"
                ></exeo-radio>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">募集期限</div>
                <label class="form-narrow__date">
                  <exeo-form
                    type="date"
                    v-model="modalData.recruitmentDeadline"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  ></exeo-form>
                </label>
                <small>まで</small>
              </div>
            </div>
            <div class="popup-ct__btn tc">
              <button class="btn_style_04" @click.prevent="search">
                絞り込む
              </button>
              <input
                type="reset"
                id="configreset"
                value="すべてリセットする"
                class="btn_style_02"
                @click="resetModal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoRadio from "@/components/action/ExeoRadio.vue";
import ExeoForm from "@/components/form/ExeoForm.vue";

export default {
  name: "M007",
  components: {
    ExeoForm,
    ExeoRadio,
    ExeoSelect,
  },
  data() {
    return {
      isShowing: false,
      contentTypes: [{ label: "すべて", value: "" }],
      modalData: {},
    };
  },
  methods: {
    search() {
      this.$emit("submit", this.modalData);
    },
    resetModal() {
      this.modalData = {
        paymentType: "",
        dateRangeStart: "",
        dateRangeEnd: "",
        publicApplicationId: "",
        status: "",
        contentType: "",
        applyStatus: "",
        recruitmentDeadline: "",
      };
    },
  },
  created() {
    this.resetModal();
  },
};
</script>

<style scoped></style>
