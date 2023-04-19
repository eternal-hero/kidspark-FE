<template>
  <div class="popup-main">
    <div class="popup-block">
      <span class="popup-block__close" @click.prevent="closeModal"></span>
      <h2 class="popup-block__ttl">絞り込む</h2>
      <div class="popup-ct">
        <form id="configform" name="input" action="#" method="get">
          <div class="form-narrow">
            <div class="form-narrow__item">
              <div class="form-narrow__txt">決済日</div>
              <label class="form-narrow__date">
                <input
                  type="date"
                  placeholder="日付を選択してください"
                  class="form-narrow__input form_part_date_input"
                  v-model="searchData.settlement_at_start"
                />
              </label>
              <small>〜</small>
              <label class="form-narrow__date">
                <input
                  type="date"
                  placeholder="日付を選択してください"
                  class="form-narrow__input form_part_date_input"
                  v-model="searchData.settlement_at_end"
                />
              </label>
            </div>
            <div class="form-narrow__item">
              <div class="form-narrow__txt">サポート日</div>
              <label class="form-narrow__date">
                <input
                  type="date"
                  placeholder="日付を選択してください"
                  class="form-narrow__input form_part_date_input"
                  v-model="searchData.support_at_start"
                />
              </label>
              <small>〜</small>
              <label class="form-narrow__date">
                <input
                  type="date"
                  placeholder="日付を選択してください"
                  class="form-narrow__input form_part_date_input"
                  v-model="searchData.support_at_end"
                />
              </label>
            </div>
            <div class="form-narrow__item">
              <div class="form-narrow__txt">決済状況</div>
              <div class="form-narrow__select form_part_select">
                <exeo-select :options="options" v-model="searchData.status" />
              </div>
            </div>
            <div class="form-narrow__item">
              <div class="form-narrow__txt">ユーザー</div>
              <ExeoForm
                placeholder="IDまたは名前を入力"
                class="form-narrow__input"
                v-model="searchData.user_info"
              />
            </div>
          </div>
          <div class="popup-ct__btn tc">
            <button class="btn_style_04" @click="emitData">
              絞り込む
            </button>
            <input
              type="reset"
              id="configreset"
              value="すべてリセットする"
              class="btn_style_02"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoCheckbox from "@/components/action/ExeoCheckbox.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoForm from "@/components/form/ExeoForm.vue";

export default {
  props: {
    
    isShowing: {
      default: false,
    },
  },
  components: {
    ExeoCheckbox,
    ExeoSelect,
    ExeoForm,
    ExeoSelect,
  },
  data() {
    return {
      searchData: {
        settlement_at_start: "",
        settlement_at_end: "",
        support_at_start: "",
        support_at_end: "",
        status: "",
        user_info: "",
      },
      options: [
        { value: "", label: "すべて" },
        { value: "0", label: "未対応" },
        { value: "1", label: "対応済み" },
        { value: "2", label: "期限切れ" },
        { value: "3", label: "不受理" },
      ],
    };
  },
  methods: {
    emitData() {
      this.isShowing = false;
      // this.searchData.settlement_at_start = searchData.settlement_at_start;
      // this.searchData.settlement_at_end = searchData.settlement_at_end;
      // this.searchData.support_at_start = searchData.support_at_start;
      // this.searchData.support_at_end = searchData.support_at_end;
      // this.searchData.status = searchData.status;
      // this.searchData.user_info = searchData.user_info;
      console.log("data", this.searchData);
      this.$emit("submit", this.searchData);
    },
    closeModal() {
      this.isShowing = false;
      this.$emit("close", this.isShowing);
    },
    resetData() {
      this.searchData.settlement_at_start = "";
      this.searchData.settlement_at_end = "";
      this.searchData.support_at_start = "";
      this.searchData.support_at_end = "";
      this.searchData.status = "";
      this.searchData.user_info = "";
    },
  },
};
</script>

