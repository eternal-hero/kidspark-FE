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
                <div class="form-narrow__txt">開始日</div>
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
                <div class="form-narrow__txt">お仕事ID</div>
                <exeo-form
                  type="text"
                  v-model="modalData.jobId"
                  placeholder="入力してください"
                  class="form-narrow__input"
                ></exeo-form>
                <span class="form-narrow__name">ステータス</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="$JOB_STATUSES"
                    v-model="modalData.status"
                  ></exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">パークサポーター</div>
                <exeo-form
                  type="text"
                  v-model="modalData.parkSupporter"
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                ></exeo-form>
                <span class="form-narrow__name">定/単</span>
                <exeo-radio
                  :options="$PAYMENT_TYPES"
                  v-model="modalData.paymentType"
                  name="paymentType"
                ></exeo-radio>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">見守り</div>
                <exeo-radio
                  :options="$WATCHOVER_OPTIONS"
                  v-model="modalData.watchOver"
                  name="watchOver"
                ></exeo-radio>
                <span class="form-narrow__name">依頼カテゴリー</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="$REQUEST_CATEGORIES"
                    v-model="modalData.requestCategory"
                  ></exeo-select>
                </div>
              </div>
            </div>
            <div class="popup-ct__btn tc">
              <button class="btn_style_04" @click.prevent="submit">
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
  name: "M008",
  components: {
    ExeoForm,
    ExeoRadio,
    ExeoSelect,
  },
  data() {
    return {
      isShowing: false,
      modalData: {},
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.modalData);
    },
    resetModal() {
      this.modalData = {
        dateRangeStart: "",
        dateRangeEnd: "",
        jobId: "",
        status: "",
        parkSupporter: "",
        paymentType: "",
        watchOver: "",
        requestCategory: "",
      };
    },
  },
  created() {
    this.resetModal();
  },
};
</script>

<style scoped></style>
