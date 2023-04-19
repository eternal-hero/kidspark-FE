<template>
  <div class="application-block__btn">
    <button class="btn_style_05 js-popup" @click="isShowing = true">
      絞り込む
    </button>
    <div class="popup-main">
      <div class="popup-block">
        <span class="popup-block__close"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input" action="#" method="get">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <span class="form-narrow__txt">月</span>
                <label class="form-narrow__date">
                  <input
                    type="month"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                    v-model="modalData.month"
                  />
                </label>
                <div class="form-narrow__name form-narrow__name--03">
                  パークサポーター
                </div>
                <exeo-form
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                  v-model="modalData.name"
                />
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">売上</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="option_sales"
                    v-model="modalData.sales"
                  />
                </div>
                <span class="form-narrow__name form-narrow__name--03"
                  >支払い</span
                >
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="option_payment"
                    v-model="modalData.payment"
                  />
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">申請日</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                    v-model="modalData.start"
                  />
                </label>
                <small>〜</small>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                    v-model="modalData.end"
                  />
                </label>
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
import ExeoSelect from "../action/ExeoSelect.vue";
import ExeoForm from "../form/ExeoForm.vue";

export default {
  name: "M030",
  components: {
    ExeoSelect,
    ExeoForm,
  },
  data() {
    return {
      option_sales: [
        { label: "すべて", value: "" },
        { label: "未確定", value: 0 },
        { label: "確定済み", value: 1 },
      ],
      option_payment: [
        { label: "すべて", value: "" },
        { label: "振込エラー", value: 0 },
        { label: "支払い済み", value: 1 },
      ],
      isShowing: false,
      modalData: {},
    };
  },
  methods: {
    submit() {
      this.$emit("submitData", this.modalData);
    },
    resetModal() {
      this.modalData = {
        month: "",
        name: "",
        sales: "",
        payment: "",
        start: "",
        end: "",
      };
    },
  },
  created() {
    this.resetModal();
  },
};
</script>

<style scoped></style>
